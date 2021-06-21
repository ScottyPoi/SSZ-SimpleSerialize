/* eslint-disable @typescript-eslint/camelcase */
import { BasicVectorType, VectorType } from "./vector";
import { isTypeOf, Type } from "../type";
import { fromHexString, toHexString, getByteBits } from "../../util/byteArray";
// import { Tree } from "../../../../e-z-serialize/persistent";
import React from "react";
import * as vector from "./vector";
import * as boolean from "../basic/boolean";

export const BITVECTOR_TYPE = Symbol.for("ssz/BitVectorType");




export function isBitVectorType(type) {
  return isTypeOf(type, BITVECTOR_TYPE);
}

export function struct_getByte(value, index) {
  const firstBitIndex = index * 8;
  const lastBitIndex = Math.min(firstBitIndex + 7, value.length - 1);
  let bitstring = "0b";
  for (let i = lastBitIndex; i >= firstBitIndex; i--) {
    bitstring += value[i] ? "1" : "0";
  }
  return Number(bitstring);
}

function struct_getByteLength(value) {
  return Math.ceil(value.length / 8);
}

const BYTES_PER_CHUNK = 32;
const BITS_PER_CHUNK = 256;

export function chunkCount(vector) {
  Math.floor((vector.length + 31) / BYTES_PER_CHUNK);
}

export function serializeChunk(chunk) {
  let _output = new Uint8Array(32);
  for (let i = 0; i < 256; i++) {
    boolean.serialize(chunk[i], _output, i);
  }
  return _output;
}

