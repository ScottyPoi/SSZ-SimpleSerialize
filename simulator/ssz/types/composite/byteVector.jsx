/* eslint-disable @typescript-eslint/camelcase */
import {BasicVectorType} from "./vector";
import {byteType} from "../basic";
import {isTypeOf, Type} from "../type";
import {fromHexString, toHexString} from "../../util/byteArray";
import {Node, Tree} from "../../../../e-z-serialize/persistent";
import React from 'react';


export const BYTEVECTOR_TYPE = Symbol.for("ssz/ByteVectorType");

export function isByteVectorType(type) {
  return isTypeOf(type, BYTEVECTOR_TYPE);
}

export default function ByteVectorType(props) {

  const _typeSymbols = props._typeSymbols.add(BYTEVECTOR_TYPE);
  

  function struct_defaultValue() {
    return new Uint8Array(this.length);
  }

  function struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    const length = end - start;
    if (length !== this.length) {
      throw new Error(`Invalid deserialized vector length: expected ${this.length}, actual: ${length}`);
    }
    const value = new Uint8Array(length);
    value.set(data.slice(start, end));
    return value;
  }

  function struct_serializeToBytes(value, output, offset) {
    output.set(value, offset);
    return offset + this.length;
  }

  function struct_convertFromJson(data) {
    const value = fromHexString(data);
    if (value.length !== this.length) {
      throw new Error(`Invalid JSON vector length: expected ${this.length}, actual: ${value.length}`);
    }
    return value;
  }

  function struct_convertToJson(value) {
    return toHexString(value);
  }

  function tree_convertToStruct(target) {
    const value = new Uint8Array(this.length);
    const chunkIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.getMaxChunkCount());
    if (this.length % 32 === 0) {
      for (let i = 0; i < this.length; i += 32) {
        value.set((chunkIterator.next()).value.root, i);
      }
    } else {
      let i;
      for (i = 0; i < this.length - 32; i += 32) {
        value.set((chunkIterator.next()).value.root, i);
      }
      value.set((chunkIterator.next()).value.root.subarray(0, this.length - i), i);
    }
    return value;
  }

  return (
    <VectorType
    _typeSymbols={_typeSymbols}
    struct_defaultValue={struct_defaultValue}
    length={props.length}
    size={props.size}
    _defaultNode={props._defaultNode}
    getChunkDepth={props.getChunkDepth}
    getMaxChunkCount={props.getMaxChunkCount}
    struct_getSerializedLength={props.struct_getSerializedLength}
    _chunkDepth={props._chunkDepth}
    elementType={props.elementType}
    getGindexAtChunkIndex={props.getGindexAtChunkIndex}
    getMaxSerializedLength={props.getMaxSerializedLength}
    getMinSerializedLength={props.getMinSerializedLength}
    struct_clone={props.struct_clone}
    struct_convertToJson={struct_convertToJson}
    struct_equals={props.struct_equals}
    struct_getChunkCount={props.struct_getChunkCount}
    struct_hashTreeRoot={props.struct_hashTreeRoot}
    struct_serializeToBytes={struct_serializeToBytes}
    struct_yieldChunkRoots={props.struct_yieldChunkRoots}
    tree_getChunkCount={props.tree_getChunkCount}
    tree_setRootAtChunkIndex={props.tree_setRootAtChunkIndex}
    >

    </VectorType>
  )
}
