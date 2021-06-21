// import {Proof, Tree} from "../../../../../e-z-serialize/persistent"
// import {
//   isBasicType,
//   isCompositeType,
//   isContainerType,
//   isListType,
//   isVectorType,
// } from '../../../types/Type'
// import NumberUintType from '../../../types/basic/NumberUintType';
// import * as BOOLEAN_TYPE from '../../../types/basic/boolean'

// import * as BasicArrayType from '../../../types/composite/array';
// import * as BasicListType from '../../../types/composite/list';
// import * as CompositeArrayType from '../../../types/composite/array';
// import * as CompositeListType from '../../../types/composite/list';
// import * as CompositeType from '../../../types/composite/abstract'
// import * as ContainerType from '../../../types/composite/container';
import {byteArrayEquals} from "../../../util/byteArray";
import {isTree} from "../../../util/tree";
// import {Path} from "../../backedValue";




export function isTreeBacked(value) {
  return value && (value).type && (value).tree && isTree((value).tree);
}

/**
 * Return an ES6 Proxy-wrapped tree value (ergonomic getter/setter/iteration)
 */
export function createTreeBacked(type, tree) {
  const TreeValueClass = getTreeValueClass(type);
  return proxyWrapTreeValue(new TreeValueClass(type, tree));
}

export function getTreeValueClass(type) {
  if (isListType(type)) {
    if (isBasicType(type.elementType)) {
      return (BasicListTreeValue);
    } else {
      return (CompositeListTreeValue);
    }
  } else if (isVectorType(type)) {
    if (isBasicType(type.elementType)) {
      return (BasicArrayTreeValue);
    } else {
      return (CompositeArrayTreeValue);
    }
  } else if (isContainerType(type)) {
    return (ContainerTreeValue);
  }
}

/**
 * Wrap a TreeValue in a Proxy that adds ergonomic getter/setter
 */
export function proxyWrapTreeValue(value) {
  return (new Proxy(value, TreeProxyHandler));
}

/**
 * Proxy handler that adds ergonomic get/set and exposes TreeValue methods
 */
export const TreeProxyHandler = {
  get(target, property) {
    if (property in target) {
      return target[property];
    } else {
      return target.getProperty(property);
    }
  },

  set(target, property, value) {
    return target.setProperty(property, (value));
  },

  ownKeys(target) {
    return target.getPropertyNames();
  },

  getOwnPropertyDescriptor(target, property) {
    if (target.type.getPropertyType(property)) {
      return {
        configurable: true,
        enumerable: true,
        writable: true,
      };
    } else {
      return undefined;
    }
  },
};

/**
 * Convenience wrapper around a type and tree
 */
export default function TreeValue(props) {
  

  // function clone() {
  //   const TreeValueClass = Object.getPrototypeOf(this).constructor;
  //   return proxyWrapTreeValue(new TreeValueClass(props.type, props.tree.clone()));
  // }

  function valueOf() {
    return props.tree_convertToStruct(props.tree);
  }

  function equals(other) {
    if (isTreeBacked(other)) {
      return byteArrayEquals(hashTreeRoot(), other.hashTreeRoot());
    } else {
      return props.struct_equals(this, other);
    }
  }

  function size() {
    return props.tree_getSerializedLength(props.tree);
  }

  function toStruct() {
    return props.tree_convertToStruct(props.tree);
  }

  function toBytes(output, offset) {
    return props.tree_serializeToBytes(props.tree, output, offset);
  }

  function serialize() {
    const output = new Uint8Array(props.tree_getSerializedLength(props.tree));
    toBytes(output, 0);
    return output;
  }

  function hashTreeRoot() {
    return props.tree.root;
  }

  function createProof(paths) {
    return props.tree_createProof(props.tree, paths);
  }

  function getPropertyNames() {
    return props.tree_getPropertyNames(props.tree);
  }

  // function [Symbol.iterator]() {
  //   return props.values();
  // }

  // getProperty(property);
  // setProperty(property, value);
  // keys();
  // values();
  // entries();
  // readonlyValues();
  // readonlyEntries();

  return (
<div></div>


  )

}

