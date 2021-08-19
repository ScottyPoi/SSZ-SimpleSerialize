import { useEffect, useState } from "react";
import DemoDisplayVector from "../display/DemoDisplayVector";
import * as NumberUintType from "../ssz/types/basic/NumberUintType";
import BuildHashTree from "../trees/BuildHashTree";
import WalkDisplayVector from "../display/WalkDisplayVector";

export const _valueSet = [];
for (let i = 0; i < 16 * 256; i++) {
  let val = Math.floor(Math.random() * 255);
  _valueSet.push(val);
}

export default function WalkVectorControls(props) {
  const [elementType, setElementType] = useState("Uint8");
  const [length, setLength] = useState(1);
  const [values, setValues] = useState([0]);
  const [maxValue, setMaxValue] = useState(255);
  const [serialized, setSerialized] = useState([]);
  const [numChunks, setNumChunks] = useState(1);
  const [size, setSize] = useState(8);
  const [valuesPerChunk, setValuesPerChunk] = useState(32);
  const [serializer, setSerializer] = useState(NumberUintType);
  const [maxLength, setMaxLength] = useState(32 * 16 - 1);
  const [valueSet, setValueSet] = useState(_valueSet);
  const [demoTree, setDemoTree] = useState(
    <BuildHashTree
      object={`Vector[${elementType}, ${length}]`}
      NUMBER_OF_VALUES={1}
    />
  );

  useEffect(() => {
    setDemoTree(
      <BuildHashTree
        object={`Vector[${elementType}, ${length}]`}
        NUMBER_OF_VALUES={numChunks}
      />
    );
  }, [numChunks]);

  useEffect(() => {
    setNumChunks(Math.floor(length / valuesPerChunk + 1));
    setValues(valueSet.slice(0, length));
  }, [length, elementType]);

  useEffect(() => {
    _serialize(values);
  }, [values]);

  function _values() {
    let valueChunks = [];
    for (let i = 0; i < numChunks; i++) {
      let startIdx = (i * 256) / size;
      let endIdx =
        startIdx + 256 / size - 1 > serialized.length
          ? startIdx + 256 / size
          : serialized.length - 1;
      valueChunks.push(values.slice(startIdx, endIdx));
    }
    return valueChunks;
  }
  function handleChangeType(type) {
    let mv = 0;
    let sz = 0;
    let vpc = 0;

    if (type === "Uint8") {
      mv = 255;
      sz = 8;
      vpc = 32;
    } else if (type === "Uint16") {
      mv = 2 ** 16 - 1;
      sz = 16;
      vpc = 16;
    } else if (type === "Uint32") {
      mv = 2 ** 32 - 1;
      sz = 32;
      vpc = 8;
    } else if (type === "Uint64") {
      mv = 2 ** 64 - 1;
      sz = 64;
      vpc = 4;
    } else if (type === "Uint128") {
      mv = 2 ** 128 - 1;
      sz = 128;
      vpc = 2;
    } else if (type === "Uint256") {
      mv = 2 ** 256 - 1;
      sz = 256;
      vpc = 1;
    }
    let valueSet = [];
    for (let i = 0; i < 16 * vpc; i++) {
      let val = Math.floor(Math.random() * mv);
      valueSet.push(val);
    }
    setValueSet(valueSet);
    setMaxValue(mv);
    setSize(sz);
    setValuesPerChunk(vpc);
    setElementType(type);
    setLength(1);
    setMaxLength(vpc * 16 - 1);
  }

  function _serialize(vector) {
    let _chunks = [];
    let offset = size / 8 - 1;
    for (let c = 0; c < numChunks; c++) {
      let output = new Uint8Array(32);
      for (let i = 0; i < 32; i++) {
        output = NumberUintType.serialize(
          vector[c * valuesPerChunk + i],
          output,
          i * (size / 8),
          size
        );
      }
      if (c + 1 == numChunks) {
        output = NumberUintType.serialize(
          1,
          output,
          (vector.length * (size / 8) + offset) % (valuesPerChunk * (size / 8)),
          size
        );
      }

      _chunks.push(output);
    }

    setSerialized(_chunks);
  }

  return (
    <>

      <div className="row">
        <div className="col">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => handleChangeType(e.target.value)}
          >
            <option selected>{elementType}</option>
            <option value="Uint8">Uint8</option>
            <option value="Uint16">Uint16</option>
            <option value="Uint32">Uint32</option>
            <option value="Uint64">Uint64</option>
            <option value="Uint128">Uint128</option>
            <option value="Uint256">Uint256</option>
          </select>
          <h5 className="text-center">Type</h5>
          <br />
        </div>
        <div className="col">
          <input
            style={{ border: "solid black", backgroundColor: "darkgray" }}
            type="range"
            value={length}
            className="form-range"
            onChange={(e) => setLength(e.target.value)}
            min={1}
            max={8 * valuesPerChunk - 1}
            id="length"
          ></input>{" "}
          <br />
          <h5 className="text-center">
            Length <h6 className="text-center">{length}</h6>
          </h5>
        </div>
          <h5 className='text-center' style={{ color: "black" }}>
            {`Vector<${elementType}, ${length}>`}
          </h5>
      </div>
      <div className="row">
        <WalkDisplayVector
          serialized={serialized}
          values={values}
          length={length}
          size={size}
        >
          {props.children}
        </WalkDisplayVector>
      </div>
    </>
  );
}
