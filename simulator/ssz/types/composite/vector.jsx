/* eslint-disable @typescript-eslint/camelcase */

import React from "react";
import { IArrayOptions, BasicArrayType, CompositeArrayType } from "./array";
import { isBasicType } from "../basic";
import { isTypeOf, Type } from "../type";
import {
  Node,
  subtreeFillToLength,
  Tree,
  zeroNode,
} from "../../../../e-z-serialize/persistent";

import * as abstract from "./abstract";
import * as array from "./array";

export const VECTOR_TYPE = Symbol.for("ssz/VectorType");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isVectorType(type) {
  return isTypeOf(type, VECTOR_TYPE);
}

// Trick typescript into treating VectorType as a constructor
export default function VectorType(props) {
  if (isBasicType(props.elementType)) {
    return <BasicVectorType {...props} />;
  } else {
    return <CompositeVectorType {...props} />;
  }
}

export function BasicVectorType(props) {
  const _typeSymbols = props._typeSymbols.add(VECTOR_TYPE);

  function struct_defaultValue() {
    return Array.from({ length: props.length }, () => {
      return props.struct_defaultValue();
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function struct_getLength(value = none) {
    return props.length;
  }

  function getMaxLength() {
    return props.length;
  }

  function getMinLength() {
    return props.length;
  }

  function bytes_validate(data, start, end) {
    abstract.bytes_validate(data, start, end);
    if (end - start !== props.size(null)) {
      throw new Error("Incorrect deserialized vector length");
    }
  }

  function struct_deserializeFromBytes(data, start, end) {
    bytes_validate(data, start, end);
    return array.struct_deserializeFromBytes(data, start, end);
  }

  function struct_assertValidValue(value) {
    const actualLength = value.length;
    const expectedLength = struct_getLength(value);
    if (actualLength !== expectedLength) {
      throw new Error(
        `Invalid vector length: expected ${expectedLength}, actual ${actualLength}`
      );
    }
    array.struct_assertValidValue(value);
  }

  function struct_convertFromJson(data) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON vector: expected an Array");
    }
    const expectedLength = props.length;
    if (data.length !== expectedLength) {
      throw new Error(
        `Invalid JSON vector length: expected ${expectedLength}, actual ${data.length}`
      );
    }
    return array.struct_convertFromJson(data);
  }

  function tree_defaultNode() {
    if (!props._defaultNode) {
      props._defaultNode = subtreeFillToLength(
        zeroNode(0),
        props.getChunkDepth(),
        props.getMaxChunkCount()
      );
    }
    return props._defaultNode;
  }

  function tree_defaultValue() {
    return new Tree(tree_defaultNode());
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function tree_getLength(target = none) {
    return props.length;
  }

  function tree_deserializeFromBytes(data, start, end) {
    if (end - start !== props.struct_getSerializedLength(null)) {
      throw new Error("Incorrect deserialized vector length");
    }
    return array.tree_deserializeFromBytes(data, start, end);
  }

  function tree_setProperty(target, property, value) {
    if (property >= tree_getLength(target)) {
      throw new Error("Invalid array index");
    }
    return array.tree_setProperty(target, property, value, false);
  }

  function hasVariableSerializedLength() {
    return false;
  }

  function getMaxChunkCount() {
    return Math.ceil((props.length * props.size()) / 32);
  }

  return (
    <BasicArrayType
      _chunkDepth={props._chunkDepth}
      _typeSymbols={_typeSymbols}
      bytes_validate={bytes_validate}
      elementType={props.elementType}
      getChunkDepth={props.getChunkDepth}
      getGindexAtChunkIndex={props.getGindexAtChunkIndex}
      getMaxChunkCount={getMaxChunkCount}
      getMaxLength={getMaxLength}
      getMaxSerializedLength={props.getMaxSerializedLength}
      getMinLength={getMinLength}
      getMinSerializedLength={props.getMinSerializedLength}
      hasVariableSerializedLength={hasVariableSerializedLength}
      struct_assertValidValue={struct_assertValidValue}
      struct_clone={props.struct_clone}
      struct_convertFromJson={struct_convertFromJson}
      struct_convertToJson={props.struct_convertToJson}
      struct_defaultNode={struct_defaultNode}
      struct_defaultValue={struct_defaultValue}
      struct_deserializeFromBytes={struct_deserializeFromBytes}
      struct_equals={props.struct_equals}
      struct_getChunkCount={props.struct_getChunkCount}
      struct_getLength={struct_getLength}
      struct_getSerializedLength={props.struct_getSerializedLength}
      struct_hashTreeRoot={props.struct_hashTreeRoot}
      struct_serializeToBytes={props.struct_serializeToBytes}
      struct_yieldChunkRoots={props.struct_yieldChunkRoots}
      tree_defaultNode={tree_defaultNode}
      tree_defaultValue={tree_defaultValue}
      tree_getChunkCount={props.tree_getChunkCount}
      tree_getLength={tree_getLength}
      tree_getRootAtChunkIndex={props.tree_getRootAtChunkIndex}
      tree_getSerializedLength={props.tree_getSerializedLength}
    ></BasicArrayType>
  );
}

export function CompositeVectorType(props) {
  const _typeSymbols = props._typeSymbols.add(VECTOR_TYPE);

  function struct_defaultValue() {
    return Array.from({ length: props.length }, () => {
      return props.struct_defaultValue();
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function struct_getLength(value) {
    return props.length;
  }

  function getMaxLength() {
    return props.length;
  }

  function getMinLength() {
    return props.length;
  }

  function struct_deserializeFromBytes(data, start, end) {
    props.bytes_validate(data, start, end);
    const value = array.struct_deserializeFromBytes(data, start, end);
    if (value.length !== props.length) {
      throw new Error("Incorrect deserialized vector length");
    }
    return value;
  }

  function struct_assertValidValue(value) {
    const actualLength = value.length;
    const expectedLength = props.struct_getLength(value);
    if (actualLength !== expectedLength) {
      throw new Error(
        `Invalid vector length: expected ${expectedLength}, actual ${actualLength}`
      );
    }
    array.struct_assertValidValue(value);
  }

  function struct_convertFromJson(data) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON vector: expected an Array");
    }
    const expectedLength = props.length;
    if (data.length !== expectedLength) {
      throw new Error(
        `Invalid JSON vector length: expected ${expectedLength}, actual ${data.length}`
      );
    }
    return array.struct_convertFromJson(data);
  }

  function tree_defaultNode() {
    let defaultNode = props._defaultNode;
    if (!props._defaultNode) {
      defaultNode = subtreeFillToLength(
        props.tree_defaultNode(),
        props.getChunkDepth(),
        props.length
      );
    }
    return defaultNode;
  }

  function tree_defaultValue() {
    return new Tree(tree_defaultNode());
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function tree_getLength(target) {
    return props.length;
  }

  function tree_deserializeFromBytes(data, start, end) {
    const target = tree_defaultValue();
    if (props.hasVariableSerializedLength()) {
      const offsets = props.bytes_getVariableOffsets(
        new Uint8Array(data.buffer, data.byteOffset + start, end - start)
      );
      if (offsets.length !== props.length) {
        throw new Error("Incorrect deserialized vector length");
      }
      for (let i = 0; i < offsets.length; i++) {
        const [currentOffset, nextOffset] = offsets[i];
        props.tree_setSubtreeAtChunkIndex(
          target,
          i,
          props.tree_deserializeFromBytes(
            data,
            start + currentOffset,
            start + nextOffset
          )
        );
      }
    } else {
      const elementSize = props.struct_getSerializedLength(null);
      const length = (end - start) / elementSize;
      if (length !== props.length) {
        throw new Error("Incorrect deserialized vector length");
      }
      for (let i = 0; i < length; i++) {
        props.tree_setSubtreeAtChunkIndex(
          target,
          i,
          props.tree_deserializeFromBytes(
            data,
            start + i * elementSize,
            start + (i + 1) * elementSize
          )
        );
      }
    }
    return target;
  }

  function setProperty(target, property, value) {
    if (property >= props.tree_getLength(target)) {
      throw new Error("Invalid array index");
    }
    return array.tree_setProperty(target, property, value, false);
  }

  function hasVariableSerializedLength() {
    return props.hasVariableSerializedLength();
  }

  function getMaxChunkCount() {
    return props.length;
  }

  return (
    <CompositeArrayType
      _chunkDepth={props._chunkDepth}
      _typeSymbols={_typeSymbols}
      bytes_validate={props.bytes_validate}
      elementType={props.elementType}
      // fromJson={props.fromJson}
      getChunkDepth={props.getChunkDepth}
      getGindexAtChunkIndex={props.getGindexAtChunkIndex}
      getMaxChunkCount={getMaxChunkCount}
      getMaxLength={getMaxLength}
      getMaxSerializedLength={props.getMaxSerializedLength}
      getMinLength={getMinLength}
      getMinSerializedLength={props.getMinSerializedLength}
      hashTreeRoot={props.hashTreeRoot}
      hasVariableSerializedLength={hasVariableSerializedLength}
      struct_assertValidValue={struct_assertValidValue}
      struct_clone={props.struct_clone}
      struct_convertFromJson={struct_convertFromJson}
      struct_convertToJson={props.struct_convertToJson}
      struct_convertToTree={props.struct_convertToTree}
      struct_defaultNode={struct_defaultNode}
      struct_defaultValue={struct_defaultValue}
      struct_deserializeFromBytes={struct_deserializeFromBytes}
      struct_equals={props.struct_equals}
      struct_getChunkCount={props.struct_getChunkCount}
      struct_getLength={struct_getLength}
      struct_getSerializedLength={props.struct_getSerializedLength}
      struct_hashTreeRoot={props.struct_hashTreeRoot}
      struct_serializeToBytes={props.struct_serializeToBytes}
      // struct_yieldChunkRoots={props.struct_yieldChunkRoots}
      tree_convertToStruct
      tree_defaultNode={tree_defaultNode}
      tree_defaultValue={tree_defaultValue}
      tree_getChunkCount={props.tree_getChunkCount}
      tree_getLeafGindices={props.tree_getLeafGindices}
      tree_getLength={tree_getLength}
      tree_getRootAtChunkIndex={props.tree_getRootAtChunkIndex}
      tree_getSerializedLength={props.tree_getSerializedLength}
      tree_getSubtreeAtChunkIndex={props.tree_getSubtreeAtChunkIndex}
      tree_serializeToBytes={props.tree_serializeToBytes}
      tree_setSubtreeAtChunkIndex={props.tree_setSubtreeAtChunkIndex}
      tree_setProperty={props.tree_setProperty}
      tree_setRootAtChunkIndex={props.tree_setRootAtChunkIndex}
    ></CompositeArrayType>
  );
}
