import { useEffect, useState } from "react";
import DisplayVector from "../display/DisplayVector";
import * as NumberUintType from "../ssz/types/basic/NumberUintType";
import BuildHashTree from "../trees/BuildHashTree";

export const _valueSet = [];
for (let i = 0; i < 16 * 256; i++) {
  let val = Math.floor(Math.random() * 255);
  _valueSet.push(val);
}

export default function VectorControls(props) {
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
    <BuildHashTree NUMBER_OF_VALUES={1} />
  );

  useEffect(() => {
    setDemoTree(<BuildHashTree NUMBER_OF_VALUES={numChunks} />);
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
          <DisplayVector
            serialized={serialized}
            values={values}
            length={length}            size={size}
          >
            {props.children}
          </DisplayVector>
        </div>
        <div className="col">
          <div className="row justify-content-center ">
            <div className="col">
              <div className="card bg-dark">
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h4 className="card-title">
                    Vector[{elementType}, {length}]
                  </h4>
                  <h4 className="card-title">Type: {elementType}</h4>

                  <h4 className="card-title">Fixed Length: {length}</h4>

                  <p className="card-text">
                    <div className="container">
                      <div className="row justify-content-center text-break">
                        <h5>Bytes32 Chunks: {numChunks}</h5>
                      </div>
                      <div className="row justify-content-center text-break">
                        <h5>
                          MerkleTree - Depth{" "}
                          {length < 256
                            ? "1"
                            : length < 512
                            ? "2"
                            : length < 1024
                            ? "3"
                            : "4"}
                        </h5>
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#merkleTree"
                          aria-controls="merkleTree"
                        >
                          Show Merkle Tree Details
                        </button>

                        <div
                          className="offcanvas offcanvas-end" data-bs-backdrop="false"
                          tabIndex="-1"
                          id="merkleTree"
                          aria-labelledby="merkleTreeLabel"
                        >
                          <div className="offcanvas-header">
                            <h5 id="merkleTreeLabel">Merkle Tree Details</h5>
                            <button
                              type="button"
                              className="btn-close text-reset"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              onClick={() =>
                                setDemoTree(
                                  <BuildHashTree NUMBER_OF_VALUES={numChunks} />
                                )
                              }
                            ></button>
                          </div>
                          <div className="offcanvas-body">{demoTree}</div>
                        </div>
                      </div>
                      <div className="row justify-content-center text-break">
                        {valuesPerChunk} {elementType} Values pack into each 32
                        Byte Chunk
                      </div>
                      <div className="row justify-content-center text-break">
                        An addition "1" is added at the length index
                      </div>
                      <div className="row justify-content-center text-break">
                        Chunks that are not full are packed with zeros
                      </div>
                      <div className="row justify-content-center text-break">
                        If the total chunks is not a power of 2, <br />
                        The Merkle_Tree is filled in with zero-nodes
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row ">
            <div className="col">
              <ul className="nav nav-pills" id="typeTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    id="uint8-tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="true"
                    className="active btn btn-secondary"
                    data-bs-toggle="tab"
                    data-bs-target="#uint8"
                    onClick={() => handleChangeType("Uint8")}
                  >
                    Uint8
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    id="uint16-tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="true"
                    className="btn btn-primary"
                    data-bs-toggle="tab"
                    data-bs-target="#uint16"
                    onClick={() => handleChangeType("Uint16")}
                  >
                    Uint16
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    id="uint32-tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="true"
                    className="btn btn-success"
                    data-bs-toggle="tab"
                    data-bs-target="#uint32"
                    onClick={() => handleChangeType("Uint32")}
                  >
                    Uint32
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    id="uint64-tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="true"
                    className="btn btn-warning"
                    data-bs-toggle="tab"
                    data-bs-target="#uint64"
                    onClick={() => handleChangeType("Uint64")}
                  >
                    Uint64
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    id="uint128-tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="true"
                    className="btn btn-danger"
                    data-bs-toggle="tab"
                    data-bs-target="#uint128"
                    onClick={() => handleChangeType("Uint128")}
                  >
                    Uint128
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    id="uint8-tab"
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="true"
                    className="btn btn-info"
                    data-bs-toggle="tab"
                    data-bs-target="#uint256"
                    onClick={() => handleChangeType("Uint256")}
                  >
                    Uint256
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <label for="length" className="form-label">
            <h3 style={{color: 'black'}}>
              Type: {elementType} Length: {length}
            </h3>
          </label>
          <input
          style={{border: 'solid black', backgroundColor: 'darkgray'}}
            type="range"
            value={length}
            className="form-range"
            onChange={(e) => setLength(e.target.value)}
            min={1}
            max={8 * valuesPerChunk - 1}
            id="length"
          ></input>
          <br />
          <br />
        </div>
        <div className={`row row-cols-${numChunks} text-break`}>
          {numChunks < 5 ? (
            _values().map((valueChunk, idx) => {
              let red =
                idx + 1 == _values().length ? 0 : idx % 2 == 1 ? 256 : 0;
              let green = idx + 1 == _values().length ? 200 : 0;
              let blue =
                idx + 1 == _values().length ? 0 : idx % 2 == 0 ? 256 : 150;
              let color = `rgb(${red},${green},${blue})`;
              return (
                <div className={`col`} style={{ color: color }}>
                  {valueChunk.map((value) => {
                    return `${value}, `;
                  })}
                </div>
              );
            })
          ) : (
            <div>
              <div
                className="offcanvas offcanvas-bottom"
                data-bs-backdrop="false"

                tabindex="-1"
                id="offcanvasValues"
                aria-labelledby="offcanvasValuesLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasValuesLabel">
                    {elementType} Values
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body small">
                  <div className="container">
                    <div className={`row row-cols-${numChunks}`}>
                      {_values().map((valueChunk, idx) => {
                        let red =
                          idx + 1 == _values().length
                            ? 0
                            : idx % 2 == 1
                            ? 256
                            : 0;
                        let green = idx + 1 == _values().length ? 200 : 0;
                        let blue =
                          idx + 1 == _values().length
                            ? 0
                            : idx % 2 == 0
                            ? 256
                            : 150;
                        let color = `rgb(${red},${green},${blue})`;
                        return (
                          <div className="col" style={{ color: color }}>
                            {valueChunk.map((value) => {
                              return `${value}, `;
                            })}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
