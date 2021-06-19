import DisplayBasicType from '../../components/DisplayBasicType';
import { useState } from 'react';
export default function BasicType({ ...props }) {

    const value = props.value;
    const serialized = props.serialized;
    const type = props.type;
    const uintType = props.uintType;
    const offset = props.offset;
    const clone = props.clone;
    const defaultValue = props.defaultValue;
  const assertValidValue = props.assertValidValue;
  const getSerializedLength = props.getSerializedLength;
  const serializeToBytes = props.serializeToBytes;
  const deserializeFromBytes = props.deserializeFromBytes
  const bytes = props.bytes;

  function toHexString(byteArray) {
    return Array.prototype.map.call(byteArray, function(byte) {
      return ('0' + (byte & 0xFF).toString(16)).slice(-2);
    }).join('');
  }

  const typeValidate = () => {
    return (type === "Uint") | "Boolean";
  }

  const bytesValidate = (value, offset) => {
    if (!value) {
      throw new Error("Data is null or undefined");
    }
    if (value.length === 0) {
      throw new Error("Data is empty");
    }
    const length = value.length - offset;
    if (length < getSerializedLength) {
      throw new Error(
        `Data length of ${length} is too small, expect ${getSerializedLength}`
      );
    }
  }

  const hashTreeRoot = (value) => {
    let output = new Uint8Array(32);
    output = serializeToBytes(value, output, 0);
    return output
  }

  const equals = (value1, value2) => {
    return value1 === value2;
  }

  return (
    <DisplayBasicType
      value={value}
      serialized={serialized}
      offset={offset}
      type={type}
      uintType={uintType}
      bytes={bytes}
      defaultValue={defaultValue}
      equals={equals}
      serializeToBytes={serializeToBytes}
      deserializeFromBytes={deserializeFromBytes}
      typeValidate={typeValidate}
      bytesValidate={bytesValidate}
      hashTreeRoot={hashTreeRoot}
      toHexString={toHexString}
    >{props.children}</DisplayBasicType>
  );
}
