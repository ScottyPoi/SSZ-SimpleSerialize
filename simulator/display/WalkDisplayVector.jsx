import WalkVectorText from "../text/WalkVectorText";
import BuildTree from "../trees/BuildTree";
import VectorText from "../text/VectorText";
import * as NumberUintType from "../ssz/types/basic/NumberUintType";
import HashRootText from "../text/HashRootText";
import { merkleize } from "../ssz/util/merkleize";
import { createHash } from "crypto";
import BuildWalkVectorTree from "../trees/BuildWalkVectorTree";

export default function WalkDisplayVector(props) {
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
        <WalkVectorText
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
        <div className="col text-break" style={{ border: "solid gray" }}>
          {"0x".padEnd(66, "0")}
        </div>
      );
    }

    return chunks;
  }

  function string() {

    let string = ""
    serialized.forEach((chunk) => {
      let _output = toHexString(chunk);

      string += _output;
    });

    for (let i = 0; i < emptyLeaves; i++) {
      string += "00".padEnd(64, "0");
    }

    return string;
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
          <BuildWalkVectorTree NUMBER_OF_VALUES={NUMBER_OF_VALUES} />
        </div>
        <div className="row">{chunks()}</div>
        <div className="row text-break"><p>0x{string()}</p></div>
      </div>
    </>
  );
}
