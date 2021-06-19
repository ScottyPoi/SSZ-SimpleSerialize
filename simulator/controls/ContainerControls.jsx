import { useEffect, useState } from "react";
import DisplayContainer from "../display/DisplayContainer";
import BuildHashTree from "../trees/BuildHashTree";

const examples = [
  {
    BeaconBlockHeader: {
      slot: { type: "Uint64", value: "3" },
      proposerIndex: { type: "Uint64", value: "2" },
      parentRoot: {
        type: "Root",
        value:
          "0x41485c23d68c1f592677d77c034ad2256f88b1220af2e105fa966baeae9a87b9",
      },
      stateRoot: {
        type: "Root",
        value:
          "0xcbcd6d7f1f0bde6c8ad85efc3941ed5fc0f1663f1adf03209c07e471186adaf8",
      },
      bodyRoot: {
        type: "Root",
        value:
          "0xeaeb8b1728c07a9fb10ad2b61aa2ce8f1b4a17dfab81db49a9729ad1cdbbac40",
      },
    },
  },
];

export function getNextPowerOfTwo(number) {
  if (number <= 1) {
    return 1;
  } else {
    let i = 2;
    while (i < Infinity) {
      if (number <= i) {
        return i;
      } else {
        i *= 2;
      }
    }
  }
}

export default function ContainerControls(props) {
  const [example, setExample] = useState(examples[0].BeaconBlockHeader);
  const [length, setLength] = useState(5);
  const [demoTree, setDemoTree] = useState(<BuildHashTree NUMBER_OF_VALUES={5} />);
  const [leaves, setLeaves] = useState(8)

  useEffect(() => {
    setLength(Object.keys(example).length)
    setDemoTree(<BuildHashTree NUMBER_OF_VALUES={length} />)
    setLeaves(getNextPowerOfTwo(length))
  }, [example])

  return (
    <div className="row">
      <div className="col-6">
        <div className='row'>
                  <DisplayContainer example={example} length={length} />
        </div>
      </div>
      <div className="col">
        <div className="row justify-content-center ">
          <div className="col">
            <div className="card bg-dark">
              <div className="card-body" style={{ textAlign: "center" }}>
                <h4 className="card-title">Container</h4>
                <h4 className="card-title">
                  Example: {Object.keys(examples[0])}
                </h4>

                <div className="card-text">
                  <div className="container">
                    <div className="row" style={{ border: "solid black", backgroundColor: 'lightgray' }}>
                      <div className="col text-start">
                        <span>
                          {`type BeaconBlockHeader = {`} <br />
                          slot: Uint64; <br />
                          proposerIndex: Uint64; <br />
                          parentRoot: Root;
                          <br />
                          stateRoot: Root;
                          <br />
                          bodyRoot: Root;
                          <br />
                          {`}`}
                        </span>
                      </div>
                      <div className="col">
                        <div className="d-flex flex-row text-break text-start">
                          <div className="flex-col">
                            <div className="row">
                              let x: BeaconBlockHeader = {`{`}
                            </div>
                            <div className="row" style={{color: "blue"}}>
                              <div className="col">slot:</div>
                              <div className="col">3</div>
                            </div>
                            <div className="row" style={{color: "magenta"}}>
                              <div className="col">proposerIndex:</div>
                              <div className="col">2</div>
                            </div>
                            <div className="row" style={{color: "blue"}}>
                              <div className="col">parentRoot:</div>
                              <div className="col">
                                0x41485c23d68c1f592677d77c034ad2256f88b1220af2e105fa966baeae9a87b9;
                              </div>
                            </div>
                            <div className="row" style={{color: "magenta"}}>
                              <div className="col">stateRoot:</div>
                              <div className="col">
                                0xcbcd6d7f1f0bde6c8ad85efc3941ed5fc0f1663f1adf03209c07e471186adaf8;
                              </div>
                            </div>
                            <div className="row" style={{color: "green"}}>
                              <div className="col">bodyRoot:</div>
                              <div className="col">
                                0xeaeb8b1728c07a9fb10ad2b61aa2ce8f1b4a17dfab81db49a9729ad1cdbbac40;
                              </div>
                            </div>
                            <div className="row">
                              {`}`}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center text-break">
                      <h5>
                        MerkleTree - Depth 4
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
                                <BuildHashTree NUMBER_OF_VALUES={5} />
                              )
                            }
                          ></button>
                        </div>
                        <div className="offcanvas-body">{demoTree}</div>
                      </div>
                    </div>

                    <div className="row justify-content-center text-break">
                      Here the "leaves" of the Merkle tree each contain one serialized basic object <br/>
                      Or the Bytes32 {`<{Root}>`} of a composite object<br/>
                      
                      
                    </div>
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
