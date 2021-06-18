import HashRootText from "../graphics/text/HashRootText"
import BuildTree from "../graphics/trees/BuildTree"
import { merkleize } from "../../ssz/src/util/merkleize";
import { createHash } from "crypto";
import VectorText from "../graphics/text/VectorText";
import ContainerText from "../graphics/text/ContainerText";
import * as NumberUintType from "../../ssz/src/types/basic/NumberUintType";
import BuildVectorTree from "../graphics/trees/BuildVectorTree";
import BuildContainerTree from "../graphics/trees/BuildContainerTree";

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


export default function DisplayContainer(props) {

    let example = props.example

    let serialized = Object.entries(example).map((key, idx) => {
        return Object.values(key[1])[1]
    })
    let values = Object.entries(example).map((key, idx) => {
        return Object.values(key[1])[0]
    })

    let details = Object.entries(example).map((key, idx) => {
      let red = idx + 1 == 5 ? 0 : idx % 2 == 1 ? 240 : 0;
      let green = idx + 1 == 5 ? 160 : 0;
      let blue = idx + 1 == 5 ? 0 : idx % 2 == 0 ? 256 : 180;
      let color = `rgb(${red},${green},${blue})`;
      let vals = Object.values(key[1]);

      return (
        <div
          key={idx}
          className="row"
          style={{ fontSize: 'x-small' }}
        >
          {key[0]}<br/>
            {`<{${vals[0]}}>`}<br/>
            {vals[1]}<br/>
          </div>
      );
    })


    let length = props.length;
    let size = 256;
  
    let numberOfChunks = Math.floor(length / (256 / size)) + 1;
  
    let NUMBER_OF_VALUES = 5;
  
    let numberOfLeaves = 8;
  
    let emptyLeaves = 3;
  

    function chunks() {
      let chunks = serialized.map((chunk, idx) => {
        

        let _chunk = new Uint8Array(32)
        _chunk =  NumberUintType.serialize(chunk, _chunk, 0, 64)
        let _chunked = idx < 2 ? toHexString(_chunk) : chunk
  
        return (
          <ContainerText
            numberOfLeaves={8}
            emptyLeaves={3}
            id={`chunk${idx}`}
            chunk={_chunked}
            length={5}
            size={256}
            idx={idx}
            numberOfChunks={numberOfChunks}
            detail={details[idx]}
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
        let _values = []
      _values.push(values.map((value, idx) => {
          return (
              <div key={idx} className='col p-0'>{value}</div>
          )
      }))
      for (let i=0;i<emptyLeaves;i++) {
          _values.push(<div className='col p-0'>E</div>)
      }
      return _values
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
        <div className="container">
        <div className="row">
          <div className="col">
            <div className="row justify-content-center">
              <HashRootText
                hash={hashRoot}
                displaySize={displaySize}
                width={width}
              />
            </div>
            <div className="row">
              <BuildContainerTree NUMBER_OF_VALUES={5} />
            </div>
            <div className={`row row-cols-${numberOfLeaves} text-break`}>
                {_values()}
            </div>
            <div className={`row row-cols-${numberOfLeaves} text-break`}>
             
                {chunks()}
             
            </div>
            <br />
              
          </div>
        </div>
      </div>
    )
}