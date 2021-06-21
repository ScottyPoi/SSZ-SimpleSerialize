import BasicType from "../BasicType";
import { useState } from 'react'
export default function BooleanType({ ...props }) {

    const [output, setOutput] = useState(new Uint8Array(32))

  const value = props.value;
  const offset = props.offset;

  const getSerializedLength = () => {
    return 1;
  }

  const assertValidValue = (value) => {
    return (value === true) | false;
  }

  const serializeToBytes = (value, output, offset) => {
    let array = new Uint8Array();
    array = Uint8Array.from(output)
    array[offset] = value ? 1 : 0;
    return array;
  }

  const deserializeFromBytes = (bytes, offset) => {
      let data = new Uint8Array;
      data = Uint8Array.from(bytes);
    if (data[offset] === 1) {
      return true;
    } else if (data[offset] === 0) {
      return false;
    } else {
      throw new Error(`Invalid boolean value: ${typeof(data[offset])}`);
    }
  }

  const clone = () => {
    return (
        <BooleanType {...props} />
    );
  }

  return (

    <BasicType

      value={value}
      string={value ? "true" : "false"}
      serialized={output}
      type={"Boolean"}
      offset={offset}
      clone={clone}
      defaultValue={"false"}
      getSerializedLength={getSerializedLength}
      assertValidValue={assertValidValue}
      serializeToBytes={serializeToBytes}
      deserializeFromBytes={deserializeFromBytes}
      bytes={1}
    >
      {props.children}
    </BasicType>
  );
}
