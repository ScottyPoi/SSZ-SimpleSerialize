import { useState } from "react";
import BasicType from "../BasicType";

export function serialize(value, output, offset, byteLength) {
  let array = new Uint8Array(32);
  array = Uint8Array.from(output);
  let val = value;
  const MAX_BYTE = 0xff;
  for (let i = 0; i < byteLength; i++) {
    array[offset + i] = val & MAX_BYTE;
    val = Math.floor(val / 256);
  }
  return array.slice(0, byteLength);
};


export default function UintNType({ ...props }) {
  const value = props.value;
  const offset = props.offset;
  const uintType = props.uintType;
  const byteLength =
    uintType === "Uint8"
      ? 1
      : uintType === "Uint16"
      ? 2
      : uintType === "Uint32"
      ? 4
      : uintType === "Uint64"
      ? 8
      : uintType === "Uint128"
      ? 16
      : uintType === "Uint256"
      ? 32
      : 0;

  const UintNumberTypes = [
    "Uint8",
    "Uint16",
    "Uint32",
    "Uint64",
    "Uint128",
    "Uint256",
  ];

  const assertValidType = () => {
    if (!UintNumberTypes.includes(uintType)) {
      throw new Error("Type is not a Uint Number Type");
    }
  };

  const assertValidValue = (value) => {
    if (value < 0) {
      throw new Error("Uint value must be gte 0");
    }
  };

  const serializeToBytes = (value, output, offset) => {
    
    return serialize(value, output, offset, byteLength);
  };

  const deserializeFromBytes = (data, offset) => {
    let isInfinity = true;
    let output = 0;
    for (let i = 0; i < byteLength; i++) {
      output += data[offset + i] * 2 ** (8 * i);
      if (data[offset + i] !== 0xff) {
        isInfinity = false;
      }
    }
    if (byteLength > 6 && isInfinity) {
      return Infinity;
    }
    return Number(output);
  };

  const clone = () => {
    return <UintNumberType {...props} />;
  };

  return (
      <BasicType
        value={value}
        type={"Uint"}
        uintType={uintType}
        offset={offset}
        clone={clone}
        defaultValue={0}
        bytes={byteLength}
        assertValidValue={assertValidValue}
        serializeToBytes={serializeToBytes}
        deserializeFromBytes={deserializeFromBytes}
      >
        {props.children}
      </BasicType>
  );
}
