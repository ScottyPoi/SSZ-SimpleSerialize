import BitListText from "../text/BitListText";
import styles from "../styles/UintText.module.css";
import BuildListTree from "../trees/BuildListTree";
import { serialize } from "../ssz/types/basic/NumberUintType";
import HashRootText from "../text/HashRootText";
import { merkleize } from "../ssz/util/merkleize";
import { createHash } from "crypto";

export default function DisplayBitList(props) {
  let serialized = props.serialized;
  let limit = props.limit;
  let values = props.values;
  let length = props.length;
  let numEmpty = props.numEmpty;
  let numberOfChunks = serialized.length;
  let numberOfLeaves = getNextPowerOfTwo(numberOfChunks);
  let emptyLeaves = numberOfLeaves - numberOfChunks;
  // let emp = new Array(numEmpty);

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

  let leaves = getNextPowerOfTwo(serialized.length);

  function chunks() {
    let chunks = serialized.map((chunk, idx) => {
      let _output = `${toHexString(chunk)}`;

      return (
        <div key={`chunk${idx}`} className="col" key={idx} id={`chunk${idx}`}>
          <BitListText
            chunk={_output}
            limit={limit}
            length={length}
            idx={idx}
            chunk_count={numberOfChunks}
          />
        </div>
      );
    });

    for (let i = 0; i < emptyLeaves; i++) {
      chunks.push(
        <div
          key={`Echunk${i}`}
          className="col"
          style={{ border: "solid gray" }}
        >
          EMPTY
        </div>
      );
    }

    return chunks;
  }

  function emptyVal(number) {
    for (let i = 0; i < number; i++) {
      return `_____, `;
    }
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

  let green = { r: 0, g: 200, b: 0 };
  let blue = { r: 0, g: 0, b: 256 };
  let magenta = { r: 256, g: 0, b: 150 };

  function color(color) {
    let r = color.r;
    let g = color.g;
    let b = color.b;
    return `rgb(${r},${g},${b})`;
  }

  let _leaves = serialized.map((chunk) => {
    let hash = createHash("sha256");
    hash.update(chunk);
    return hash.digest();
  });

  let hashRoot = merkleize(_leaves);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10">
          <div className="row justify-content-center">
              <HashRootText hash={hashRoot} displaySize={numberOfLeaves == 1 ? 'xx-large' : 'large'} width={'100%'} list={true}/>
            </div>
            <div className="row">
            <BuildListTree
              limit={limit}
              chunks={serialized.length}
              length={length}
              valuesPerChunk={256}
            />
            </div>

            <div className={`row row-cols-${numberOfLeaves}`}>
              {numberOfChunks < 5 ? (
                chunks()
              ) : (
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasBottom"
                    aria-controls="offcanvasBottom"
                  >
                    Show Chunks
                  </button>

                  <div
                    className="offcanvas offcanvas-bottom"
                    data-bs-backdrop="false"
                    tabindex="-1"
                    id="offcanvasBottom"
                    aria-labelledby="offcanvasBottomLabel"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasBottomLabel">
                        Chunks
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
          </div>
        </div>
      </div>
    </>
  );
}
