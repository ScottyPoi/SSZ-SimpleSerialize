import { useState, useEffect } from "react";
import * as NumberUintType from "../ssz/types/basic/NumberUintType";
import * as BigIntUintType from "../ssz/types/basic/BigIntUintType";
import UintNDisplay from "../display/DisplayUintN";
import Node from "../nodes/Node";

export function toHexString(byteArray) {
  return Array.prototype.map
    .call(byteArray, function (byte) {
      return ("0" + (byte & 0xff).toString(16)).slice(-2);
    })
    .join("");
}

export default function UintNControls(props) {
  const [uintSize, setUintSize] = useState(8);
  const [_value, setValue] = useState(0);
  const [_serialized, setSerialized] = useState(new Uint8Array(8));
  const [_asBytes32, setAsBytes32] = useState(new Uint8Array(32));

  function getvalue() {
    return _value;
  }

  function size_of() {
    return uintSize;
  }

  function serialize() {
    let value = getvalue();
    let output = new Uint8Array(32);
    let serial = new Uint16Array(32);
    let output2 = new Uint8Array(32);
    let serial2 = new Uint16Array(32);
    // output = Uint8Array.from(_serialized);
    let serialized =
      size_of() < 64
        ? NumberUintType.serialize(value, output, 0, size_of())
        : BigIntUintType.serialize(value, output2, 0, size_of());
    let bytes =
      size_of() < 64
        ? NumberUintType.serialize(value, serial, 32 - size_of() / 8, size_of())
        : BigIntUintType.serialize(
            value,
            serial2,
            32 - size_of() / 8,
            size_of()
          );
    setSerialized(serialized);
    setAsBytes32(bytes);
  }

  function setBytes(event) {
    setUintSize(event.target.value);
  }

  function sizeUp() {
    let size = uintSize;
    size < 256
      ? setUintSize(size * 2)
      : alert("256 bits is the maximum Uint size");
  }

  function sizeDown() {
    let size = uintSize;
    size > 8
      ? setUintSize(size / 2)
      : alert("8 bits is the smallest Uint Size");
  }

  useEffect(() => {
    randomValue(uintSize);
  }, [uintSize]);

  function randomValue(size) {
    let val =
      size < 64
        ? Math.floor(Math.random() * 2 ** size)
        : BigInt(Math.floor(Math.random() * 2 ** size));
    setValue(val);
  }

  function serialized() {
    return _serialized;
  }

  function bytes() {
    return _asBytes32;
  }

  useEffect(() => {
    serialize();
  }, [_value]);

  return (
    <div className="row">
      <div className="col " style={{border: 'solid black'}}>
        <UintNDisplay
          type={NumberUintType.NUMBER_UINT_TYPE}
          value={getvalue()}
          byteLength={uintSize}
          serialized={serialized()}
          asBytes32={bytes()}
        >
          {props.children}
        </UintNDisplay>
      </div>
      <div className="col">
        <div className="row justify-content-center ">
          <div className="col">
            <div className="card bg-dark">
              <div className="card-body" style={{ textAlign: "center", color: 'black' }}>
                <h4 className="card-title">Uint{size_of()}</h4>
                <h4 className="card-title">{size_of()} Bytes</h4>

                <div className="card-text">
                  <div className="container">
                    <div className="row justify-content-center text-break" >
                      <h5>
                        0x
                        {new Array(size_of() / 4).fill(0).map((o) => {
                          return `X`;
                        })}
                      </h5>
                      <h4><h5>let x: Uint{`${uintSize}`} ={`  `}</h5>
                        <span
                          style={{
                            border: "solid black 2px",
                            display: "inline-block",
                            backgroundColor: 'lightgreen',
                            display: 'inline-block',
                            color: 'black'
                          }}
                        >
                          0x
                          <span style={{ color: "green" }}>
                            {toHexString(serialized()).slice(0, uintSize / 4)}
                          </span>
                        </span>
                      </h4>
                    </div>

{uintSize == 256 ? (                    <div className="row justify-content-center text-break">
                      <h5>
                      This 256 Bit unsigned integer occupies the entire Bytes32 chunk
                      </h5>
                    </div>) : (                    <div className="row justify-content-center text-break">
                      <h5>
                        Unsigned integers occupying less than 32 Bytes are{" "}
                        <span style={{ color: "red" }}>padded with zeros</span>{" "}
                        to fill a Bytes32 chunk
                      </h5>
                    </div>)
}                    <div className="row justify-content-center text-break">
                      <h5>
                        The hash of the{" "}
                        <span
                          style={{
                            width: "auto",
                            display: "inline-block",
                            border: "solid green 1px",
                            backgroundColor: "lightgreen",
                            color: 'black'
                          }}
                        >
                          Bytes32 (Padded) Chunk
                        </span>
                        <br />
                        is the
                        <br />
                        <span
                          style={{
                            color: 'black',
                            width: "auto",
                            display: "inline-block",
                            border: "solid black 1px",
                            backgroundColor: "gold",
                          }}
                        >
                          hash_tree_root
                        </span>
                        <br />
                        of the simple object
                      </h5>
                    </div>

                    <div className="d-flex flex-row">
                      <div className="col-9 mx-2">
                        <h4>hash_tree_root:</h4>
                      </div>
                      <div className="col-3 mx-2">
                        <Node
                          chunkIdx={0}
                          numChunks={1}
                          level="root"
                          type="R"
                        />
                      </div>
                      <br></br>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <div className="col-9 mx-2">
                        <h4>Padded to Bytes32:</h4>
                      </div>
                      <div className="col-3 mx-2">
                        <Node
                          className=""
                          chunkIdx={0}
                          numChunks={1}
                          level="leaf"
                          type="32"
                        />
                      </div>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row"></div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-row">
                  <div className="col">
                    <div className="row">
                      <button className="btn" style={{boxShadow:"none"}} onClick={() => sizeUp()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="auto"
                          height="64"
                          fill="currentColor"
                          className="bi bi-chevron-up"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div  className="d-flex flex-row justify-content-center">
                      <div className="d-flex flex-col">
                        <h1 style={{color: 'black'}}>Uint[{uintSize}]</h1>
                      </div>
                    </div>
                    <div className="row">
                      <button className="btn" style={{boxShadow:"none",}} onClick={() => sizeDown()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="auto"
                          height="64"
                          fill="currentColor"
                          className="bi bi-chevron-down"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-center">
                  <div className="d-flex flex-col">
                    <button
                    style={{boxShadow:"none",}}
                      className="btn-success"
                      onClick={() => randomValue(size_of())}
                    >
                      <h5 style={{color: 'white'}}>Change Value</h5>
                    </button>
                  </div>
                </div>
                <br />
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <div className="flex-col p-2">
                    <h3 style={{color: 'black'}}>Value:</h3>
                  </div>
                  <div
                    style={{ border: "solid green 2px", }}
                    className="flex-col text-break "
                  >
                    <h3 style={{color: 'black'}}>{getvalue().toString()}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
