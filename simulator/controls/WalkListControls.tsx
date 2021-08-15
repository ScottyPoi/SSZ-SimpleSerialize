import { useEffect, useState } from "react";
import * as NumberUintType from "../ssz/types/basic/NumberUintType";
import DisplayListDemo from "../display/DisplayListDemo";
import BuildHashTree from "../trees/BuildHashTree";
import WalkDisplayList from "../display/WalkDisplayList";

export default function WalkListControls(props) {
  const [elementType, setElementType] = useState("Uint8");
  const [length, setLength] = useState(16);
  const [limit, setLimit] = useState(32);
  const [values, setValues] = useState([]);
  const [maxValue, setMaxValue] = useState(255);
  const [numEmpty, setNumEmpty] = useState(0);
  const [valuesPerChunk, setValuesPerChunk] = useState(32);
  const [numChunks, setNumChunks] = useState(1);
  const [fullChunks, setFullChunks] = useState(1);
  const [size, setSize] = useState(8);
  const [serialized, setSerialized] = useState([]);
  const [valueSet, setValueSet] = useState([]);


  useEffect(() => {
    handleChangeType(elementType);
    let newValues = valueSet.slice(0, length);
    setValues(newValues);
  }, []);

  useEffect(() => {
    let nc = Math.ceil(limit / valuesPerChunk);
    let newValues = valueSet.slice(0, length);
    setValues(newValues);
    let fullChunks = Math.floor((length + valuesPerChunk) / valuesPerChunk);
    setNumEmpty(nc - fullChunks);
    setNumChunks(nc);
  }, [length, limit]);

  useEffect(() => {
    let fullChunks = Math.floor((length + valuesPerChunk) / valuesPerChunk);
    setNumEmpty(numChunks - fullChunks);
  }, [numChunks]);

  useEffect(() => {
    if (limit < length) {
      setLength(limit - 1);
    }
    let nc = Math.ceil(limit / valuesPerChunk);
    let fullChunks = Math.floor((length + valuesPerChunk) / valuesPerChunk);
    setNumEmpty(numChunks - fullChunks);
    setNumChunks(nc);
  }, [limit]);

  function handleChangeLength(length) {
    setLength(length);
  }

  useEffect(() => {
    setNumChunks(Math.ceil(limit / valuesPerChunk));
    let fullChunks = Math.floor((length + valuesPerChunk) / valuesPerChunk);

    setNumEmpty(numChunks - fullChunks);
  }, [length, valuesPerChunk, limit]);

  useEffect(() => {
    _serialize(values);
  }, [values]);

  useEffect(() => {
    setNumChunks(Math.ceil(limit / valuesPerChunk));
  }, [length, limit]);

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

  function listLabel() {
    let e = elementType;
    let l = limit;
    return `List <elementType: ${e}, limit: ${l}>`;
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
    for (let i = 0; i < 16 * 32; i++) {
      let val = Math.floor(Math.random() * mv);
      valueSet.push(val);
    }
    setSize(sz);
    setMaxValue(mv);
    setValuesPerChunk(vpc);
    setValueSet(valueSet);
    setElementType(type);
    setLength(vpc - 1);
    setLimit(numChunks * vpc);
    setNumChunks(Math.ceil(limit / valuesPerChunk));
  }

  function handleLimitChange(limit) {
    if (limit < length) {
      setLength(limit - 1);
    }
    let nc = limit / valuesPerChunk;
    setNumChunks(nc);
    setLimit(limit);
  }

  function handleLimitIncrease() {
    let _limit = limit;
    _limit < 8 * valuesPerChunk
      ? (_limit += valuesPerChunk)
      : alert("Tree depth capped for demonstration purposes");
    setLimit(_limit);
  }

  function handleLimitDecrease() {
    let _limit = limit;
    _limit > valuesPerChunk
      ? (_limit -= valuesPerChunk)
      : alert("Limit cannot be zero");
    setLimit(_limit);
  }

  function getSize() {
    return size;
  }

  function _serialize(list) {
    let _chunks = [];
    let offset = size / 8 - 1;
    for (let c = 0; c < numChunks; c++) {
      let output = new Uint16Array(32);
      output.fill(0);
      for (let i = 0; i < valuesPerChunk; i++) {
        output = NumberUintType.serialize(
          list[c * valuesPerChunk + i],
          output,
          i * (size / 8),
          size
        );
      }
      if (c == Math.floor(length / valuesPerChunk)) {
        output = NumberUintType.serialize(
          1,
          output,
          ((length * size) / 8 + offset) % 32,
          size
        );
      }

      _chunks.push(output);
    }

    setSerialized(_chunks);
  }

  function getEmpties() {
    if (numEmpty <= 0) {
      return [];
    } else {
      return new Array(numEmpty);
    }
  }

  return (
    <>
      <div className="row">
        <WalkDisplayList
          serialized={serialized}
          values={values}
          length={limit}
          variable={length}
          size={size}
        >
          {props.children}
        </WalkDisplayList>
      </div>
      <div className="row justify-content-center">
        <div className="col-3 px-3">
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => handleChangeType(e.target.value)}
          >
            <option value="Uint8">Uint8</option>
            <option value="Uint16">Uint16</option>
            <option value="Uint32">Uint32</option>
            <option value="Uint32">Uint64</option>
            <option value="Uint32">Uint128</option>
            <option value="Uint32">Uint256</option>
          </select>
        </div>
        <div className="col-6">
          <input
            style={{ border: "solid black", backgroundColor: "darkgray" }}
            type="range"
            value={length}
            className="form-range"
            onChange={(e) => handleChangeLength(e.target.value)}
            min={0}
            max={limit - 1}
            id="length"
          ></input>
          <p className="text-center">Variable Length: {length}</p>
        </div>
        <div className="col-3 px-3">
          <div className="row">
            <button
              value={limit}
              className="btn btn-outline-primary"
              type="submit"
              onClick={handleLimitIncrease}
            >
              Limit Up
            </button>
          </div>
          <div className="row">
            <button
              className="btn btn-outline-primary"
              type="submit"
              onClick={handleLimitDecrease}
            >
              Limit Down
            </button>
          </div>
        </div>
      </div>
      <div className="row"></div>
      <div className="row justify-content-center">
        <h4 className="text-center">{listLabel()}</h4>
      </div>
    </>
  );
}
