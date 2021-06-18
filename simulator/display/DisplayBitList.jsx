import BitListText from '../graphics/text/BitListText'
import styles from '../graphics/styles/UintText.module.css';
import BuildListTree from '../graphics/trees/BuildListTree'
import { serialize } from '../../ssz/src/types/basic/NumberUintType';
export default function DisplayBitList(props) {
let serialized = props.serialized;
let limit = props.limit;
let values = props.values;
let length = props.length;
let numEmpty = props.numEmpty;
let numberOfChunks = serialized.length;
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




    let _output =  `${toHexString(chunk)}`

    return (
      <div key={`chunk${idx}`} className='col' key={idx} id={`chunk${idx}`}>
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

  for (let i=0; i<emptyLeaves; i++) {
    chunks.push(
      <div key={`Echunk${i}`} className='col' style={{ border: "solid gray"}}>EMPTY</div>
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

let green = {r: 0, g: 200, b: 0};
let blue = {r: 0, g: 0, b: 256};
let magenta = {r: 256, g: 0, b: 150}

function color(color) {
  let r = color.r;
  let g = color.g;
  let b = color.b;
  return `rgb(${r},${g},${b})`
}


    

    return (
      <>
            <div className="container">
            <div className='row'>
          <div className='col-10'>
      <BuildListTree 
      limit={limit}
      chunks={serialized.length}
      length={length}
      
      />
      
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
        )
      }
      </div>
      <br />
      </div>
      </div>
            <div className='row'>
      <div className='col'>
      <p>        
        obj: BitList[{limit}] = {`[`}
        <div className={'d-flex flex-row text-break'} >
          <span>
        {_values().map((valueChunk, idx) => {

              let valueColor =  idx == Math.floor(length/256) ? green : idx % 2 == 0 ? blue : magenta

              let vColor = color(valueColor)
              return (
                <span key={`valuechunk${idx}`} style={{ color: vColor}}>
                  {valueChunk.map((value) => {
                    return `${value}, `;
                  })}
                </span>
              );
            })}
        <span className={styles.empties}>
          <span style={{backgroundColor: "black", color: "yellow"}}>__1__</span>,
        {numEmpty.map((empty, idx) => {
          return `_____, `
        })}</span>
        </span>
        </div>
        {`]`}
        </p>
      </div>
      </div>

      
      </div>
        </>
    )
}