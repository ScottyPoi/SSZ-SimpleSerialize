/* eslint-disable @typescript-eslint/camelcase */
import {isTypeOf, Type} from "../type";
import {BasicType} from "./BasicType";

export const BOOLEAN_TYPE = Symbol.for("ssz/BooleanType");

export function isBooleanType(type) {
  return isTypeOf(type, BOOLEAN_TYPE);
}

export function serialize(value, output, offset) {
  let _output = new Uint8Array(32);
  _output = Uint8Array.from(output);
  _output[offset] = value ? 0x0001 : 0x0000;
  return _output.slice(0,32)
}

export function struct_serializeToBytes(value, output, offset) {
  let _output = new Array()
  _output = Array.from(output)
  _output[offset] = value ? 1 : 0;
  return _output;
}

export default function BooleanType(props) {
  
    const _typeSymbols = props._typeSymbols.add(BOOLEAN_TYPE);
  

  function struct_getSerializedLength() {
    return 1;
  }

  function struct_assertValidValue(value) {
    if (value !== true && value !== false) {
      throw new Error("Boolean value must be true or false");
    }
  }

  function struct_defaultValue() {
    return false;
  }

  function struct_serializeToBytes(value, output, offset) {
    output[offset] = value ? 1 : 0;
    return offset + 1;
  }

  function struct_deserializeFromBytes(data, offset) {
    props.bytes_validate(data, offset);
    if (data[offset] === 1) {
      return true;
    } else if (data[offset] === 0) {
      return false;
    } else {
      throw new Error("Invalid boolean value");
    }
  }

  function struct_convertFromJson(data) {
    struct_assertValidValue(data);
    return data;
  }

  function struct_convertToJson(value) {
    return value;
  }

return (
  <BasicType
  _typeSymbols={_typeSymbols}
  struct_assertValidValue={struct_assertValidValue}
  struct_getSerializedLength={struct_getSerializedLength}
  struct_serializeToBytes={struct_serializeToBytes}
  struct_defaultValue={struct_defaultValue}
  struct_deserializeFromBytes={struct_deserializeFromBytes}
  struct_convertFromJson={struct_convertFromJson}
  struct_convertToJson={struct_convertToJson}

  >

  </BasicType>
)


}
