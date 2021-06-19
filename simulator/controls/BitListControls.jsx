import { useEffect, useState } from "react";
import * as BooleanType from "../ssz/types/basic/Boolean";
import DisplayBitList from "../display/DisplayBitList";
import BuildHashTree from "../trees/BuildHashTree";

export const _valueSet = [];
for (let i = 0; i < 256 * 16; i++) {
  let val = Math.random();
  let bool = val > 0.5 ? false : true;
  _valueSet.push(bool);
}
export default function BitListControls(props) {
  const [length, setLength] = useState(0);
  const [limit, setLimit] = useState(256);
  const [values, setValues] = useState([]);
  const [numEmpty, setNumEmpty] = useState(0);
  const [serialized, setSerialized] = useState([]);
  const [numChunks, setNumChunks] = useState(1);
  const [valueSet, setValueSet] = useState(_valueSet);
  const [demoTree, setDemoTree] = useState(
    <BuildHashTree NUMBER_OF_VALUES={1} list={true} />
  );

  const valuesPerChunk = 256;
  const elementType = "Boolean";

  useEffect(() => {
    setNumChunks(Math.floor(limit / valuesPerChunk));
    let newValues = valueSet.slice(0, length);
    setValues(newValues);
  }, [length, limit]);

  useEffect(() => {
    setDemoTree(<BuildHashTree NUMBER_OF_VALUES={numChunks} list={true} />);
  }, [numChunks]);

  function handleChangeLength(length) {
    let vals = valueSet.slice(0, length);
    setLength(length);
    setValues(vals);
  }

  useEffect(() => {
    _serialize(values);
  }, [values]);

  function handleLimitIncrease() {
    let _limit = limit;
    let _length = length;
    _limit < 8 * valuesPerChunk
      ? (_limit += valuesPerChunk)
      : alert("Tree depth capped for demonstration purposes");
    setLimit(_limit);
    setLength(_length);
  }

  function handleLimitDecrease() {
    let _limit = limit;
    _limit > valuesPerChunk
      ? (_limit -= valuesPerChunk)
      : alert("Limit cannot be zero");
    setLimit(_limit);
  }

  function _values() {
    let valueChunks = [];
    for (let i = 0; i < numChunks; i++) {
      let startIdx = i * 256;
      let endIdx =
        startIdx + 256 - 1 > serialized.length
          ? startIdx + 256
          : serialized.length - 1;
      valueChunks.push(values.slice(startIdx, endIdx));
    }
    return valueChunks;
  }

  function _serialize(bitlist) {
    let _chunks = [];
    for (let i = 0; i < numChunks; i++) {
      let output = new Uint16Array(256);
      output.fill(0);
      for (let j = 0; j < 256; j++) {
        output = BooleanType.struct_serializeToBytes(
          bitlist[i * 256 + j],
          output,
          j
        );
      }
      if (i == Math.floor(length / 256)) {
        output = BooleanType.struct_serializeToBytes(
          true,
          output,
          length % 256
        );
      }

      _chunks.push(output);
    }
    setSerialized(_chunks);
  }

  // let empties = [];
  //     for (let i = length; i < limit; i++) {
  //       empties.push("empty");
  //     }

  function getEmpties() {
    if (numEmpty <= 0) {
      return [];
    } else {
      return new Array.from(numEmpty);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <DisplayBitList
            serialized={serialized}
            limit={limit}
            numEmpty={getEmpties()}
            values={values}
            length={length}
          >
            {props.children}
          </DisplayBitList>
        </div>
        <div className="col">
          <div className="row justify-content-center ">
            <div className="col">
              <div className="card bg-dark text-light">
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h4 className="card-title">BitList[{limit}]</h4>
                  <h4 className="card-title">Type: {elementType}</h4>

                  <h4 className="card-title">Max Length (Limit): {limit}</h4>
                  <h4 className="card-title">Variable Length: {length}</h4>

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
                                  <BuildHashTree
                                    NUMBER_OF_VALUES={numChunks}
                                    list={true}
                                  />
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center p-3">
            <div className="d-flex flex-col">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleLimitDecrease}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-double-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="d-flex flex-col p-3">
              <h3 style={{ color: "black" }}>Max Length (Limit): {limit}</h3>
            </div>
            <div className="d-flex flex-col">
              <button
                value={limit}
                className="btn btn-primary"
                type="submit"
                onClick={handleLimitIncrease}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-double-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center">
            <div className="d-flex flex-col">
              <h3 style={{ color: "black" }}>VARIABLE LENGTH: {length}</h3>
            </div>
          </div>
          <div className="row">
            <input
              type="range"
              value={length}
              className="form-range bg-secondary"
              onChange={(e) => handleChangeLength(e.target.value)}
              min={0}
              max={limit - 1}
              id="length"
            ></input>
          </div>

          <br />
          <br />
        </div>
      </div>

      <br />

      <div className={`row row-cols-${numChunks} text-break`}>
        {numChunks == 1 ? (
          _values().map((valueChunk, idx) => {
            let red = idx + 1 == _values().length ? 0 : idx % 2 == 1 ? 256 : 0;
            let green = idx + 1 == _values().length ? 200 : 0;
            let blue =
              idx + 1 == _values().length ? 0 : idx % 2 == 0 ? 256 : 150;
            let color = `rgb(${red},${green},${blue})`;
            return (
              <div key={idx} className={`col`} style={{ color: color }}>
                {valueChunk.map((value) => {
                  return `${value}, `;
                })}
              </div>
            );
          })
        ) : (
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
              tabindex="-1"
              id="offcanvasValues"
              aria-labelledby="offcanvasValuesLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasValuesLabel">
                  Boolean Values
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
                        <div key={idx} className="col" style={{ color: color }}>
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
    </>
  );
}
