export const BIGINT_UINT_TYPE = Symbol.for("ssz/BigIntUintType");
const BIGINT_4_BYTES = BigInt(32);
export function isBigIntUintType(type) {
  return isTypeOf(type, BIGINT_UINT_TYPE);
}

export function serialize(value, output, offset, byteLength) {
  // Motivation
  // BigInt bit shifting and BigInt allocation is slower compared to number
  // For every 4 bytes, we extract value to groupedBytes
  // and do bit shifting on the number

  let _output = new Uint16Array(32);
  _output = Uint16Array.from(output);
  let v = BigInt(value);
  let groupedBytes = Number(BigInt.asUintN(32, v));
  for (let i = 0; i < byteLength; i++) {
    _output[offset + i] = Number(groupedBytes & 0xff);
    if ((i + 1) % 4 !== 0) {
      groupedBytes >>= 8;
    } else {
      v >>= BIGINT_4_BYTES;
      groupedBytes = Number(BigInt.asUintN(32, v));
    }
  }
  let _result = _output.slice(0, 32);
  

  return _result
}

export default function BigIntUintType(props) {
  props._typeSymbols.add(BIGINT_UINT_TYPE);

  function struct_assertValidValue(value) {
    if (typeof value !== "bigint") {
      throw new Error("Uint value is not a bigint");
    }
    if (value < 0) {
      throw new Error("Uint value must be gte 0");
    }
  }

  function struct_defaultValue() {
    return BigInt(0);
  }

  function struct_serializeToBytes(value, output, offset) {
    // Motivation
    // BigInt bit shifting and BigInt allocation is slower compared to number
    // For every 4 bytes, we extract value to groupedBytes
    // and do bit shifting on the number
    let v = value;
    let groupedBytes = Number(BigInt.asUintN(32, v));
    for (let i = 0; i < props.byteLength; i++) {
      output[offset + i] = Number(groupedBytes & 0xff);
      if ((i + 1) % 4 !== 0) {
        groupedBytes >>= 8;
      } else {
        v >>= BIGINT_4_BYTES;
        groupedBytes = Number(BigInt.asUintN(32, v));
      }
    }
    return offset + props.byteLength;
  }

  function struct_deserializeFromBytes(data, offset) {
    props.bytes_validate(data, offset);
    // Motivation:
    //   Creating BigInts and bitshifting is more expensive than
    // number bitshifting.
    // Implementation:
    //   Iterate throuth the bytearray, bitshifting the data into a 'groupOutput' number, byte by byte
    // After each 4 bytes, bitshift the groupOutput into the bigint output and clear the groupOutput out
    // After iterating through the bytearray,
    // There may be additional data in the groupOutput if the bytearray if the bytearray isn't divisible by 4
    let output = BigInt(0);
    let groupIndex = 0,
      groupOutput = 0;
    for (let i = 0; i < props.byteLength; i++) {
      groupOutput += data[offset + i] << (8 * (i % 4));
      if ((i + 1) % 4 === 0) {
        // Left shift returns a signed integer and the output may have become negative
        // In that case, the output needs to be converted to unsigned integer
        if (groupOutput < 0) {
          groupOutput >>>= 0;
        }
        // Optimization to set the output the first time, forgoing BigInt addition
        if (groupIndex === 0) {
          output = BigInt(groupOutput);
        } else {
          output += BigInt(groupOutput) << BigInt(32 * groupIndex);
        }
        groupIndex++;
        groupOutput = 0;
      }
    }
    // if props.byteLength isn't a multiple of 4, there will be additional data
    if (groupOutput) {
      output += BigInt(groupOutput >>> 0) << BigInt(32 * groupIndex);
    }
    return output;
  }

  function struct_convertFromJson(data) {
    const value = BigInt(data);
    props.assertValidValue(value);
    return value;
  }

  function struct_convertToJson(value) {
    if (props.byteLength > 4) {
      return value.toString();
    } else {
      return Number(value);
    }
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