export default function BitVectorType(props) {
  const _typeSymbols = props._typeSymbols.add(BITVECTOR_TYPE);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function struct_getLength(value) {
    return props.length;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function struct_getSerializedLength(value) {
    return Math.ceil(props.length / 8);
  }

  function getMaxSerializedLength() {
    return struct_getSerializedLength(null);
  }

  function getMinSerializedLength() {
    return struct_getSerializedLength(null);
  }

  function struct_getChunkCount(value) {
    return Math.ceil(struct_getLength(value) / 256);
  }

  function struct_getByte(value, index) {
    const firstBitIndex = index * 8;
    const lastBitIndex = Math.min(firstBitIndex + 7, value.length - 1);
    let bitstring = "0b";
    for (let i = lastBitIndex; i >= firstBitIndex; i--) {
      bitstring += value[i] ? "1" : "0";
    }
    return Number(bitstring);
  }

  function struct_deserializeFromBytes(data, start, end) {
    props.bytes_validate(data, start, end);
    if (end - start !== props.size(null)) {
      throw new Error("Invalid bitvector: length not equal to vector length");
    }
    const value = [];
    for (let i = start; i < end - 1; i++) {
      value.push(...getByteBits(data, i));
    }
    const lastBitLength = props.length % 8;
    if (!lastBitLength) {
      // vector takes up the whole byte, no need for checks
      value.push(...getByteBits(data, end - 1));
    } else {
      const lastBits = getByteBits(data, end - 1);
      if (lastBits.slice(lastBitLength).some((b) => b)) {
        throw new Error("Invalid bitvector: nonzero bits past length");
      }
      value.push(...lastBits.slice(0, lastBitLength));
    }
    return value;
  }

  function struct_serializeToBytes(value, output, offset) {
    const byteLength = struct_getByteLength(value);
    for (let i = 0; i < byteLength; i++) {
      output[offset + i] = struct_getByte(value, i);
    }
    return offset + byteLength;
  }

  function struct_getRootAtChunkIndex(value, index) {
    const output = new Uint8Array(32);
    const byteLength = Math.min(32, struct_getByteLength(value) - index);
    for (let i = 0; i < byteLength; i++) {
      output[i] = struct_getByte(value, i + index);
    }
    return output;
  }

  function struct_convertFromJson(data) {
    const bytes = fromHexString(data);
    return props.fromBytes(bytes, 0, bytes.length);
  }

  function struct_convertToJson(value) {
    return toHexString(props.serialize(value));
  }

  function tree_getByteLength(target) {
    return Math.ceil(props.tree_getLength(target) / 8);
  }

  function tree_getSerializedLength(target) {
    return tree_getByteLength(target);
  }

  function tree_deserializeFromBytes(data, start, end) {
    // mask last byte to ensure it doesn't go over length
    const lastByte = data[end - 1];
    const mask = (0xff << props.length % 8) & 0xff;
    if (lastByte & mask) {
      throw new Error("Invalid deserialized bitvector length");
    }
    return vector.tree_deserializeFromBytes(data, start, end);
  }

  function getBitOffset(index) {
    return index % 8;
  }

  function getChunkOffset(index) {
    return Math.floor((index % 256) / 8);
  }

  function getChunkIndex(index) {
    return Math.floor(index / 256);
  }

  function tree_getChunkCount(target) {
    return Math.ceil(tree_getLength(target) / 256);
  }

  function* tree_iterateValues(target) {
    const length = tree_getLength(target);
    const chunkCount = tree_getChunkCount(target);
    const nodeIterator = target.iterateNodesAtDepth(
      props.getChunkDepth(),
      0,
      chunkCount
    );
    let i = 0;
    for (const node of nodeIterator) {
      const chunk = node.root;
      for (let j = 0; j < 256 && i < length; i++, j++) {
        const byte = chunk[getChunkOffset(i)];
        yield !!(byte & (1 << getBitOffset(i)));
      }
    }
  }

  function tree_getValueAtIndex(target, index) {
    const chunk = props.tree_getRootAtChunkIndex(target, getChunkIndex(index));
    const byte = chunk[getChunkOffset(index)];
    return !!(byte & (1 << getBitOffset(index)));
  }

  function tree_setProperty(target, property, value) {
    const chunkGindex = props.getGindexAtChunkIndex(getChunkIndex(property));
    const chunk = new Uint8Array(32);
    chunk.set(target.getRoot(chunkGindex));
    const byteOffset = getChunkOffset(property);
    if (value) {
      chunk[byteOffset] |= 1 << getBitOffset(property);
    } else {
      chunk[byteOffset] &= 0xff ^ (1 << getBitOffset(property));
    }
    target.setRoot(chunkGindex, chunk);
    return true;
  }

  function getMaxChunkCount() {
    return Math.ceil(props.length / 256);
  }

  return (
    <VectorType
      _typeSymbols={_typeSymbols}
      struct_defaultValue={struct_defaultValue}
      length={length}
      size={size}
      _defaultNode={_defaultNode}
      getChunkDepth={getChunkDepth}
      getMaxChunkCount={getMaxChunkCount}
      struct_getSerializedLength={struct_getSerializedLength}
      _chunkDepth={_chunkDepth}
      elementType={elementType}
      struct_convertFromJson={struct_convertFromJson}
      getGindexAtChunkIndex={getGindexAtChunkIndex}
      getMaxSerializedLength={getMaxSerializedLength}
      getMinSerializedLength={getMinSerializedLength}
      hashRreeRoot={hashTreeRoot}
      struct_clone={struct_clone}
      struct_convertToJson={struct_convertToJson}
      struct_equals={struct_equals}
      struct_getChunkCount={struct_getChunkCount}
      struct_hashTreeRoot={struct_hashTreeRoot}
      struct_serializeToBytes={struct_serializeToBytes}
      struct_deserializeFromBytes={struct_deserializeFromBytes}
      struct_yieldChunkRoots={struct_yieldChunkRoots}
      tree_deserializeFromBytes={tree_deserializeFromBytes}
      tree_getChunkCount={tree_getChunkCount}
      tree_getLeafGindices={tree_getLeafGindices}
      tree_getSubtreeAtChunkIndex={tree_getSubtreeAtChunkIndex}
      tree_setRootAtChunkIndex={tree_setRootAtChunkIndex}
    ></VectorType>
  );
}
