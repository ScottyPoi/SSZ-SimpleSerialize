/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { IArrayOptions, BasicArrayType, CompositeArrayType } from "./array";
import { isBasicType, number32Type } from "../basic";
import { IJsonOptions, isTypeOf, Type } from "../type";
import { mixInLength } from "../../util/compat";
import {
  BranchNode,
  concatGindices,
  Gindex,
  Node,
  Tree,
  zeroNode,
} from "../../../../e-z-serialize/persistent";
import { isTreeBacked } from "../../backings/tree/treeValue/treeValue";
import * as abstract from './abstract'
import * as array from './array'
// bytes_validate, struct_deserializefrombytes, structhashtreeroot, strctcnvrtfromjson, strctconverttotree, getchunkdeapth, tree deseresfrombyartes, treedeleetepropery, treegetleafgindices,  
/**
 * SSZ Lists (variable-length arrays) include the length of the list in the tree
 * This length is always in the same index in the tree
 * ```
 *   1
 *  / \
 * 2   3 // <-here
 * ```
 */
export const LENGTH_GINDEX = BigInt(3);

export const LIST_TYPE = Symbol.for("ssz/ListType");

export function BasicListType(props) {
  const _typeSymbols = props._typeSymbols.add(LIST_TYPE);

  function struct_defaultValue() {
    return [];
  }

  function struct_getLength(value) {
    return value.length;
  }

  function getMaxLength() {
    return props.limit;
  }

  function getMinLength() {
    return 0;
  }

  function bytes_validate(data, start, end) {
    abstract.bytes_validate(data, start, end);
    if (end - start > props.getMaxSerializedLength()) {
      throw new Error("Deserialized list length greater than limit");
    }
  }

  function struct_deserializeFromBytes(data, start, end) {
    bytes_validate(data, start, end);
    return array.struct_deserializeFromBytes(data, start, end);
  }

  function struct_getChunkCount(value) {
    return Math.ceil((value.length * props.struct_getSerializedLength()) / 32);
  }

  function struct_hashTreeRoot(value) {
    return mixInLength(array.struct_hashTreeRoot(value), value.length);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function struct_convertFromJson(data, options) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON list: expected an Array");
    }
    const maxLength = props.limit;
    if (data.length > maxLength) {
      throw new Error(
        `Invalid JSON list: length ${data.length} greater than limit ${maxLength}`
      );
    }
    return array.struct_convertFromJson(data);
  }

  function struct_convertToTree(value) {
    if (isTreeBacked < T > value) return value.tree.clone();
    const tree = array.struct_convertToTree(value);

    tree_setLength(tree, value.length);
    return tree;
  }

  function tree_defaultNode() {
    let defaultNode = props._defaultNode;
    if (!props._defaultNode) {
      defaultNode = new BranchNode(
        zeroNode(abstract.getChunkDepth()),
        zeroNode(0)
      );
    }
    return defaultNode;
  }

  function tree_defaultValue() {
    return new Tree(tree_defaultNode());
  }

  function tree_getLength(target) {
    return number32Type.struct_deserializeFromBytes(
      target.getRoot(LENGTH_GINDEX),
      0
    );
  }

  function tree_setLength(target, length) {
    const chunk = new Uint8Array(32);
    number32Type.toBytes(length, chunk, 0);
    target.setRoot(LENGTH_GINDEX, chunk);
  }

  function tree_deserializeFromBytes(data, start, end) {
    const length = (end - start) / props.struct_getSerializedLength();
    if (!Number.isSafeInteger(length)) {
      throw new Error(
        "Deserialized list byte length must be divisible by element size"
      );
    }
    if (length > props.limit) {
      throw new Error("Deserialized list length greater than limit");
    }
    const value = array.tree_deserializeFromBytes(data, start, end);
    tree_setLength(value, length);
    return value;
  }

  function tree_getChunkCount(target) {
    return Math.ceil(
      (tree_getLength(target) * props.struct_getSerializedLength()) / 32
    );
  }

  function getChunkDepth() {
    return abstract.getChunkDepth() + 1;
  }

  function tree_setProperty(target, property, value) {
    const length = tree_getLength(target);
    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      tree_pushSingle(target, value);
      return true;
    } else {
      return props.tree_setValueAtIndex(target, property, value);
    }
  }

  function tree_deleteProperty(target, property) {
    const length = tree_getLength(target);
    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      tree_pop(target);
      return true;
    } else {
      return array.tree_deleteProperty(target, property);
    }
  }

  function tree_pushSingle(target, value) {
    const length = tree_getLength(target);
    const expand =
      props.getChunkIndex(length) != props.getChunkIndex(length + 1);
    props.tree_setValueAtIndex(target, length, value, expand);
    tree_setLength(target, length + 1);
    return length + 1;
  }

  function tree_push(target, ...values) {
    let newLength;
    for (const value of values) newLength = tree_pushSingle(target, value);
    return newLength;
  }

  function tree_pop(target) {
    const length = tree_getLength(target);
    const value = tree_getProperty(target, length - 1);
    array.tree_deleteProperty(target, length - 1);
    tree_setLength(target, length - 1);
    return value;
  }

  function hasVariableSerializedLength() {
    return true;
  }

  function getMaxChunkCount() {
    return Math.ceil((props.limit * props.size()) / 32);
  }
  function tree_getLeafGindices(target = none, root) {
    if (!target) {
      throw new Error("variable type requires tree argument to get leaves");
    }
    const gindices = array.tree_getLeafGindices(target, root);
    // include the length chunk
    gindices.push(concatGindices([root, LENGTH_GINDEX]));
    return gindices;
  }

  return (
    <BasicArrayType
      _chunkDepth={props._chunkDepth}
      _typeSymbols={_typeSymbols}
      // struct_convertToTree={props.struct_convertToTree}
      // tree_convertToStruct
      // tree_getSerializedLength={props.tree_getSerializedLength}
      // tree_serializeToBytes={props.tree_serializeToBytes}
      elementType={props.elementType}
      fromJson={props.fromJson}
      getChunkDepth={getChunkDepth}
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
      struct_defaultNode={struct_defaultNode}
      struct_defaultValue={struct_defaultValue}
      struct_deserializeFromBytes={struct_deserializeFromBytes}
      struct_equals={props.struct_equals}
      struct_getChunkCount={struct_getChunkCount}
      struct_getLength={struct_getLength}
      struct_getSerializedLength={props.struct_getSerializedLength}
      struct_hashTreeRoot={struct_hashTreeRoot}
      struct_serializeToBytes={props.struct_serializeToBytes}
      struct_yieldChunkRoots={props.struct_yieldChunkRoots}
      tree_defaultNode={tree_defaultNode}
      tree_defaultValue={tree_defaultValue}
      tree_getChunkCount={tree_getChunkCount}
      tree_getLeafGindices={tree_getLeafGindices}
      tree_getLength={tree_getLength}
      tree_getRootAtChunkIndex={props.tree_getRootAtChunkIndex}
      tree_getSubtreeAtChunkIndex={props.tree_getSubtreeAtChunkIndex}
      tree_setRootAtChunkIndex={props.tree_setRootAtChunkIndex}
    ></BasicArrayType>
  );
}

