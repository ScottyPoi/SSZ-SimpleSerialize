import {
  getFixedSerializedLength,
  hasVariableSerializedLength,
  isBasicType,
  isBigIntUintType,
  isBitListType,
  isBitVectorType,
  isBooleanType,
  isByteVectorType,
  isCompositeType,
  isContainerType,
  isListType,
  isNumberUintType,
  isRootType,
  isUintType,
  isVectorType,
  Type,
} from "@chainsafe/ssz";

import { subTreeRows } from "./Tables";

export function isBasic(type) {
  return isBasicType(type)
    ? "Basic"
    : isCompositeType(type)
    ? "Composite"
    : "Other";
}

export function variableLength(type) {
  return type.hasVariableSerializedLength()
    ? `${type.getMinSerializedLength()} - ${type.getMaxSerializedLength()}`
    : `${type.getMaxSerializedLength()}`;
}

export function fixedOrVariable(type) {
  return type.hasVariableSerializedLength() ? "Variable" : "Fixed";
}

export function typeClass(type) {
  return isUintType(type)
    ? `Uint[${type.getMaxSerializedLength() * 8}]`
    : isVectorType(type)
    ? `Vector`
    : isListType(type)
    ? "List"
    : isRootType(type)
    ? "Root"
    : isContainerType(type)
    ? "Container"
    : isBooleanType(type)
    ? "Boolean"
    : null;
}

export function checkFamily(field, t) {
  if (!isUintType(field) && typeFamily(field)) {
    return <td>{typeFamily(field, field[t])}</td>;
  } else if (isContainerType(field)) {
      return <td>{subTreeRows(field)}jpjp</td>
  }
}

export function typeFamily(type, limit = null) {
  return isBitListType(type)
    ? `BitList[${limit}]`
    : isBitVectorType(type)
    ? `BitVector[${type.getMaxSerializedLength() * 8}]`
    : isByteVectorType(type)
    ? `ByteVector[${type.getMaxSerializedLength()}]`
    : null;
}

const ssztesters = [typeFamily, typeClass, isBasic, typeCheck, isType];

export function typeCheck(type) {
  return sszTypes.map((x) => {
    return x(type) ? x.name : null;
  });
}

export function isType(list, type) {
  return list.includes(type) ? true : false;
}

export default ssztesters;
