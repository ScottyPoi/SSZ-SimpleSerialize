import { useEffect, useState } from "react";
import DisplayContainer from "../display/DisplayContainer";
import BuildHashTree from "../trees/BuildHashTree";



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
  const [exampleIdx, setExampleIdx] = useState(0)
  const [example, setExample] = useState(Object.values(examples[0])[0]);
  const [length, setLength] = useState(5);
  const [demoTree, setDemoTree] = useState(<BuildHashTree NUMBER_OF_VALUES={5} />);
  const [leaves, setLeaves] = useState(8)

  useEffect(() => {
    setLength(Object.keys(example).length)
    setDemoTree(<BuildHashTree NUMBER_OF_VALUES={length} />)
    setLeaves(getNextPowerOfTwo(length))
  }, [example])

  function changeExample() {
    let newIdx = (exampleIdx + 1) % examples.length;
    setExampleIdx(newIdx);
    setExample(Object.values(examples[newIdx])[0])
  }

  return (
    <div className="row">
      <div className="col-6" style={{backgroundColor: 'lightgray', border: 'solid gray'}}>
        <div className='row'>
                  <DisplayContainer example={example} length={length} />
        </div>
      </div>
      <div className="col" style={{backgroundColor: 'gray', border: 'solid #e1ddfd'}}>
        <div className="row justify-content-center ">
          <div className="col">
            <div className="card bg-dark text-light">
              <div className="card-body" style={{ textAlign: "center" }}>
                <h4 className="card-title">Container</h4>
                <h4 className="card-title">
                  Example: {Object.keys(examples[exampleIdx])}
                </h4>
<button className='btn btn-secondary' onClick={() => changeExample()}>NEXT</button>
                <div className="card-text">
                  <div className="container">
                    <div className="row" style={{ border: "solid black", backgroundColor: 'lightgray', color: 'black' }}>
                      <div className="col text-start">
                        <span>
                          {`type ${Object.keys(examples[exampleIdx])} =`} <br />{`{ `}
                          {Object.values(examples[exampleIdx]).map((data) => {
                            return Object.entries(data).map((line) => {

                                    return (
                                    <div className='row'>
                                    {line[0]}: {Object.values(line[1])[0]}
                                    </div>
                                  )
                                })}
                            
                          )}

                          {`}`}
                        </span>
                      </div>
                      <div className="col">
                        <div className="row ">
                          <div className="col">
                            <div className="row text-start" style={{color: 'green'}}>
                              let x: {Object.keys(examples[exampleIdx])}  <br/>{` = {`}
                            </div>
                            {Object.values(examples[exampleIdx]).map((data) => {
                            return Object.entries(data).map((line, idx) => {
                                    let color = idx + 1 == Object.entries(data).length ? 'green' : idx % 2 == 0 ? "blue" : "magenta"
                                    return (
                                      <div className="row" style={{color: color}}>
                                      <div className="col text-start">{line[0]}:</div>
                                      <div className="col text-end text-break">{Object.values(line[1])[1]}</div>
                                    </div>
                                )}
                            
                          )})}
                            
                            
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-center text-break">
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
                                <BuildHashTree NUMBER_OF_VALUES={length} />
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



export const examples = [
  {
    BeaconBlockHeader: {
      slot: { type: "Uint64", value: "3" },
      proposerIndex: { type: "Uint64", value: "2" },
      parentRoot: {
        type: "Uint256",
        value:
          "0x41485c23d68c1f592677d77c034ad2256f88b1220af2e105fa966baeae9a87b9",
      },
      stateRoot: {
        type: "Uint256",
        value:
          "0xcbcd6d7f1f0bde6c8ad85efc3941ed5fc0f1663f1adf03209c07e471186adaf8",
      },
      bodyRoot: {
        type: "Uint256",
        value:
          "0xeaeb8b1728c07a9fb10ad2b61aa2ce8f1b4a17dfab81db49a9729ad1cdbbac40",
      },
    },
  },
  {
    Checkpoint: {
      epoch: {type: "Uint64", value: '3'},
root: {type: "Uint256", value: '0x49e21ba6fbe660d8aac793f1e168cdbf860a3b5b1791bdab188ba1c4b094b813'}

    }
  }
];