export function CompositeListType(props) {
  const _typeSymbols = props._typeSymbols.add(LIST_TYPE);

  function hasVariableSerializedLength() {
    return true;
  }

  function getMaxChunkCount() {
    return props.limit;
  }

  function struct_defaultValue() {
    return [];
  }

  function struct_getLength(value) {
    return value.length;
  }

  function getMaxLength() {
    return props.limit;
  }

  function getMinLength() {
    return 0;
  }

  function struct_deserializeFromBytes(data, start, end) {
    props.bytes_validate(data, start, end);
    const value = array.struct_deserializeFromBytes(data, start, end);
    if (value.length > props.limit) {
      throw new Error(
        `Deserialized list length greater than limit: ${value.length} ${props.limit}`
      );
    }
    return value;
  }

  function struct_getChunkCount(value) {
    return value.length;
  }

  function struct_hashTreeRoot(value) {
    return mixInLength(abstract.struct_hashTreeRoot(value), value.length);
  }

  function struct_convertFromJson(data, options) {
    if (!Array.isArray(data)) {
      throw new Error("Invalid JSON list: expected an Array");
    }
    const maxLength = props.limit;
    if (data.length > maxLength) {
      throw new Error(
        `Invalid JSON list: length ${data.length} greater than limit ${maxLength}`
      );
    }
    return array.struct_convertFromJson(data, options);
  }

  function tree_defaultNode() {
    let defaultNode = props._defaultNode;
    if (!props._defaultNode) {
      defaultNode = new BranchNode(
        zeroNode(abstract.getChunkDepth()),
        zeroNode(0)
      );
    }
    return _defaultNode;
  }

  function tree_defaultValue() {
    return new Tree(tree_defaultNode());
  }

  function struct_convertToTree(value) {
    if (isTreeBacked < T > value) return value.tree.clone();
    const tree = array.struct_convertToTree(value);
    tree_setLength(tree, value.length);
    return tree;
  }

  function tree_getLength(target) {
    return number32Type.struct_deserializeFromBytes(
      target.getRoot(LENGTH_GINDEX),
      0
    );
  }

  function tree_setLength(target, length) {
    const chunk = new Uint8Array(32);
    number32Type.struct_serializeToBytes(length, chunk, 0);
    target.setRoot(LENGTH_GINDEX, chunk);
  }

  function tree_deserializeFromBytes(data, start, end) {
    const target = tree_defaultValue();
    if (props.hasVariableSerializedLength()) {
      const offsets = props.bytes_getVariableOffsets(
        new Uint8Array(data.buffer, data.byteOffset + start, end - start)
      );
      if (offsets.length > props.limit) {
        throw new Error("Deserialized list length greater than limit");
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
      tree_setLength(target, offsets.length);
    } else {
      const elementSize = props.struct_getSerializedLength(null);
      const length = (end - start) / elementSize;
      if (!Number.isSafeInteger(length)) {
        throw new Error(
          "Deserialized list byte length must be divisible by element size"
        );
      }
      if (length > props.limit) {
        throw new Error("Deserialized list length greater than limit");
      }
      for (let i = 0; i < length; i++) {
        props.tree_setSubtreeAtChunkIndex(
          target,
          i,
          props.tree_deserializeFromBytes(
            data,
            start + i * elementSize,
            start + (i + 1) * elementSize
          ),
          true // expand tree as needed
        );
      }
      tree_setLength(target, length);
    }
    return target;
  }

  function tree_getChunkCount(target) {
    return tree_getLength(target);
  }

  function getChunkDepth() {
    return abstract.getChunkDepth() + 1;
  }

  function tree_setProperty(target, property, value) {
    const length = tree_getLength(target);
    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      tree_pushSingle(target, value);
    } else {
      props.tree_setSubtreeAtChunkIndex(target, property, value);
    }
    return true;
  }

  function tree_deleteProperty(target, property) {
    const length = tree_getLength(target);
    if (property > length) {
      throw new Error("Invalid length index");
    } else if (property == length) {
      tree_pop(target);
      return true;
    } else {
      return array.tree_deleteProperty(target, property);
    }
  }

  function tree_pushSingle(target, value) {
    const length = tree_getLength(target);
    props.tree_setSubtreeAtChunkIndex(target, length, value, true);
    tree_setLength(target, length + 1);
    return length + 1;
  }

  function tree_push(target, ...values) {
    let newLength;
    for (const value of values) newLength = tree_pushSingle(target, value);
    return newLength;
  }

  function tree_pop(target) {
    const length = tree_getLength(target);
    const value = props.tree_getProperty(target, length - 1);
    props.tree_setSubtreeAtChunkIndex(
      target,
      length - 1,
      new Tree(zeroNode(0))
    );
    tree_setLength(target, length - 1);
    return value;
  }
  function tree_getLeafGindices(target, root) {
    if (!target) {
      throw new Error("variable type requires tree argument to get leaves");
    }
    const gindices = array.tree_getLeafGindices(target, root);
    // include the length chunk
    gindices.push(concatGindices([root, LENGTH_GINDEX]));
    return gindices;
  }

  return (
    <CompositeArrayType
      _chunkDepth={props._chunkDepth}
      _typeSymbols={_typeSymbols}
      bytes_validate={props.bytes_validate}
      elementType={props.elementType}
      // fromJson={props.fromJson}
      getChunkDepth={getChunkDepth}
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
      struct_convertToTree={struct_convertToTree}
      struct_defaultNode={struct_defaultNode}
      struct_defaultValue={struct_defaultValue}
      struct_deserializeFromBytes={struct_deserializeFromBytes}
      struct_equals={props.struct_equals}
      struct_getChunkCount={struct_getChunkCount}
      struct_getLength={struct_getLength}
      struct_getSerializedLength={props.struct_getSerializedLength}
      struct_hashTreeRoot={struct_hashTreeRoot}
      struct_serializeToBytes={props.struct_serializeToBytes}
      // struct_yieldChunkRoots={props.struct_yieldChunkRoots}
      tree_convertToStruct
      tree_defaultNode={tree_defaultNode}
      tree_defaultValue={tree_defaultValue}
      tree_getChunkCount={tree_getChunkCount}
      tree_getLeafGindices={tree_getLeafGindices}
      tree_getLength={tree_getLength}
      tree_getRootAtChunkIndex={props.tree_getRootAtChunkIndex}
      tree_getSerializedLength={props.tree_getSerializedLength}
      tree_getSubtreeAtChunkIndex={props.tree_getSubtreeAtChunkIndex}
      tree_serializeToBytes={props.tree_serializeToBytes}
      tree_setSubtreeAtChunkIndex={props.tree_setSubtreeAtChunkIndex}
      tree_setProperty={tree_setProperty}
      tree_setRootAtChunkIndex={props.tree_setRootAtChunkIndex}
    ></CompositeArrayType>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isListType(type) {
  return isTypeOf(type, LIST_TYPE);
}

// Trick typescript into treating ListType as a constructor
export const ListType =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function ListType(options) {
    if (isBasicType(options.elementType)) {
      return new BasicListType(options);
    } else {
      return new CompositeListType(options);
    }
  };
