import { useEffect, useState } from "react";
import BuildHashTree from "../trees/BuildHashTree";
import * as BitVectorType from "../ssz/types/composite/bitVector";
import * as BooleanType from "../ssz/types/basic/Boolean";
import DisplayBitVector from "../display/DisplayBitVector";
import * as math from "../ssz/util/math";

export const _valueSet = [];
for (let i = 0; i < 256 * 16; i++) {
  let val = Math.random();
  let bool = val > 0.5 ? false : true;
  _valueSet.push(bool);
}

export default function BitVectorControls(props) {
  const [length, setLength] = useState("1");
  const [values, setValues] = useState([false]);
  const [serialized, setSerialized] = useState([]);
  const [numChunks, setNumChunks] = useState(1);
  const [demoTree, setDemoTree] = useState(
    <BuildHashTree NUMBER_OF_VALUES={1} />
  );
  const [valueSet, setValueSet] = useState(_valueSet);

  useEffect(() => {
    setDemoTree(<BuildHashTree NUMBER_OF_VALUES={numChunks} />);
  }, [numChunks]);

  function getLength() {
    return length;
  }

  function NUMBER_OF_VALUES() {
    return numChunks;
  }

  function _values() {
    let numChunks = serialized.length;
    let valueChunks = [];
    for (let i = 0; i < numChunks; i++) {
      let startIdx = i * 256;
      let endIdx =
        startIdx + 255 > serialized.length
          ? startIdx + 256
          : serialized.length - 1;
      valueChunks.push(values.slice(startIdx, endIdx));
    }
    return valueChunks;
  }

  function getNextPowerOfTwo(x) {
    if (x <= 1) {
      return 1;
    } else if (x == 2) {
      return 2;
    } else {
      return 2 * getNextPowerOfTwo(Math.floor((x + 1) / 2));
    }
  }

  useEffect(() => {
    _serialize(values);
  }, [length]);

  function handleChangeLength(length) {
    let nc = Math.floor((Number(length) + 255) / 256);
    let vals = valueSet.slice(0, length);
    setNumChunks(nc);
    setValues(vals);
    setLength(length);
  }

  function _serialize(bitvector) {
    let _chunks = [];
    for (let c = 0; c < numChunks; c++) {
      let output = new Array(256);
      output.fill(0);
      let len = bitvector.length;
      for (let i = 0; i < 256; i++) {
        output = BooleanType.struct_serializeToBytes(
          bitvector[c * 256 + i],
          output,
          i
        );
        if (c + 1 == numChunks) {
          output = BooleanType.struct_serializeToBytes(
            true,
            output,
            length % 256
          );
        }
      }
      _chunks.push(output);
    }

    setSerialized(_chunks);
  }
  function toHexString(byteArray) {
    return Array.prototype.map
      .call(byteArray, function (byte) {
        return ("0" + (byte & 0xff).toString(16)).slice(-2);
      })
      .join("");
  }

  // function serialize(values) {
  //   let vals = values;
  //   let output = new Uint8Array(32);
  //   output = Uint8Array.from(serialized);
  //   output = BitVector.serialize(vals, output);
  //   return output;
  // }

  function getLength() {
    return length;
  }

  function NUMBER_OF_VALUES() {
    return Math.floor(getLength() / 256 + 1);
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <DisplayBitVector
            serialized={serialized}
            values={values}
            length={length}
          >
            {props.children}
          </DisplayBitVector>
        </div>
        <div className="col">
          <div className="row justify-content-center ">
            <div className="col">
              <div className="card bg-dark text-light">
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h4 className="card-title">BitVector</h4>
                  <h4 className="card-title">Fixed Length: {length}</h4>

                  <div className="card-text">
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
                          className="offcanvas offcanvas-end"
                          data-bs-backdrop="false"
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
                        256 Boolean Values pack into each 32 Byte Chunk
                      </div>
                      <div className="row justify-content-center text-break">
                        An addition "1" bit is added at the length index
                      </div>
                      <div className="row justify-content-center text-break">
                        Chunks that are not full are packed with zeros
                      </div>
                      <div className="row justify-content-center text-break">
                        If the total chunks is not a power of 2, <br />
                        The Merkle_Tree is filled in with zero-nodes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="length" className="form-label">
                Length: {length}
              </label>
              <input
                style={{ border: "solid black" }}
                type="range"
                value={length}
                className="form-range bg-secondary"
                onChange={(e) => handleChangeLength(e.target.value)}
                min={1}
                max={2047}
                id="length"
              ></input>
            </div>
          </div>
          <div className={`row row-cols-${numChunks}`}>
            {numChunks < 5 && numChunks !== 1 ? (
              _values().map((valueChunk, idx) => {
                let red =
                  idx + 1 == _values().length ? 0 : idx % 2 == 1 ? 256 : 0;
                let green = idx + 1 == _values().length ? 200 : 0;
                let blue =
                  idx + 1 == _values().length ? 0 : idx % 2 == 0 ? 256 : 150;
                let color = `rgb(${red},${green},${blue})`;
                return (
                  <div key={idx} className="col" style={{ color: color }}>
                    {valueChunk.map((value) => {
                      return `${value}, `;
                    })}
                  </div>
                );
              })
            ) : numChunks !== 1 ? (
              <div>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasValues"
                  aria-controls="offcanvasValues"
                >
                  Show Values
                </button>

                <div
                  className="offcanvas offcanvas-bottom"
                  data-bs-backdrop="false"
                  tabIndex="-1"
                  id="offcanvasValues"
                  aria-labelledby="offcanvasValuesLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title"
                      id="offcanvasValuesLabel"
                      style={{ color: "black" }}
                    >
                      Boolean (Bit) Values
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
                            <div
                              key={idx}
                              className="col"
                              style={{ color: color }}
                            >
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
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="row">
          {numChunks == 1 ? (
            <>
              obj: BitVector[{length}] = [
              {_values().map((valueChunk, idx) => {
                let red =
                  idx + 1 == _values().length ? 0 : idx % 2 == 1 ? 256 : 0;
                let green = idx + 1 == _values().length ? 200 : 0;
                let blue =
                  idx + 1 == _values().length ? 0 : idx % 2 == 0 ? 256 : 150;
                let color = `rgb(${red},${green},${blue})`;
                return (
                  <div key={idx} className="col" style={{ color: color }}>
                    {valueChunk.map((value) => {
                      return `${value}, `;
                    })}
                  </div>
                );
              })}
              ]
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
