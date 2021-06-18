/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {BackedValue, createTreeBacked, isBackedValue, Path, TreeBacked} from "../../backings";
import {IJsonOptions, isTypeOf, Type} from "../type";
import {
  concatGindices,
  countToDepth,
  Gindex,
  Node,
  Proof,
  ProofType,
  toGindex,
  Tree,
} from "../../../../e-z-serialize/persistent";
import {merkleize} from "../../util/compat";
import {byteArrayEquals} from "../../util/byteArray";
import React from 'react';
export const COMPOSITE_TYPE = Symbol.for("ssz/CompositeType");

 export function isCompositeType(type){
  return isTypeOf(type, COMPOSITE_TYPE);
}

/**
 * A CompositeType is a type containing other types, and is flexible in its representation.
 *
 */
export default function CompositeType(props) {

  const _typeSymbols = props._typeSymbols.add(COMPOSITE_TYPE);

  function tree_equals(tree1, tree2) {
    return byteArrayEquals(tree1.root, tree2.root);
  }

  function bytes_equals(bytes1, bytes2) {
    return byteArrayEquals(bytes1, bytes2);
  }

  // struct_defaultValue();
  // tree_defaultNode();

  function tree_defaultValue() {
    return new Tree(props.tree_defaultNode());
  }

  // struct_clone(value);

  function tree_clone(value) {
    return value.clone();
  }

  function bytes_clone(value, start = 0, end = value.length) {
    const bytes = new Uint8Array(end - start);
    value.subarray(start, end).set(bytes);
    return bytes;
  }

  // struct_convertToJson(struct, options);
  // struct_convertFromJson(json, options);

  // struct_convertToTree(struct);
  // tree_convertToStruct(tree);

  // struct_serializeToBytes(struct, output, offset);
  // tree_serializeToBytes(tree, output, offset);


  function struct_serialize(struct, data) {
    const output = new Uint8Array(props.struct_getSerializedLength(struct));
    return props.struct_serializeToBytes(struct, output, 0);
  }

  function tree_serialize(tree, data) {
    const output = new Uint8Array(props.tree_getSerializedLength(tree));
    return props.tree_serializeToBytes(tree, output, 0);
  }

  function bytes_validate(data, start, end) {
    if (!data) {
      throw new Error("Data is null or undefined");
    }
    if (data.length === 0) {
      throw new Error("Data is empty");
    }
    if (start < 0) {
      throw new Error(`Start param is negative: ${start}`);
    }
    if (start > data.length) {
      throw new Error(`Start param: ${start} is greater than length: ${data.length}`);
    }
    if (end < 0) {
      throw new Error(`End param is negative: ${end}`);
    }
    if (end > data.length) {
      throw new Error(`End param: ${end} is greater than length: ${data.length}`);
    }
    const length = end - start;
    if (!props.hasVariableSerializedLength() && length !== props.struct_getSerializedLength(null)) {
      throw new Error(`Incorrect data length ${length}, expect ${props.struct_getSerializedLength(null)}`);
    }
    if (end - start < props.getMinSerializedLength()) {
      throw new Error(`Data length ${length} is too small, expect at least ${props.getMinSerializedLength()}`);
    }
  }

  // struct_deserializeFromBytes(data, start, end);
  // tree_deserializeFromBytes(data, start, end);
  function struct_deserialize(data) {
    return props.struct_deserializeFromBytes(data, 0, data.length);
  }

  function tree_deserialize(data) {
    return props.tree_deserializeFromBytes(data, 0, data.length);
  }

  // getMinSerializedLength();
  // getMaxSerializedLength();
  // struct_getSerializedLength(struct);
  // tree_getSerializedLength(tree);
  // hasVariableSerializedLength();
  // bytes_getVariableOffsets(target);

  // getMaxChunkCount();
  function struct_getChunkCount(struct) {
    return props.getMaxChunkCount();
  }

  function tree_getChunkCount(target) {
    return props.getMaxChunkCount();
  }

  // struct_getRootAtChunkIndex(struct, chunkIx);
  function *struct_yieldChunkRoots(struct) {
    const chunkCount = props.struct_getChunkCount(struct);
    for (let i = 0; i < chunkCount; i++) {
      yield props.struct_getRootAtChunkIndex(struct, i);
    }
  }

  function getChunkDepth() {
    if (!props._chunkDepth) {
      props._chunkDepth = countToDepth(BigInt(props.getMaxChunkCount()));
    }
    return props._chunkDepth;
  }
  function getGindexAtChunkIndex(index) {
    return toGindex(getChunkDepth(), BigInt(index));
  }

  function tree_getSubtreeAtChunkIndex(target, index) {
    return target.getSubtree(getGindexAtChunkIndex(index));
  }

  function tree_setSubtreeAtChunkIndex(target, index, value, expand = false) {
    target.setSubtree(getGindexAtChunkIndex(index), value, expand);
  }

  function tree_getRootAtChunkIndex(target, index) {
    return target.getRoot(getGindexAtChunkIndex(index));
  }

  function tree_setRootAtChunkIndex(target, index, value, expand = false) {
    target.setRoot(getGindexAtChunkIndex(index), value, expand);
  }

  // struct_getPropertyNames(struct);
  // tree_getPropertyNames(tree);

  // getPropertyGindex(property);
  // getPropertyType(property);
  // tree_getProperty(tree, property);
  // tree_setProperty(tree, property, value);
  // tree_deleteProperty(tree, property);
  // tree_iterateValues(tree);
  // tree_readonlyIterateValues(tree);
  /**
   * Navigate to a subtype & gindex using a path
   */
   function getPathInfo(path) {
    const gindices = [];
    let type = this;
    for (const prop of path) {
      if (!isCompositeType(type)) {
        throw new Error("Invalid path: cannot navigate beyond a basic type");
      }
      gindices.push(type.getPropertyGindex(prop));
      type = type.getPropertyType(prop);
    }
    return {
      type,
      gindex: concatGindices(gindices),
    };
  }
  function getPathGindex(path) {
    return getPathInfo(path).gindex;
  }
  /**
   * Get leaf gindices
   *
   * Note: This is a recursively called method.
   * Subtypes recursively call this method until basic types / leaf data is hit.
   *
   * @param target Used for variable-length types.
   * @param root Used to anchor the returned gindices to a non-root gindex.
   * This is used to augment leaf gindices in recursively-called subtypes relative to the type.
   * @returns The gindices corresponding to leaf data.
   */
  // tree_getLeafGindices(target, root);

  function tree_createProof(target, paths) {
    const gindices = paths
      .map((path) => {
        const {type, gindex} = getPathInfo(path);
        if (!isCompositeType(type)) {
          return gindex;
        } else {
          // if the path subtype is composite, include the gindices of all the leaves
          return type.tree_getLeafGindices(
            type.hasVariableSerializedLength() ? target.getSubtree(gindex) : undefined,
            gindex
          );
        }
      })
      .flat(1);
    return target.getProof({
      type: ProofType.treeOffset,
      gindices,
    });
  }

  function tree_createFromProof(root, proof) {
    const tree = Tree.createFromProof(proof);
    if (!byteArrayEquals(tree.root, root)) {
      throw new Error("Proof does not match trusted root");
    }
    return tree;
  }

  function tree_createFromProofUnsafe(proof) {
    return Tree.createFromProof(proof);
  }

  function struct_hashTreeRoot(struct) {
    return merkleize(struct_yieldChunkRoots(struct), props.getMaxChunkCount());
  }

  function tree_hashTreeRoot(tree) {
    return tree.root;
  }

  // convenience
  /**
   * Valid value assertion
   */
   function assertValidValue(value) {
    props.struct_assertValidValue(value);
  }

  /**
   * Equality
   */
   function equals(value1, value2) {
    if (isBackedValue(value1) && isBackedValue(value2)) {
      return value1.equals(value2);
    } else {
      return props.struct_equals(value1, value2);
    }
  }

  /**
   * Default constructor
   */
   function defaultValue() {
    return props.struct_defaultValue();
  }

  /**
   * Clone / copy
   */
   function clone(value) {
    if (isBackedValue(value)) {
      return (value.clone());
    } else {
      return props.struct_clone(value);
    }
  }

  // Serialization / Deserialization

  /**
   * Serialized byte length
   */
   function size(value) {
    if (isBackedValue(value)) {
      return value.size();
    } else {
      return props.struct_getSerializedLength(value);
    }
  }

  /**
   * Maximal serialized byte length
   */
   function maxSize() {
    return props.getMaxSerializedLength();
  }

  /**
   * Minimal serialized byte length
   */
   function minSize() {
    return props.getMinSerializedLength();
  }

  /**
   * Low-level deserialization
   */
   function fromBytes(data, start, end) {
    return props.struct_deserializeFromBytes(data, start, end);
  }

  /**
   * Deserialization
   */
   function deserialize(data) {
    return fromBytes(data, 0, data.length);
  }

  /**
   * Low-level serialization
   *
   * Serializes to a pre-allocated Uint8Array
   */
   function toBytes(value, output, offset) {
    if (isBackedValue(value)) {
      return value.toBytes(output, offset);
    } else {
      return props.struct_serializeToBytes(value, output, offset);
    }
  }
  /**
   * Serialization
   */
   function serialize(value) {
    if (isBackedValue(value)) {
      return value.serialize();
    } else {
      const output = new Uint8Array(size(value));
      toBytes(value, output, 0);
      return output;
    }
  }

  // Merkleization

  /**
   * Merkleization
   */
   function hashTreeRoot(value) {
    if (isBackedValue(value)) {
      return value.hashTreeRoot();
    } else {
      return props.struct_hashTreeRoot(value);
    }
  }

  /**
   * Convert from a JSON-serializable object
   */
   function fromJson(data, options) {
    return props.struct_convertFromJson(data, options);
  }

  /**
   * Convert to a JSON-serializable object
   */
   function toJson(value, options) {
    return props.struct_convertToJson(value, options);
  }

  function createTreeBacked(tree) {
    return props.createTreeBacked(tree);
  }

  function createTreeBackedFromStruct(value) {
    return createTreeBacked(props.struct_convertToTree(value));
  }

  function createTreeBackedFromBytes(data) {
    return createTreeBacked(tree_deserialize(data));
  }

  function createTreeBackedFromJson(data, options) {
    return createTreeBackedFromStruct(props.struct_convertFromJson(data, options));
  }

  function createTreeBackedFromProof(root, proof) {
    return createTreeBacked(tree_createFromProof(root, proof));
  }

  function createTreeBackedFromProofUnsafe(proof) {
    return createTreeBacked(tree_createFromProofUnsafe(proof));
  }

  function defaultTreeBacked() {
    return createTreeBacked(tree_defaultValue());
  }

    return (
      <Type
      struct_assertValidValue={assertValidValue}
      struct_defaultValue={defaultValue}
      struct_clone={clone}
      struct_equals={equals}
      struct_getSerializedLength={props.struct_getSerializedLength}
      struct_deserializeFromBytes={deserialize}
      struct_serializeToBytes={serialize}
      struct_hashTreeRoot={hashTreeRoot}
      struct_convertFromJson={fromJson}
      struct_convertToJson={toJson}
      bytes_valideate={bytes_validate}
      hasVariableSerializedLength={props.hasVariableSerializedLength}
      getMaxSerializedLength={maxSize}
      getMinSerializedLength={minSize}
      _typeSymbols={_typeSymbols}
      
      >

      </Type>
    )
  }


