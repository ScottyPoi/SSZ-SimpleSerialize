import BuildTree from "../graphics/trees/BuildTree";
import VectorText from "../graphics/text/VectorText";
import * as NumberUintType from "../../ssz/src/types/basic/NumberUintType";
import HashRootText from "../graphics/text/HashRootText";
import { merkleize } from "../../ssz/src/util/merkleize";
import { createHash } from "crypto";
import BuildVectorTree from "../graphics/trees/BuildVectorTree";

export function DisplayVector(props) {
  let serialized = props.serialized;
  let values = props.values;
  let length = props.length;
  let size = props.size;

  let numberOfChunks = Math.floor(length / (256 / size)) + 1;

  let NUMBER_OF_VALUES = numberOfChunks;

  let numberOfLeaves = getNextPowerOfTwo(NUMBER_OF_VALUES);

  let emptyLeaves = numberOfLeaves - NUMBER_OF_VALUES;

  function toHexString(byteArray) {
    return Array.prototype.map
      .call(byteArray, function (byte) {
        return ("0" + (byte & 0xff).toString(16)).slice(-2);
      })
      .join("");
  }

  function getNextPowerOfTwo(number) {
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

  function chunks() {
    let chunks = serialized.map((chunk, idx) => {
      let _output = toHexString(chunk);

      return (
        <VectorText
          numberOfLeaves={numberOfLeaves}
          emptyLeaves={emptyLeaves}
          key={idx}
          id={`chunk${idx}`}
          chunk={_output}
          length={length}
          size={size}
          idx={idx}
          numberOfChunks={numberOfChunks}
        />
      );
    });

    for (let i = 0; i < emptyLeaves; i++) {
      chunks.push(
        <div className="col" style={{ border: "solid gray" }}>
          EMPTY
        </div>
      );
    }

    return chunks;
  }

  function _values() {
    let numChunks = numberOfChunks;
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

  let leaves = serialized.map((chunk) => {
    let hash = createHash("sha256");
    hash.update(chunk);
    return hash.digest();
  });

  let hashRoot = merkleize(leaves);

  const displaySize = numberOfLeaves == 1 ? "x-large" : "large";
  const width = numberOfLeaves == 1 ? "50%" : "100%";

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <div className="row justify-content-center">
              <HashRootText
                hash={hashRoot}
                displaySize={displaySize}
                width={width}
              />
            </div>
            <div className="row">
              <BuildVectorTree NUMBER_OF_VALUES={NUMBER_OF_VALUES} />
            </div>
            <div className="row">
              Click on a Leaf to see its Merkle Proof
            </div>
            <div className={`row row-cols-${numberOfLeaves} text-break`}>
              {numberOfLeaves < 5 ? (
                chunks()
              ) : (
                <div className="col">
                  <div className="row">
                    <br />
                    <div className="col">
                      <div className='row p-2'>   <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasBottom"
                        aria-controls="offcanvasBottom"
                      >
                        Show Chunks
                      </button></div>
                      <div className='row p-2'>
                      <button
                        className="btn btn-primary "
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasMerkle"
                        aria-controls="offcanvasMerkle"
                      >
                        Show Merkle Tree
                      </button></div>
                    </div>
                    <div className="col">
                    <div className='row p-2'> <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasValues"
                        aria-controls="offcanvasValues"
                      >
                        Show Values
                      </button></div>
                    </div>
                  </div>
                  <br />
                  <br />

                  <div
                    className="offcanvas offcanvas-bottom"
                    tabindex="-1"
                    id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasBottomLabel">
                        Serialized Bytes32 Chunks
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
                        <div className={`row row-cols-${numberOfLeaves}`}>
                          {chunks()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <br />

            {/* <div className={`row  text-break`}>
                {_values().map((valueChunk, idx) => {
                  let red =
                    idx + 1 == _values().length ? 0 : idx % 2 == 1 ? 256 : 0;
                  let green = idx + 1 == _values().length ? 200 : 0;
                  let blue =
                    idx + 1 == _values().length ? 0 : idx % 2 == 0 ? 256 : 150;
                  let color = `rgb(${red},${green},${blue})`;
                  return (
                    <div style={{ color: color }}>
                      {valueChunk.map((value) => {
                        return `${value}, `;
                      })}
                    </div>
                  );
                })}
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
