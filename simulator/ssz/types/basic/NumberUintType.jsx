import UintType from "./uint";
import { isTypeOf } from '../type';

export const NUMBER_UINT_TYPE = Symbol.for("ssz/NumberUintType");



export function isNumberUintType(type) {
  return isTypeOf(type, NUMBER_UINT_TYPE);
}

export function serialize(value, output, offset, byteLength){  
  
  let _output = new Uint8Array();
  _output = Uint8Array.from(output)
  if (byteLength > 6 && value === Infinity) {
    for (let i = offset; i < offset + byteLength; i++) {
      _output[i] = 0xff;
    }
  } else {
    let v = value;
    const MAX_BYTE = 0xff;
    for (let i = 0; i < byteLength; i++) {
      _output[offset + i] = v & MAX_BYTE;
      v = Math.floor(v / 256);
    }
  }
  return _output
}

export default function NumberUintType(props) {
  const _typeSymbols = props._typeSymbols.add(NUMBER_UINT_TYPE);

  function struct_assertValidValue(value) {
    if (
      value !== Infinity &&
      (!Number.isSafeInteger(value) ||
        value > BigInt(2) ** (BigInt(8) * BigInt(props.byteLength)))
    ) {
      throw new Error("Uint value is not a number");
    }
    if (value < 0) {
      throw new Error("Uint value must be gte 0");
    }
  }

  function struct_defaultValue() {
    return 0;
  }

  function struct_getMaxBigInt() {
    let _maxBigInt = props._maxBigInt;
    if (props._maxBigInt === undefined) {
      _maxBigInt = BigInt(2) ** BigInt(props.byteLength * 8) - BigInt(1);
    }
    return _maxBigInt;
  }

  function struct_serializeToBytes(value, output, offset) {
    return serialize(value, output, offset, props.byteLength)
  }

  function struct_deserializeFromBytes(data, offset) {
    props.bytes_validate(data, offset);
    let isInfinity = true;
    let output = 0;
    for (let i = 0; i < props.byteLength; i++) {
      output += data[offset + i] * 2 ** (8 * i);
      if (data[offset + i] !== 0xff) {
        isInfinity = false;
      }
    }
    if (props.byteLength > 6 && isInfinity) {
      return Infinity;
    }
    return Number(output);
  }

  function struct_convertFromJson(data) {
    let n;
    const bigN = BigInt(data);
    if (bigN === struct_getMaxBigInt()) {
      n = Infinity;
    } else if (bigN < Number.MAX_SAFE_INTEGER) {
      n = Number(bigN);
    } else {
      throw new Error("Uint value unsafe");
    }
    struct_assertValidValue(n);
    return n;
  }

  function struct_convertToJson(value) {
    if (props.byteLength > 4) {
      if (value === Infinity) {
        return struct_getMaxBigInt().toString();
      }
      return String(value);
    }
    return value;
  }

  return (
    <UintType
      _typeSymbols={_typeSymbols}
      byteLength={props.byteLength}
      struct_assertValidValue={struct_assertValidValue}
      struct_serializeToBytes={struct_serializeToBytes}
      struct_defaultValue={struct_defaultValue}
      struct_deserializeFromBytes={struct_deserializeFromBytes}
      struct_convertFromJson={struct_convertFromJson}
      struct_convertToJson={struct_convertToJson}
    ></UintType>
  );
}
