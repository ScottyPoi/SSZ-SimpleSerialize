/* eslint-disable @typescript-eslint/camelcase */
import {BasicListType} from "./list";
import {booleanType} from "../basic";
import {isTypeOf, Type} from "../type";
import {fromHexString, toHexString} from "../../util/byteArray";
import React from "react";



export const BITLIST_TYPE = Symbol.for("ssz/BitListType");

export function isBitListType(type) {
  return isTypeOf(type, BITLIST_TYPE);
}

export class BitListType extends React.Component {
  constructor(options) {
    super({elementType: booleanType, ...options});
    this._typeSymbols.add(BITLIST_TYPE);
  }

  struct_getByte(value, index) {
    const firstBitIndex = index * 8;
    const lastBitIndex = Math.min(firstBitIndex + 7, value.length - 1);
    let bitstring = "0b";
    for (let i = lastBitIndex; i >= firstBitIndex; i--) {
      bitstring += value[i] ? "1" : "0";
    }
    return Number(bitstring);
  }

  struct_getLength(value) {
    return value.length;
  }

  struct_getByteLength(value) {
    return Math.ceil(value.length / 8);
  }

  struct_getSerializedLength(value) {
    if (value.length % 8 === 0) {
      return this.struct_getByteLength(value) + 1;
    } else {
      return this.struct_getByteLength(value);
    }
  }

  getMaxSerializedLength() {
    return Math.ceil(this.limit / 8) + 1;
  }

  getMinSerializedLength() {
    return 1;
  }

  struct_getChunkCount(value) {
    return Math.ceil(this.struct_getLength(value) / 256);
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const value = [];
    const toBool = (c) => (c === "1" ? true : false);
    for (let i = start; i < end - 1; i++) {
      let bitstring = data[i].toString(2);
      bitstring = "0".repeat(8 - bitstring.length) + bitstring;
      value.push(...Array.prototype.map.call(bitstring, toBool).reverse());
    }
    const lastByte = data[end - 1];
    if (lastByte === 0) {
      throw new Error("Invalid deserialized bitlist, padding bit required");
    }
    if (lastByte === 1) {
      return value;
    }
    const lastBits = Array.prototype.map.call(lastByte.toString(2), toBool).reverse();
    const last1 = lastBits.lastIndexOf(true);
    value.push(...lastBits.slice(0, last1));
    if (value.length > this.limit) {
      throw new Error("Invalid deserialized bitlist, length greater than limit");
    }
    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    const byteLength = this.struct_getByteLength(value);
    for (let i = 0; i < byteLength; i++) {
      output[offset + i] = this.struct_getByte(value, i);
    }
    const newOffset = offset + byteLength;
    if (value.length % 8 === 0) {
      output[newOffset] = 1;
      return newOffset + 1;
    } else {
      output[newOffset - 1] |= 1 << value.length % 8;
      return newOffset;
    }
  }

  struct_getRootAtChunkIndex(value, index) {
    const output = new Uint8Array(32);
    const byteLength = Math.min(32, this.struct_getByteLength(value) - index * 32);
    for (let i = 0; i < byteLength; i++) {
      output[i] = this.struct_getByte(value, i + index);
    }
    return output;
  }

  struct_convertFromJson(data) {
    const bytes = fromHexString(data);
    return this.struct_deserializeFromBytes(bytes, 0, bytes.length);
  }

  struct_convertToJson(value) {
    return toHexString(this.serialize(value));
  }

  tree_getByteLength(target) {
    return Math.ceil(this.tree_getLength(target) / 8);
  }

  tree_getSerializedLength(target) {
    const bitLength = this.tree_getLength(target);
    if (bitLength % 8 === 0) {
      return this.tree_getByteLength(target) + 1;
    } else {
      return this.tree_getByteLength(target);
    }
  }

  tree_deserializeFromBytes(data, start, end) {
    const lastByte = data[end - 1];
    if (lastByte === 0) {
      throw new Error("Invalid deserialized bitlist, padding bit required");
    }
    const target = super.tree_deserializeFromBytes(data, start, end);
    const lastGindex = this.getGindexAtChunkIndex(Math.ceil((end - start) / 32) - 1);
    // copy chunk into new memory
    const lastChunk = new Uint8Array(32);
    lastChunk.set(target.getRoot(lastGindex));
    const lastChunkByte = ((end - start) % 32) - 1;
    let length;
    if (lastByte === 1) {
      // zero lastChunkByte
      length = (end - start - 1) * 8;
      lastChunk[lastChunkByte] = 0;
    } else {
      // mask lastChunkByte
      const lastByteBitLength = lastByte.toString(2).length - 1;
      length = (end - start - 1) * 8 + lastByteBitLength;
      const mask = 0xff >> (8 - lastByteBitLength);
      lastChunk[lastChunkByte] &= mask;
    }
    target.setRoot(lastGindex, lastChunk);
    this.tree_setLength(target, length);
    return target;
  }

  tree_serializeToBytes(target, output, offset) {
    const newOffset = super.tree_serializeToBytes(target, output, offset);
    const bitLength = this.tree_getLength(target);
    const size = this.tree_getSerializedLength(target);
    // set padding bit
    output[offset + size - 1] |= 1 << bitLength % 8;
    return newOffset;
  }

  getBitOffset(index) {
    return index % 8;
  }

  getChunkOffset(index) {
    return Math.floor((index % 256) / 8);
  }

  getChunkIndex(index) {
    return Math.floor(index / 256);
  }

  tree_getChunkCount(target) {
    return Math.ceil(this.tree_getLength(target) / 256);
  }

  *tree_iterateValues(target) {
    const length = this.tree_getLength(target);
    const chunkCount = this.tree_getChunkCount(target);
    const nodeIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, chunkCount);
    let i = 0;
    for (const node of nodeIterator) {
      const chunk = node.root;
      for (let j = 0; j < 256 && i < length; i++, j++) {
        const byte = chunk[this.getChunkOffset(i)];
        yield !!(byte & (1 << this.getBitOffset(i)));
      }
    }
  }

  tree_getValueAtIndex(target, index) {
    const chunk = this.tree_getRootAtChunkIndex(target, this.getChunkIndex(index));
    const byte = chunk[this.getChunkOffset(index)];
    return !!(byte & (1 << this.getBitOffset(index)));
  }

  tree_setValueAtIndex(target, property, value, expand = false) {
    const chunkGindex = this.getGindexAtChunkIndex(this.getChunkIndex(property));
    const chunk = new Uint8Array(32);
    chunk.set(target.getRoot(chunkGindex));
    const byteOffset = this.getChunkOffset(property);
    if (value) {
      chunk[byteOffset] |= 1 << this.getBitOffset(property);
    } else {
      chunk[byteOffset] &= 0xff ^ (1 << this.getBitOffset(property));
    }
    target.setRoot(chunkGindex, chunk, expand);
    return true;
  }

  getMaxChunkCount() {
    return Math.ceil(this.limit / 256);
  }
}
