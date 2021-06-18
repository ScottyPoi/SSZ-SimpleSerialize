import { useEffect, useState } from "react";
import * as NumberUintType from "../../ssz/src/types/basic/NumberUintType";
import DisplayList from "../display/DisplayList";
import BuildHashTree from "../graphics/trees/BuildHashTree";


export default function ListControls(props) {
  const [elementType, setElementType] = useState("Uint8");
  const [length, setLength] = useState(0);
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
  const [demoTree, setDemoTree] = useState(<BuildHashTree NUMBER_OF_VALUES={1} list={true} red={0} />)


  useEffect(() => {
    let nc = (Math.ceil(limit / valuesPerChunk));
    let newValues = valueSet.slice(0, length);
    setValues(newValues);
    let fullChunks = Math.floor((length + valuesPerChunk) / valuesPerChunk)
    setNumEmpty(nc - fullChunks);
    setNumChunks(nc);
  }, [length, limit]);

  useEffect(() => {
    let fullChunks = Math.floor((length + valuesPerChunk) / valuesPerChunk)
    setNumEmpty(numChunks - fullChunks)
    setDemoTree(<BuildHashTree NUMBER_OF_VALUES={numChunks} list={true} red={numEmpty}/>)
  }, [numChunks])

  useEffect(() => {
    if (limit < length) {
      setLength(limit - 1);
    }
    let nc = Math.ceil(limit / valuesPerChunk);
    let fullChunks = Math.floor((length + valuesPerChunk) / valuesPerChunk)
    setNumEmpty(numChunks - fullChunks)
    setNumChunks(nc);
  }, [limit]);

  function handleChangeLength(length) {
    setLength(length);
  }

  useEffect(() => {
    setNumChunks(Math.ceil(limit / valuesPerChunk));
    let fullChunks = Math.floor((length + valuesPerChunk) / valuesPerChunk)

    setNumEmpty(numChunks - fullChunks)
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
      return []
    } else {
      return new Array(numEmpty)
    }
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <DisplayList
            serialized={serialized}
            valuesPerChunk={valuesPerChunk}
            size={size}
            limit={limit}
            numEmpty={getEmpties()}
            values={values}
            length={length}
          >
            {props.children}
          </DisplayList>
        </div>
        
        
        <div className="col">
          <div className="row justify-content-center ">
            <div className="col">
              <div className="card">
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h4 className="card-title">
                    List[{elementType}, {limit}]
                  </h4>
                  <h4 className="card-title">Type: {elementType}</h4>

                  <h4 className="card-title">Max Length (Limit): {limit}</h4>
                  <h4 className="card-title">Variable Length: {length}</h4>

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
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#merkleTree" aria-controls="merkleTree">Show Merkle Tree Details</button>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="merkleTree" aria-labelledby="merkleTreeLabel">
  <div className="offcanvas-header">
    <h5 id="merkleTreeLabel">Merkle Tree Details</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setDemoTree(<BuildHashTree NUMBER_OF_VALUES={numChunks} list={true} red={numEmpty}/>)}></button>
  </div>
  <div className="offcanvas-body">
    {demoTree}
  </div>
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
          <div className="d-flex flex-row justify-content-center">
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
              <h3>Max Length (Limit): {limit}</h3>
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
              <h3>VARIABLE LENGTH: {length}</h3>
            </div>
          </div>
          <div className="row">
            <input
              type="range"
              value={length}
              className="form-range"
              onChange={(e) => setLength(e.target.value)}
              min={0}
              max={limit - 1}
              id="length"
            ></input>
          </div>

          <br />
          <br />
        </div>

        
        <div className={`row row-cols-${numChunks} text-break`}>
                {numChunks < 5 ? 
                _values().map((valueChunk, idx) => {
                  let red =
                    idx + 1 == _values().length ? 0 : idx % 2 == 1 ? 256 : 0;
                  let green = idx + 1 == _values().length ? 200 : 0;
                  let blue =
                    idx + 1 == _values().length ? 0 : idx % 2 == 0 ? 256 : 150;
                  let color = `rgb(${red},${green},${blue})`;
                  return (
                    <div key={`value${idx}`} className={`col`} style={{ color: color }}>
                      {valueChunk.map((value) => {
                        return `${value}, `;
                      })}
                    </div>
                  );
                }) : (
                  <div>
                    <div
                      className="offcanvas offcanvas-bottom"
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
                      idx + 1 == _values().length ? 0 : idx % 2 == 1 ? 256 : 0;
                    let green = idx + 1 == _values().length ? 200 : 0;
                    let blue =
                      idx + 1 == _values().length ? 0 : idx % 2 == 0 ? 256 : 150;
                    let color = `rgb(${red},${green},${blue})`;
                    return (
                      <div key={`valuechunk${idx}`} className='col' style={{ color: color }}>
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
