import { useEffect, useState } from "react";
import * as BooleanType from "../ssz/types/basic/Boolean";
import DisplayBoolean from "../display/DisplayBoolean";
import Node from "../nodes/Node";

export function toHexString(byteArray) {
  return Array.prototype.map
    .call(byteArray, function (byte) {
      return ("0" + (byte & 0xff).toString(16)).slice(-2);
    })
    .join("");
}
export default function BooleanControls(props) {
  const [value, setValue] = useState(false);
  const [serialized, setSerialized] = useState(new Uint8Array(1));
  const [bytes32, setBytes32] = useState(new Uint8Array(32));
  const [selected, setSelected] = useState(false)

  function _serialize() {
    let val = value;
    let output = new Uint8Array(1);
    let bytes = new Uint8Array(32);
    output = BooleanType.serialize(val, output, 0);
    bytes = BooleanType.serialize(val, bytes, 31);
    setSerialized(output);
    setBytes32(bytes);
  }

  useEffect(() => {
    _serialize();
  }, [value]);

  function toggleBool(bool) {
    setSelected(bool);
    setValue(bool)
  }

  return (
    <div className="row">
      <div className="col">
        <DisplayBoolean value={value} serialized={serialized} bytes32={bytes32}>
          {props.children}
        </DisplayBoolean>
      </div>
      <div className="col">
        <div className="row justify-content-center ">
          <div className="col">
            <div className="card">
              <div className="card-body" style={{ textAlign: "center" }}>
                <h5 className="card-title">Boolean Type</h5>
                <h5 className="card-title">1 BIT</h5>

                <p className="card-text">
                  <div className="container">
                    <div className="row text-break">
                      <h3>
                        <span
                          style={{
                            border: "solid black 2px",
                            display: "inline-block",
                            width: "auto",
                          }}
                        >
                          0x
                          <span style={{ color: "green" }}>
                            {bytes32.slice(30)}
                          </span>
                        </span>
                      </h3>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h3>Value: </h3>
                      </div>
                      <div className="col-3">
                        <button
                          type="button"
                          style={{border: `solid black ${selected ? `1px` : '3px'}`,boxShadow: 'none'}}
                          className="btn btn-secondary"
                          onClick={() => toggleBool(false)}
                          // onClick={() => setSelected(false)}
                        >
                          FALSE
                          <br />
                          0<br />
                          0x00
                          <br />
                        </button>
                      </div>
                      <div className="col-3">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => toggleBool(true)}
                          // onClick={() => setSelected(true)}

                          style={{border: `solid black ${selected ? `3px` : '1px'}`, boxShadow: 'none'}}

                        >
                          TRUE
                          <br />
                          1<br />
                          0x01
                          <br />{" "}
                        </button>
                      </div>
                    </div>
                    <div className="row"></div>
                  </div>

                  <br />
                  <h4>MerkleTree - Depth 1</h4>
                  <br />
                  <h5>The boolean is <span style={{color: 'red'}}>padded with zeros</span> to fill a Bytes32 chunk</h5>
                  <div className="row justify-content-center text-break">
                    <h5>
                      The hash of the
                      <br />
                      <span
                        style={{
                          width: "auto",
                          display: "inline-block",
                          border: "solid green 1px",
                          backgroundColor: "lightgreen",
                        }}
                      >
                        Bytes32 (Padded) Chunk
                      </span>
                      <br />
                      is the
                      <br />
                      <span
                        style={{
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
                      <Node chunkIdx={0} numChunks={1} level="root" type="R" />
                    </div>
                    <br></br>
                  </div>
                  <div className="d-flex flex-row">
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
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
