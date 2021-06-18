
import Type, {isTypeOf} from "../type";

export const BASIC_TYPE = Symbol.for("ssz/BasicType");

export function isBasicType(type) {
  return isTypeOf(type, BASIC_TYPE);
}

/**
 * A BasicType is a terminal type, which has no flexibility in its representation.
 *
 * It is serialized as, at maximum, 32 bytes and merkleized as, at maximum, a single chunk
 */
export default function BasicType(props) {


  let _typeSymbols = props._typeSymbols.add(BASIC_TYPE);
  

  function struct_clone(value) {
    return value;
  }

  function struct_equals(value1, value2) {
    props.assertValidValue(value1);
    props.assertValidValue(value2);
    return value1 === value2;
  }

  /**
   * Check if type has a variable number of elements (or subelements)
   *
   * For basic types, this is always false
   */
   function hasVariableSerializedLength() {
    return false;
  }

  function getMaxSerializedLength() {
    return props.struct_getSerializedLength();
  }

  function getMinSerializedLength() {
    return props.struct_getSerializedLength();
  }

  function bytes_validate(data, offset) {
    if (!data) {
      throw new Error("Data is null or undefined");
    }
    if (data.length === 0) {
      throw new Error("Data is empty");
    }
    const length = data.length - offset;
    if (length < props.struct_getSerializedLength()) {
      throw new Error(`Data length of ${length} is too small, expect ${props.struct_getSerializedLength()}`);
    }
    // accept data length > props.size()
  }

  // struct_deserializeFromBytes(data, offset);

  function struct_hashTreeRoot(value) {
    const output = new Uint8Array(32);
    props.struct_serializeToBytes(value, output, 0);
    return output;
  }

  return (
    <Type
    struct_assertValidValue={props.struct_assertValidValue}
    struct_defaultValue={props.struct_defaultValue}
    struct_clone={struct_clone}
    struct_equals={struct_equals}
    struct_getSerializedLength={props.struct_getSerializedLength}
    struct_deserializeFromBytes={props.struct_deserializeFromBytes}
    struct_serializeToBytes={props.struct_serializeToBytes}
    struct_hashTreeRoot={struct_hashTreeRoot}
    struct_convertFromJson={props.struct_convertFromJson}
    struct_convertToJson={props.struct_convertToJson}
    bytes_validate={bytes_validate}
    hasVariableSerializedLength={hasVariableSerializedLength}
    getMaxSerializedLength={getMaxSerializedLength}
    getMinSerializedLength={getMinSerializedLength}
    _typeSymbols={_typeSymbols}
    >
    </Type>
  )

}
