/* eslint-disable @typescript-eslint/camelcase */
import {CompositeType, isCompositeType} from "./abstract";
import {IJsonOptions, isTypeOf, Type} from "../type";
import {
  concatGindices,
  Gindex,
  iterateAtDepth,
  LeafNode,
  Node,
  subtreeFillToContents,
  Tree,
  zeroNode,
} from "../../../../e-z-serialize/persistent";
import {SszErrorPath} from "../../util/errorPath";
import {toExpectedCase} from "../../util/json";
import {isTreeBacked} from "../../backings/tree/treeValue/treeValue";
import React from 'react';


export const CONTAINER_TYPE = Symbol.for("ssz/ContainerType");

export function isContainerType(type) {
  return isTypeOf(type, CONTAINER_TYPE);
}

export class ContainerType extends React.Component {
  // ES6 ensures key order is chronological
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fields;
  _typeSymbols;
  constructor(options) {
    super();
    this.fields = {...options.fields};
    this._typeSymbols.add(CONTAINER_TYPE);
  }

  struct_defaultValue() {
    const obj = {};
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      obj[fieldName] = fieldType.struct_defaultValue();
    }
    return obj;
  }

  struct_getSerializedLength(value) {
    let s = 0;
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      if (fieldType.hasVariableSerializedLength()) {
        s += fieldType.struct_getSerializedLength(value[fieldName]) + 4;
      } else {
        s += fieldType.struct_getSerializedLength(null);
      }
    }
    return s;
  }

  getMaxSerializedLength() {
    const fixedSize = Object.values(this.fields).reduce(
      (total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.getMaxSerializedLength()),
      0
    );
    const maxDynamicSize = Object.values(this.fields).reduce(
      (total, fieldType) => (total += fieldType.hasVariableSerializedLength() ? fieldType.getMaxSerializedLength() : 0),
      0
    );
    return fixedSize + maxDynamicSize;
  }

  getMinSerializedLength() {
    const fixedSize = Object.values(this.fields).reduce(
      (total, fieldType) => total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.getMinSerializedLength()),
      0
    );
    const minDynamicSize = Object.values(this.fields).reduce(
      (total, fieldType) => (total += fieldType.hasVariableSerializedLength() ? fieldType.getMinSerializedLength() : 0),
      0
    );
    return fixedSize + minDynamicSize;
  }

  struct_assertValidValue(value) {
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      try {
        // @ts-ignore
        fieldType.struct_assertValidValue((value)[fieldName]);
      } catch (e) {
        throw new Error(`Invalid field ${fieldName}: ${e.message}`);
      }
    }
  }

  struct_equals(value1, value2) {
    this.struct_assertValidValue(value1);
    this.struct_assertValidValue(value2);
    return Object.entries(this.fields).every(([fieldName, fieldType]) => {
      return fieldType.struct_equals(value1[fieldName], value2[fieldName]);
    });
  }

  struct_clone(value) {
    const newValue = {};
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      newValue[fieldName] = fieldType.struct_clone(value[fieldName]);
    }
    return newValue;
  }

  struct_deserializeFromBytes(data, start, end) {
    this.bytes_validate(data, start, end);
    let currentIndex = start;
    let nextIndex = currentIndex;
    const value = {};
    // Since variable-sized values can be interspersed with fixed-sized values, we precalculate
    // the offset indices so we can more easily deserialize the fields in once pass
    // first we get the fixed sizes
    const fixedSizes = Object.values(this.fields).map(
      (fieldType) => !fieldType.hasVariableSerializedLength() && fieldType.struct_getSerializedLength(null)
    );
    // with the fixed sizes, we can read the offsets, and store for our single pass
    const offsets = [];
    const fixedSection = new DataView(data.buffer, data.byteOffset);
    const fixedEnd = fixedSizes.reduce((index, size) => {
      if (size === false) {
        offsets.push(start + fixedSection.getUint32(index, true));
        return index + 4;
      } else {
        return index + size;
      }
    }, start);
    offsets.push(end);
    if (fixedEnd !== offsets[0]) {
      throw new Error("Not all variable bytes consumed");
    }

    let offsetIndex = 0;
    for (const [i, [fieldName, fieldType]] of Object.entries(this.fields).entries()) {
      try {
        const fieldSize = fixedSizes[i];
        if (fieldSize === false) {
          // variable-sized field
          if (offsets[offsetIndex] > end) {
            throw new Error("Offset out of bounds");
          }
          if (offsets[offsetIndex] > offsets[offsetIndex + 1]) {
            throw new Error("Offsets must be increasing");
          }
          value[fieldName] = (fieldType).struct_deserializeFromBytes(
            data,
            offsets[offsetIndex],
            offsets[offsetIndex + 1]
          );
          offsetIndex++;
          currentIndex += 4;
        } else {
          // fixed-sized field
          nextIndex = currentIndex + fieldSize;
          value[fieldName] = fieldType.struct_deserializeFromBytes(data, currentIndex, nextIndex);
          currentIndex = nextIndex;
        }
      } catch (e) {
        throw new SszErrorPath(e, fieldName);
      }
    }

    if (offsets.length > 1) {
      if (offsetIndex !== offsets.length - 1) {
        throw new Error("Not all variable bytes consumed");
      }
      if (currentIndex !== offsets[0]) {
        throw new Error("Not all fixed bytes consumed");
      }
    } else {
      if (currentIndex !== end) {
        throw new Error("Not all fixed bytes consumed");
      }
    }
    return value;
  }

  struct_serializeToBytes(value, output, offset) {
    let variableIndex =
      offset +
      Object.values(this.fields).reduce(
        (total, fieldType) =>
          total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.struct_getSerializedLength(null)),
        0
      );
    const fixedSection = new DataView(output.buffer, output.byteOffset + offset);
    let fixedIndex = offset;
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      if (fieldType.hasVariableSerializedLength()) {
        // write offset
        fixedSection.setUint32(fixedIndex - offset, variableIndex - offset, true);
        fixedIndex += 4;
        // write serialized element to variable section
        variableIndex = fieldType.toBytes(value[fieldName], output, variableIndex);
      } else {
        fixedIndex = fieldType.toBytes(value[fieldName], output, fixedIndex);
      }
    }
    return variableIndex;
  }

  struct_getRootAtChunkIndex(value, index) {
    const fieldName = Object.keys(this.fields)[index];
    const fieldType = this.fields[fieldName];
    return fieldType.struct_hashTreeRoot(value[fieldName]);
  }

  struct_convertFromJson(data, options) {
    if (typeof data !== "object") {
      throw new Error("Invalid JSON container: expected Object");
    }
    const value = {};
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      const expectedCase = options ? options.case : null;
      const expectedFieldName = toExpectedCase(fieldName, expectedCase);
      if ((data)[expectedFieldName] === undefined) {
        throw new Error(`Invalid JSON container field: expected field ${expectedFieldName} is undefined`);
      }
      value[fieldName] = fieldType.fromJson((data)[expectedFieldName], options);
    }
    return value;
  }

  struct_convertToJson(value, options) {
    const data = {};
    const expectedCase = options ? options.case : null;
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      data[toExpectedCase(fieldName, expectedCase)] = fieldType.toJson(value[fieldName], options);
    }
    return data;
  }

  struct_convertToTree(value) {
    if (isTreeBacked(value)) return value.tree.clone();
    return new Tree(
      subtreeFillToContents(
        Object.entries(this.fields).map(([fieldName, fieldType]) => {
          if (!isCompositeType(fieldType)) {
            const chunk = new Uint8Array(32);
            fieldType.toBytes(value[fieldName], chunk, 0);
            return new LeafNode(chunk);
          } else {
            return fieldType.struct_convertToTree(value[fieldName]).rootNode;
          }
        }),
        this.getChunkDepth()
      )
    );
  }

  struct_getPropertyNames() {
    return Object.keys(this.fields);
  }

  bytes_getVariableOffsets(target) {
    const types = Object.values(this.fields);
    const offsets = [];
    // variable-sized values can be interspersed with fixed-sized values
    // variable-sized value indices are serialized as offsets, indices deeper in the byte array
    let currentIndex = 0;
    let nextIndex = 0;
    const fixedSection = new DataView(target.buffer, target.byteOffset);
    const fixedOffsets = [];
    const variableOffsets = [];
    let variableIndex = 0;
    for (const [i, fieldType] of types.entries()) {
      if (fieldType.hasVariableSerializedLength()) {
        const offset = fixedSection.getUint32(currentIndex, true);
        if (offset > target.length) {
          throw new Error("Offset out of bounds");
        }
        variableOffsets.push(offset);
        currentIndex = nextIndex = currentIndex + 4;
        variableIndex++;
      } else {
        nextIndex = currentIndex + fieldType.struct_getSerializedLength(null);
        fixedOffsets[i] = [currentIndex, nextIndex];
        currentIndex = nextIndex;
      }
    }

    variableOffsets.push(target.length);
    variableIndex = 0;
    for (const [i, fieldType] of types.entries()) {
      if (fieldType.hasVariableSerializedLength()) {
        if (variableOffsets[variableIndex] > variableOffsets[variableIndex + 1]) {
          throw new Error("Offsets must be increasing");
        }
        offsets.push([variableOffsets[variableIndex], variableOffsets[variableIndex + 1]]);
        variableIndex++;
      } else {
        offsets.push(fixedOffsets[i]);
      }
    }
    return offsets;
  }

  tree_defaultNode() {
    if (!this._defaultNode) {
      this._defaultNode = subtreeFillToContents(
        Object.values(this.fields).map((fieldType) => {
          if (!isCompositeType(fieldType)) {
            return zeroNode(0);
          } else {
            return fieldType.tree_defaultNode();
          }
        }),
        this.getChunkDepth()
      );
    }
    return this._defaultNode;
  }

  tree_convertToStruct(target) {
    const value = {};
    for (const [i, [fieldName, fieldType]] of Object.entries(this.fields).entries()) {
      if (!isCompositeType(fieldType)) {
        const chunk = this.tree_getRootAtChunkIndex(target, i);
        value[fieldName] = fieldType.struct_deserializeFromBytes(chunk, 0);
      } else {
        const subtree = this.tree_getSubtreeAtChunkIndex(target, i);
        value[fieldName] = fieldType.tree_convertToStruct(subtree);
      }
    }
    return value;
  }

  tree_getSerializedLength(target) {
    let s = 0;
    for (const [i, fieldType] of Object.values(this.fields).entries()) {
      if (fieldType.hasVariableSerializedLength()) {
        s +=
          (fieldType).tree_getSerializedLength(
            this.tree_getSubtreeAtChunkIndex(target, i)
          ) + 4;
      } else {
        s += fieldType.struct_getSerializedLength(null);
      }
    }
    return s;
  }

  tree_deserializeFromBytes(data, start, end) {
    const target = this.tree_defaultValue();
    const offsets = this.bytes_getVariableOffsets(new Uint8Array(data.buffer, data.byteOffset + start, end - start));
    for (const [i, fieldType] of Object.values(this.fields).entries()) {
      const [currentOffset, nextOffset] = offsets[i];
      if (!isCompositeType(fieldType)) {
        // view of the chunk, shared buffer from `data`
        const dataChunk = new Uint8Array(
          data.buffer,
          data.byteOffset + start + currentOffset,
          nextOffset - currentOffset
        );
        const chunk = new Uint8Array(32);
        // copy chunk into new memory
        chunk.set(dataChunk);
        this.tree_setRootAtChunkIndex(target, i, chunk);
      } else {
        this.tree_setSubtreeAtChunkIndex(
          target,
          i,
          fieldType.tree_deserializeFromBytes(data, start + currentOffset, start + nextOffset)
        );
      }
    }
    return target;
  }

  tree_serializeToBytes(target, output, offset) {
    let variableIndex =
      offset +
      Object.values(this.fields).reduce(
        (total, fieldType) =>
          total + (fieldType.hasVariableSerializedLength() ? 4 : fieldType.struct_getSerializedLength(null)),
        0
      );
    const fixedSection = new DataView(output.buffer, output.byteOffset + offset);
    let fixedIndex = offset;
    let i = 0;
    const fieldTypes = Object.values(this.fields);
    for (const node of target.iterateNodesAtDepth(this.getChunkDepth(), i, fieldTypes.length)) {
      const fieldType = fieldTypes[i];
      if (!isCompositeType(fieldType)) {
        const s = fieldType.struct_getSerializedLength();
        output.set(node.root.slice(0, s), fixedIndex);
        fixedIndex += s;
      } else if (fieldType.hasVariableSerializedLength()) {
        // write offset
        fixedSection.setUint32(fixedIndex - offset, variableIndex - offset, true);
        fixedIndex += 4;
        // write serialized element to variable section
        variableIndex = fieldType.tree_serializeToBytes(new Tree(node), output, variableIndex);
      } else {
        fixedIndex = fieldType.tree_serializeToBytes(new Tree(node), output, fixedIndex);
      }
      i++;
    }
    return variableIndex;
  }

  getPropertyGindex(prop) {
    const chunkIndex = Object.keys(this.fields).findIndex((fieldName) => fieldName === prop);
    if (chunkIndex === -1) {
      throw new Error(`Invalid container field name: ${String(prop)}`);
    }
    return this.getGindexAtChunkIndex(chunkIndex);
  }

  getPropertyType(prop) {
    const type = this.fields[prop];
    if (!type) {
      throw new Error(`Invalid container field name: ${String(prop)}`);
    }
    return type;
  }

  tree_getPropertyNames() {
    return Object.keys(this.fields);
  }

  tree_getProperty(target, prop) {
    const chunkIndex = Object.keys(this.fields).findIndex((fieldName) => fieldName === prop);
    if (chunkIndex === -1) {
      return undefined;
    }
    const fieldType = this.fields[prop];
    if (!isCompositeType(fieldType)) {
      const chunk = this.tree_getRootAtChunkIndex(target, chunkIndex);
      return fieldType.struct_deserializeFromBytes(chunk, 0);
    } else {
      return this.tree_getSubtreeAtChunkIndex(target, chunkIndex);
    }
  }

  tree_setProperty(target, property, value) {
    const chunkIndex = Object.keys(this.fields).findIndex((fieldName) => fieldName === property);
    if (chunkIndex === -1) {
      throw new Error("Invalid container field name");
    }
    const chunkGindex = this.getGindexAtChunkIndex(chunkIndex);
    const fieldType = this.fields[property];
    if (!isCompositeType(fieldType)) {
      const chunk = new Uint8Array(32);
      fieldType.struct_serializeToBytes(value, chunk, 0);
      target.setRoot(chunkGindex, chunk);
      return true;
    } else {
      target.setSubtree(chunkGindex, value);
      return true;
    }
  }

  tree_deleteProperty(target, prop) {
    const chunkIndex = Object.keys(this.fields).findIndex((fieldName) => fieldName === prop);
    if (chunkIndex === -1) {
      throw new Error("Invalid container field name");
    }
    const fieldType = this.fields[prop];
    if (!isCompositeType(fieldType)) {
      return this.tree_setProperty(target, prop, fieldType.struct_defaultValue());
    } else {
      return this.tree_setProperty(target, prop, fieldType.tree_defaultValue());
    }
  }

  *tree_iterateValues(target) {
    const gindexIterator = iterateAtDepth(this.getChunkDepth(), BigInt(0), BigInt(this.getMaxChunkCount()))[
      Symbol.iterator
    ]();
    for (const propType of Object.values(this.fields)) {
      const {value, done} = gindexIterator.next();
      if (done) {
        return;
      } else {
        if (!isCompositeType(propType)) {
          yield propType.struct_deserializeFromBytes(value.root, 0);
        } else {
          yield target.getSubtree(value);
        }
      }
    }
  }

  *tree_readonlyIterateValues(target) {
    const chunkIterator = target.iterateNodesAtDepth(this.getChunkDepth(), 0, this.getMaxChunkCount());
    for (const propType of Object.values(this.fields)) {
      const {value, done} = chunkIterator.next();
      if (done) {
        return;
      } else {
        if (!isCompositeType(propType)) {
          yield propType.struct_deserializeFromBytes(value.root, 0);
        } else {
          yield new Tree(value);
        }
      }
    }
  }

  hasVariableSerializedLength() {
    return Object.values(this.fields).some((fieldType) => fieldType.hasVariableSerializedLength());
  }

  getMaxChunkCount() {
    return Object.keys(this.fields).length;
  }

  tree_getLeafGindices(target, root = BigInt(1)) {
    const gindices = [];
    for (const [fieldName, fieldType] of Object.entries(this.fields)) {
      const fieldGindex = this.getPropertyGindex(fieldName);
      const extendedFieldGindex = concatGindices([root, fieldGindex]);
      if (!isCompositeType(fieldType)) {
        gindices.push(extendedFieldGindex);
      } else {
        if (fieldType.hasVariableSerializedLength()) {
          if (!target) {
            throw new Error("variable type requires tree argument to get leaves");
          }
          gindices.push(...fieldType.tree_getLeafGindices(target.getSubtree(fieldGindex), extendedFieldGindex));
        } else {
          gindices.push(...fieldType.tree_getLeafGindices(undefined, extendedFieldGindex));
        }
      }
    }
    return gindices;
  }
}
