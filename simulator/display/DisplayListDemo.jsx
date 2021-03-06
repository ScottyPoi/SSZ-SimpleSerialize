import ListText from '../text/ListText'
import styles from '../styles/UintText.module.css';
import BuildListTree from '../trees/BuildListTree'
import { serialize } from '../ssz/types/basic/NumberUintType';
import HashRootText from '../text/HashRootText';
import { merkleize } from "../ssz/util/merkleize";
import { createHash } from "crypto";
export default function DisplayListDemo(props) {
let serialized = props.serialized;
let valuesPerChunk = props.valuesPerChunk;
let limit = props.limit;
let values = props.values;
let size = props.size;
let length = props.length;
let numEmpty = props.numEmpty;
let numberOfChunks = Math.floor((limit)/valuesPerChunk);
let numberOfLeaves = getNextPowerOfTwo(numberOfChunks)
let emptyLeaves = numberOfLeaves - numberOfChunks
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

let leaves = getNextPowerOfTwo(serialized.length)


function chunks() {
  let chunks = serialized.map((chunk, idx) => {




    let _output =  toHexString(chunk)

    return (
       
      <div className='col' key={idx} id={`chunk${idx}`}>
           <ListText
            chunk={_output}
            limit={limit}
            length={length}
            idx={idx}
            chunk_count={numberOfChunks}
            valuesPerChunk={valuesPerChunk}
            numberOfLeaves={numberOfLeaves}
        size={props.size}
          /> 
      </div>
    );
  });

  for (let i=0; i<emptyLeaves; i++) {
    chunks.push(
      <div key={`empty${i}`} className='col' style={{ border: "solid gray"}}>EMPTY</div>
    )
  }

  return chunks;
}

function emptyVal(number) {
  for (let i=0; i<number; i++) {
    return `_____, `
  }
}

function _values() {
  let numChunks = numberOfChunks;
  let valueChunks = [];
  for (let i = 0; i < numChunks; i++) {
    let startIdx = i * valuesPerChunk;
    let endIdx =
      startIdx + valuesPerChunk - 1 > numberOfChunks
        ? startIdx + valuesPerChunk
        : numberOfChunks;
    valueChunks.push(values.slice(startIdx, endIdx));
  }
  return valueChunks;
}

let green = {r: 0, g: 200, b: 0};
let blue = {r: 0, g: 0, b: 256};
let magenta = {r: 256, g: 0, b: 150}

function color(color) {
  let r = color.r;
  let g = color.g;
  let b = color.b;
  return `rgb(${r},${g},${b})`
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
      <BuildListTree 
      limit={limit}
      chunks={numberOfChunks}
      length={length}
      valuesPerChunk={valuesPerChunk}
      numberofLeaves={numberOfLeaves}
      
      />
      </div>
      
      
      <br />
      </div>

        </>
    )
}