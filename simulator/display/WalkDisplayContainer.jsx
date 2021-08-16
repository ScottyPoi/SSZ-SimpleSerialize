import WalkListText from "../text/WalkListText";
import WalkVectorText from "../text/WalkVectorText";
import BuildTree from "../trees/BuildTree";
import VectorText from "../text/VectorText";
import * as NumberUintType from "../ssz/types/basic/NumberUintType";
import HashRootText from "../text/HashRootText";
import { merkleize } from "../ssz/util/merkleize";
import { createHash } from "crypto";
import BuildWalkVectorTree from "../trees/BuildWalkVectorTree";
import BuildListTree from "../trees/BuildListTree";
import BuildWalkListTree from "../trees/BuildWalkListTree";
import WalkBuildContainerTree from "../trees/WalkBuildContainerTree";
import WalkContainerText from "../text/WalkContainerText";
export default function WalkDisplayContainer(props) {
  // let serialized = props.serialized;
  let values = props.values;
  let length = props.length;
  const size = 256;
  // let variable = props.variable;
  const valuesPerChunk = 256 / size;
  let numberOfChunks = length / (256 / size);

  let roots = values.slice(0, length);

  let totalLeaves = getNextPowerOfTwo(numberOfChunks);

  let NUMBER_OF_VALUES = Math.floor(length / (256 / size)) + 1;

  let numberOfLeaves = getNextPowerOfTwo(NUMBER_OF_VALUES);

  let emptyLeaves = totalLeaves - numberOfChunks;

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
    let chunks = roots.map((chunk, idx) => {
      return (

          <WalkContainerText
            numberOfLeaves={NUMBER_OF_VALUES}
            emptyLeaves={emptyLeaves}
            s
            key={idx}
            id={`chunk${idx}`}
            chunk={chunk}
            length={length}
            size={256}
            idx={idx}
            numberOfChunks={totalLeaves}
          />

      );
    });

    for (let i = 0; i < emptyLeaves; i++) {
      chunks.push(
        <div
          className="col overflow-hidden text-break"
          style={{ border: "solid gray" }}
        >
          {"0x".padEnd(66, "0")}
        </div>
      );
    }

    return chunks;
  }

  function string() {
    let string = "";
    roots.forEach((chunk) => {
      let _output = chunk;

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

  const displaySize = numberOfLeaves == 1 ? "x-large" : "large";
  const width = numberOfLeaves == 1 ? "50%" : "100%";

  return (
    <>
      <div className="container">
        <div className="row">
          <WalkBuildContainerTree
            limit={length}
            chunks={numberOfChunks}
            length={length}
            valuesPerChunk={valuesPerChunk}
            numberofLeaves={totalLeaves}
          />
        </div>
        {length < 9 && (<div className="row">{chunks()}</div>)}
        <div className="row text-break">
          <p>0x{string()}</p>
        </div>
      </div>
    </>
  );
}
