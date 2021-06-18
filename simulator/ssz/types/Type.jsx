import React from 'react';
import TreeValue from '../backings/tree/treeValue/treeValue';

/**
 * Check if `type` is an instance of `typeSymbol` type
 *
 * Used by various isFooType functions
 */
export function isTypeOf(type, typeSymbol) {
  return type._typeSymbols.has(typeSymbol);
}

/**
 * A Type is either a BasicType of a CompositeType
 */
export default function Type(props) {
  /**
   * Symbols used to track the identity of a type
   *
   * Used by various isFooType functions
   */
  // _typeSymbols: Set<symbol>;
  let _typeSymbols = new Set();


  /**
   * Valid value assertion
   */
  function assertValidValue(value) {
    return props.struct_assertValidValue(value);
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
    return props.struct_clone(value);
  }
  /**
   * Equality
   */
   function equals(value1, value2) {
    return props.struct_equals(value1, value2);
  }
  // Serialization / Deserialization

  /**
   * Serialized byte length
   */
   function size(value) {
    return props.struct_getSerializedLength(value);
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
    return props.fromBytes(data, 0, data.length);
  }

  /**
   * Low-level serialization
   *
   * Serializes to a pre-allocated Uint8Array
   */
   function toBytes(value, output, offset) {
    return props.struct_serializeToBytes(value, output, offset);
  }

  /**
   * Serialization
   */
   function serialize(value) {
    const output = new Uint8Array(size(value));
    toBytes(value, output, 0);
    return output;
  }

  /**
   * Merkleization
   */
   function hashTreeRoot(value) {
    return props.struct_hashTreeRoot(value);
  }

  /**
   * Convert from JSON-serializable object
   */
   function fromJson(data, options) {
    return props.struct_convertFromJson(data, options);
  }

  /**
   * Convert to JSON-serializable object
   */
   function toJson(value, options) {
    return props.struct_convertToJson(value, options);
  }

  return (
    <TreeValue
    type={props.type}
    tree={props.tree}
    hashTreeRoot={hashTreeRoot}
    toBytes={toBytes}
    tree_convertToStruct={props.tree_convertToStruct}
    struct_equals={equals}
    tree_getSerializedLength={size}
    tree_serializeToBytes={serialize}
    root={hashTreeRoot}
    tree_createProof={props.tree_createProof}
    tree_getPropertyNames={props.tree_getPropertyNames}
    >
    {props.children}
    </TreeValue>
  )

}
