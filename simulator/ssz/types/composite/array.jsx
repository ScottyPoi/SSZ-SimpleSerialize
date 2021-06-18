/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/camelcase */
import Type from "../type";
import BasicType from "../basic";
import CompositeType from "./abstract";
import {SszErrorPath} from "../../util/errorPath";
import {
  concatGindices,
  Gindex,
  iterateAtDepth,
  LeafNode,
  Node,
  subtreeFillToContents,
  toGindex,
  Tree,
} from "../../../../e-z-serialize/persistent";
import {createTreeBacked, isTreeBacked} from "../../backings/tree/treeValue/treeValue";
import React from 'react';

export function struct_serializeToBytes(value, output, offset) {
  const length = props.struct_getLength(value);
  let index = offset;
  for (let i = 0; i < length; i++) {
    index = props.struct_serializeToBytes(value[i], output, index);
  }
  return index;
}



export default function BasicArrayType(props) {


  function struct_getSerializedLength(value) {
    return props.struct_getSerializedLength() * props.struct_getLength(value);
  }

  function getMaxSerializedLength() {
    return props.getMaxLength() * props.getMaxSerializedLength();
  }

  function getMinSerializedLength() {
    return props.getMinLength() * props.getMinSerializedLength();
  }

  function struct_assertValidValue(value) {
    for (let i = 0; i < props.struct_getLength(value); i++) {
      try {
        props.struct_assertValidValue((value)[i]);
      } catch (e) {
        throw new Error(`Invalid element ${i}: ${e.message}`);
      }
    }
  }

  function struct_equals(value1, value2) {
    if (props.struct_getLength(value1) !== props.struct_getLength(value2)) {
      return false;
    }
    for (let i = 0; i < props.struct_getLength(value1); i++) {
      if (!props.struct_equals(value1[i], value2[i])) {
        return false;
      }
    }
    return true;
  }

  function struct_clone(value) {
    const newValue = props.struct_defaultValue();
    for (let i = 0; i < props.struct_getLength(value); i++) {
      newValue[i] = props.struct_clone(value[i]);
    }
    return newValue;
  }

  function struct_deserializeFromBytes(data, start, end) {
    props.bytes_validate(data, start, end);
    const elementSize = props.struct_getSerializedLength();
    return (Array.from({length: (end - start) / elementSize}, (_, i) =>
      props.struct_deserializeFromBytes(data, start + i * elementSize)
    ));
  }



  function struct_getRootAtChunkIndex(value, index) {
    const output = new Uint8Array(32);
    const itemSize = props.struct_getSerializedLength();
    const itemsInChunk = Math.floor(32 / itemSize);
    const firstIndex = index * itemsInChunk;
    // not inclusive
    const lastIndex = Math.min(props.struct_getLength(value), firstIndex + itemsInChunk);
    // i = array index, grows by 1
    // j = data offset, grows by itemSize
    for (let i = firstIndex, j = 0; i < lastIndex; i++, j += itemSize) {
      props.struct_serializeToBytes(value[i], output, j);
    }
    return output;
  }

  function struct_getPropertyNames(value) {
    const length = props.struct_getLength(value);
    return (Array.from({length}, (_, i) => i)).concat(["length"]);
  }

  function struct_convertFromJson(data) {
    return (Array.from({length: data.length}, (_, i) => props.struct_convertFromJson(data[i])));
  }

  function struct_convertToJson(value) {
    return Array.from({length: props.struct_getLength(value)}, (_, i) =>
      props.struct_convertToJson(value[i])
    );
  }

  function struct_convertToTree(value) {
    if (isTreeBacked<T>(value)) return value.tree.clone();
    const contents = [];
    for (const chunk of props.struct_yieldChunkRoots(value)) {
      contents.push(new LeafNode(chunk));
    }
    return new Tree(subtreeFillToContents(contents, props.getChunkDepth()));
  }

  function tree_convertToStruct(target) {
    const value = props.struct_defaultValue();
    const length = props.tree_getLength(target);
    for (let i = 0; i < length; i++) {
      value[i] = tree_getValueAtIndex(target, i);
    }
    return value;
  }

  // tree_getLength(target);
  function tree_getSerializedLength(target) {
    return props.struct_getSerializedLength() * props.tree_getLength(target);
  }

  function tree_deserializeFromBytes(data, start, end) {
    const target = props.tree_defaultValue();
    const byteLength = end - start;
    const chunkCount = Math.ceil(byteLength / 32);
    for (let i = 0; i < chunkCount; i++) {
      // view of the chunk, shared buffer from `data`
      const dataChunk = new Uint8Array(
        data.buffer,
        data.byteOffset + start + i * 32,
        Math.min(32, byteLength - i * 32)
      );
      // copy chunk into new memory
      const chunk = new Uint8Array(32);
      chunk.set(dataChunk);
      props.tree_setRootAtChunkIndex(
        target,
        i,
        chunk,
        true // expand tree as needed
      );
    }
    return target;
  }

  function tree_serializeToBytes(target, output, offset) {
    const size = props.tree_getSerializedLength(target);
    const fullChunkCount = Math.floor(size / 32);
    const remainder = size % 32;
    let i = 0;
    if (fullChunkCount > 0) {
      for (const node of target.iterateNodesAtDepth(props.getChunkDepth(), 0, fullChunkCount)) {
        output.set(node.root, offset + i * 32);
        i++;
      }
    }
    if (remainder) {
      output.set(props.tree_getRootAtChunkIndex(target, fullChunkCount).slice(0, remainder), offset + i * 32);
    }
    return offset + size;
  }

  function getPropertyGindex(prop) {
    return props.getGindexAtChunkIndex(getChunkIndex(prop));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getPropertyType(prop) {
    return props.elementType;
  }

  function *tree_iterateValues(target) {
    const length = props.tree_getLength(target);
    if (length === 0) {
      return;
    }
    const elementSize = props.struct_getSerializedLength();
    if (32 % elementSize !== 0) {
      throw new Error("cannot handle a non-chunk-alignable elementType");
    }
    let left = length;
    for (const node of target.iterateNodesAtDepth(props.getChunkDepth(), 0, props.tree_getChunkCount(target))) {
      const chunk = node.root;
      for (let offset = 0; offset < 32; offset += elementSize) {
        yield props.struct_deserializeFromBytes(chunk, offset);
        left--;
        if (left === 0) {
          return;
        }
      }
    }
  }

  function *tree_readonlyIterateValues(target) {
    yield *tree_iterateValues(target);
  }

  function getChunkOffset(index) {
    const elementSize = props.struct_getSerializedLength();
    return (index % Math.ceil(32 / elementSize)) * elementSize;
  }

  function getChunkIndex(index) {
    return Math.floor(index / Math.ceil(32 / props.struct_getSerializedLength()));
  }

  function tree_getValueAtIndex(target, index) {
    const chunk = props.tree_getRootAtChunkIndex(target, getChunkIndex(index));
    return props.struct_deserializeFromBytes(chunk, getChunkOffset(index));
  }

  function tree_setValueAtIndex(target, index, value, expand = false) {
    const chunkGindex = props.getGindexAtChunkIndex(getChunkIndex(index));
    // copy data from old chunk, use new memory to set a new chunk
    const chunk = new Uint8Array(32);
    chunk.set(target.getRoot(chunkGindex));
    props.struct_serializeToBytes(value, chunk, getChunkOffset(index));
    target.setRoot(chunkGindex, chunk, expand);
    return true;
  }

  function tree_getProperty(target, property) {
    const length = props.tree_getLength(target);
    if (property === "length") {
      return length;
    }
    const index = Number(property);
    if (Number.isNaN(index)) {
      return undefined;
    }
    if (index >= length) {
      return undefined;
    }
    return tree_getValueAtIndex(target, index);
  }

  function tree_setProperty(target, property, value, expand = false) {
    return tree_setValueAtIndex(target, property, value, expand);
  }

  function tree_deleteProperty(target, property) {
    return tree_setProperty(target, property, props.struct_defaultValue());
  }

  function tree_getPropertyNames(target) {
    return Array.from({length: props.tree_getLength(target)}, (_, i) => String(i)).concat("length");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function bytes_getVariableOffsets(target) {
    return [];
  }

  function tree_getLeafGindices(target, root = BigInt(1)) {
    const chunkCount = props.tree_getChunkCount(target);
    const startIndex = concatGindices([root, toGindex(props.getChunkDepth(), BigInt(0))]);
    const gindices = [];
    for (let i = 0, gindex = startIndex; i < chunkCount; i++, gindex++) {
      gindices.push(gindex);
    }
    return gindices;
  }

  return (
    <CompositeType
_chunkDepth={props._chunkDepth}
_typeSymbols={props._typeSymbols}
bytes_getVariableOffsets={bytes_getVariableOffsets}
createTreeBacked={createTreeBacked}
getMaxChunkCount={props.getMaxChunkCount}
getMaxSerializedLength={getMaxSerializedLength}
getMinSerializedLength={getMinSerializedLength}
getPropertyGindex={getPropertyGindex}
getPropertyType={getPropertyType}
hasVariableSerializedLength={props.hasVariableSerializedLength}
struct_assertValidValue={struct_assertValidValue}
struct_clone={struct_clone}
struct_convertFromJson={struct_convertFromJson}
struct_convertToJson={struct_convertToJson}
struct_convertToTree={struct_convertToTree}
struct_defaultNode={props.struct_defaultNode}
struct_defaultValue={props.struct_defaultValue}
struct_deserializeFromBytes={struct_deserializeFromBytes}
struct_equals={struct_equals}
struct_getChunkCount={props.struct_getChunkCount}
struct_getPropertyNames={struct_getPropertyNames}
struct_getRootAtChunkIndex={struct_getRootAtChunkIndex}
struct_getSerializedLength={struct_getSerializedLength}
struct_hashTreeRoot={props.struct_hashTreeRoot}
struct_serializeToBytes={struct_serializeToBytes}
tree_convertToStruct={tree_convertToStruct}
tree_defaultNode={props.tree_defaultNode}
tree_deleteProperty={tree_deleteProperty}
tree_deserializeFromBytes={tree_deserializeFromBytes}
tree_getLeafGindices={tree_getLeafGindices}
tree_getProperty={tree_getProperty}
tree_getPropertyNames={tree_getPropertyNames}
tree_getSerializedLength={tree_getSerializedLength}
tree_readonlyIterateValues={tree_readonlyIterateValues}
tree_serializeToBytes={tree_serializeToBytes}
tree_setProperty={tree_setProperty}



>
    </CompositeType>

  )

}

export function CompositeArrayType(props) {


  // struct_getLength(value);
  // getMaxLength();
  // getMinLength();

  function struct_getSerializedLength(value) {
    if (props.hasVariableSerializedLength()) {
      let s = 0;
      for (let i = 0; i < props.struct_getLength(value); i++) {
        s += props.struct_getSerializedLength(value[i]) + 4;
      }
      return s;
    } else {
      return props.struct_getSerializedLength(null) * props.struct_getLength(value);
    }
  }

  function getMaxSerializedLength() {
    if (props.hasVariableSerializedLength()) {
      return props.getMaxLength() * 4 + props.getMaxLength() * props.getMaxSerializedLength();
    } else {
      return props.getMaxLength() * props.getMaxSerializedLength();
    }
  }

  function getMinSerializedLength() {
    if (props.hasVariableSerializedLength()) {
      return props.getMinLength() * 4 + props.getMinLength() * props.getMinSerializedLength();
    } else {
      return props.getMinLength() * props.getMinSerializedLength();
    }
  }

  function struct_assertValidValue(value) {
    for (let i = 0; i < props.struct_getLength(value); i++) {
      try {
        props.struct_assertValidValue((value)[i]);
      } catch (e) {
        throw new Error(`Invalid element ${i}: ${e.message}`);
      }
    }
  }

  function struct_equals(value1, value2) {
    if (props.struct_getLength(value1) !== props.struct_getLength(value2)) {
      return false;
    }
    for (let i = 0; i < props.struct_getLength(value1); i++) {
      if (!props.struct_equals(value1[i], value2[i])) {
        return false;
      }
    }
    return true;
  }

  function struct_clone(value) {
    const newValue = props.struct_defaultValue();
    for (let i = 0; i < props.struct_getLength(value); i++) {
      newValue[i] = props.struct_clone(value[i]);
    }
    return newValue;
  }

  function struct_deserializeFromBytes(data, start, end) {
    props.bytes_validate(data, start, end);
    if (start === end) {
      return ([]);
    }
    if (props.hasVariableSerializedLength()) {
      const value = [];
      // all elements variable-sized
      // indices contain offsets
      let currentIndex = start;
      let nextIndex;
      // data exists between offsets
      const fixedSection = new DataView(data.buffer, data.byteOffset);
      const firstOffset = start + fixedSection.getUint32(start, true);
      let currentOffset = firstOffset;
      let nextOffset;
      while (currentIndex < firstOffset) {
        if (currentOffset > end) {
          throw new Error("Offset out of bounds");
        }
        nextIndex = currentIndex + 4;
        nextOffset = nextIndex === firstOffset ? end : start + fixedSection.getUint32(nextIndex, true);
        if (currentOffset > nextOffset) {
          throw new Error("Offsets must be increasing");
        }
        try {
          value.push(props.struct_deserializeFromBytes(data, currentOffset, nextOffset));
        } catch (e) {
          throw new SszErrorPath(e, value.length);
        }
        currentIndex = nextIndex;
        currentOffset = nextOffset;
      }
      if (firstOffset !== currentIndex) {
        throw new Error("First offset skips variable data");
      }
      return (value);
    } else {
      const elementSize = props.struct_getSerializedLength(null);
      return (Array.from({length: (end - start) / elementSize}, (_, i) =>
        props.struct_deserializeFromBytes(data, start + i * elementSize, start + (i + 1) * elementSize)
      ));
    }
  }

  function struct_serializeToBytes(value, output, offset) {
    const length = props.struct_getLength(value);
    if (props.hasVariableSerializedLength()) {
      let variableIndex = offset + length * 4;
      const fixedSection = new DataView(output.buffer, output.byteOffset + offset);
      for (let i = 0; i < length; i++) {
        // write offset
        fixedSection.setUint32(i * 4, variableIndex - offset, true);
        // write serialized element to variable section
        variableIndex = props.struct_serializeToBytes(value[i], output, variableIndex);
      }
      return variableIndex;
    } else {
      let index = offset;
      for (let i = 0; i < length; i++) {
        index = props.struct_serializeToBytes(value[i], output, index);
      }
      return index;
    }
  }

  function struct_getRootAtChunkIndex(value, index) {
    return props.hashTreeRoot(value[index]);
  }

  function struct_getPropertyNames(value) {
    const length = props.struct_getLength(value);
    return (Array.from({length}, (_, i) => i)).concat(["length"]);
  }

  function struct_convertFromJson(data, options) {
    return (Array.from({length: data.length}, (_, i) =>
      props.struct_convertFromJson(data[i], options)
    ));
  }

  function struct_convertToJson(value, options) {
    return Array.from({length: props.struct_getLength(value)}, (_, i) =>
      props.struct_convertToJson(value[i], options)
    );
  }

  function struct_convertToTree(value) {
    if (isTreeBacked<T>(value)) return value.tree.clone();
    const contents = [];
    for (const element of value) {
      contents.push(props.struct_convertToTree(element).rootNode);
    }
    return new Tree(subtreeFillToContents(contents, props.getChunkDepth()));
  }

  function tree_convertToStruct(target) {
    const value = props.struct_defaultValue();
    const length = props.tree_getLength(target);
    for (let i = 0; i < length; i++) {
      value[i] = props.tree_convertToStruct(props.tree_getSubtreeAtChunkIndex(target, i));
    }
    return value;
  }

  // tree_getLength(target);
  function tree_getSerializedLength(target) {
    if (props.hasVariableSerializedLength()) {
      let s = 0;
      for (let i = 0; i < props.tree_getLength(target); i++) {
        s += props.tree_getSerializedLength(props.tree_getSubtreeAtChunkIndex(target, i)) + 4;
      }
      return s;
    } else {
      return props.tree_getSerializedLength(null) * props.tree_getLength(target);
    }
  }

  function tree_serializeToBytes(target, output, offset) {
    const length = props.tree_getLength(target);
    if (props.hasVariableSerializedLength()) {
      let variableIndex = offset + length * 4;
      const fixedSection = new DataView(output.buffer, output.byteOffset + offset, length * 4);
      let i = 0;
      for (const node of target.iterateNodesAtDepth(props.getChunkDepth(), i, length)) {
        // write offset
        fixedSection.setUint32(i * 4, variableIndex - offset, true);
        // write serialized element to variable section
        variableIndex = props.tree_serializeToBytes(new Tree(node), output, variableIndex);
        i++;
      }
      return variableIndex;
    } else {
      let index = offset;
      let i = 0;
      for (const node of target.iterateNodesAtDepth(props.getChunkDepth(), i, length)) {
        index = props.tree_serializeToBytes(new Tree(node), output, index);
        i++;
      }
      return index;
    }
  }

  function getPropertyGindex(prop) {
    return props.getGindexAtChunkIndex(prop);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function getPropertyType(prop) {
    return props.elementType;
  }

  function tree_getProperty(target, property) {
    const length = props.tree_getLength(target);
    if (property === "length") {
      return length;
    }
    const index = Number(property);
    if (Number.isNaN(index)) {
      return undefined;
    }
    if (index >= length) {
      return undefined;
    }
    return props.tree_getSubtreeAtChunkIndex(target, index);
  }

  function tree_setProperty(target, property, value, expand = false) {
    props.tree_setSubtreeAtChunkIndex(target, property, value, expand);
    return true;
  }

  function tree_deleteProperty(target, property) {
    return props.tree_setProperty(target, property, props.tree_defaultValue());
  }

  function tree_getPropertyNames(target) {
    return (Array.from({length: props.tree_getLength(target)}, (_, i) => i)).concat(["length"]);
  }

  function *tree_iterateValues(target) {
    for (const gindex of iterateAtDepth(props.getChunkDepth(), BigInt(0), BigInt(props.tree_getLength(target)))) {
      yield target.getSubtree(gindex);
    }
  }

  function *tree_readonlyIterateValues(target) {
    for (const node of target.iterateNodesAtDepth(props.getChunkDepth(), 0, props.tree_getLength(target))) {
      yield new Tree(node);
    }
  }

  function bytes_getVariableOffsets(target) {
    if (props.hasVariableSerializedLength()) {
      if (target.length === 0) {
        return [];
      }
      const offsets = [];
      // all elements are variable-sized
      // indices contain offsets, which are indices deeper in the byte array
      const fixedSection = new DataView(target.buffer, target.byteOffset);
      const firstOffset = fixedSection.getUint32(0, true);
      let currentOffset = firstOffset;
      let nextOffset;
      let currentIndex = 0;
      let nextIndex = 0;
      while (currentIndex < firstOffset) {
        if (currentOffset > target.length) {
          throw new Error("Offset out of bounds");
        }
        nextIndex = currentIndex + 4;
        nextOffset = nextIndex === firstOffset ? target.length : fixedSection.getUint32(nextIndex, true);
        if (currentOffset > nextOffset) {
          throw new Error("Offsets must be increasing");
        }
        offsets.push([currentOffset, nextOffset]);
        currentIndex = nextIndex;
        currentOffset = nextOffset;
      }
      if (firstOffset !== currentIndex) {
        throw new Error("First offset skips variable data");
      }
      return offsets;
    } else {
      return [];
    }
  }

  function tree_getLeafGindices(target, root = BigInt(1)) {
    // Underlying elements exist one per chunk
    // Iterate through chunk gindices, recursively fetching leaf gindices from each chunk
    const chunkCount = props.tree_getChunkCount(target);
    const gindices = [];
    const startIndex = toGindex(props.getChunkDepth(), BigInt(0));
    const extendedStartIndex = concatGindices([root, startIndex]);
    if (props.hasVariableSerializedLength()) {
      if (!target) {
        throw new Error("variable type requires tree argument to get leaves");
      }
      // variable-length elements must pass the underlying subtrees to determine the length
      for (
        let i = 0, gindex = startIndex, extendedGindex = extendedStartIndex;
        i < chunkCount;
        i++, gindex++, extendedGindex++
      ) {
        gindices.push(...props.tree_getLeafGindices(target.getSubtree(gindex), extendedGindex));
      }
    } else {
      for (let i = 0, gindex = extendedStartIndex; i < chunkCount; i++, gindex++) {
        gindices.push(...props.tree_getLeafGindices(undefined, gindex));
      }
    }
    return gindices;
  }
return (
  <CompositeType
  _chunkDepth={props._chunkDepth}
  _typeSymbols={props._typeSymbols}
  bytes_getVariableOffsets={bytes_getVariableOffsets}
  createTreeBacked={createTreeBacked}
  getMaxChunkCount={props.getMaxChunkCount}
  getMaxSerializedLength={getMaxSerializedLength}
  getMinSerializedLength={getMinSerializedLength}
  getPropertyGindex={getPropertyGindex}
  getPropertyType={getPropertyType}
  hasVariableSerializedLength={props.hasVariableSerializedLength}
  struct_assertValidValue={struct_assertValidValue}
  struct_clone={struct_clone}
  struct_convertFromJson={struct_convertFromJson}
  struct_convertToJson={struct_convertToJson}
  struct_convertToTree={struct_convertToTree}
  struct_defaultNode={props.struct_defaultNode}
  struct_defaultValue={props.struct_defaultValue}
  struct_deserializeFromBytes={struct_deserializeFromBytes}
  struct_equals={struct_equals}
  struct_getChunkCount={props.struct_getChunkCount}
  struct_getPropertyNames={struct_getPropertyNames}
  struct_getRootAtChunkIndex={struct_getRootAtChunkIndex}
  struct_getSerializedLength={struct_getSerializedLength}
  struct_hashTreeRoot={props.struct_hashTreeRoot}
  struct_serializeToBytes={struct_serializeToBytes}
  tree_convertToStruct={tree_convertToStruct}
  tree_defaultNode={props.tree_defaultNode}
  tree_deleteProperty={tree_deleteProperty}
  tree_deserializeFromBytes={tree_deserializeFromBytes}
  tree_getLeafGindices={tree_getLeafGindices}
  tree_getProperty={tree_getProperty}
  tree_getPropertyNames={tree_getPropertyNames}
  tree_getSerializedLength={tree_getSerializedLength}
  tree_readonlyIterateValues={tree_readonlyIterateValues}
  tree_serializeToBytes={tree_serializeToBytes}
  tree_setProperty={tree_setProperty}
  
  
  
  >
      </CompositeType>
)

}
