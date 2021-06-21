/* eslint-disable @typescript-eslint/camelcase */
import { isTypeOf, Type } from "../type";
import BasicType from "./BasicType";

export const UINT_TYPE = Symbol.for("ssz/UintType");

export function isUintType(type) {
  return isTypeOf(type, UINT_TYPE);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UintType(props) {
  const _typeSymbols = props._typeSymbols.add(UINT_TYPE);

  function struct_getSerializedLength() {
    return props.byteLength;
  }

  return (
    <BasicType
      _typeSymbols={_typeSymbols}
      struct_assertValidValue={props.struct_assertValidValue}
      struct_getSerializedLength={struct_getSerializedLength}
      struct_serializeToBytes={props.struct_serializeToBytes}
      struct_defaultValue={props.struct_defaultValue}
      struct_deserializeFromBytes={props.struct_deserializeFromBytes}
      struct_convertFromJson={props.struct_convertFromJson}
      struct_convertToJson={props.struct_convertToJson}
    >{props.children}</BasicType>
  );
}




