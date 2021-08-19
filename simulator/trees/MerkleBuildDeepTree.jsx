import OldNode from '../nodes/OldNode'
import multiProof from "./Proof";
import BuildMultiMerkle from './BuildMultiMerkle';
import MerkleSubTree from './MerkleSubTree';
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";
export default function MerkleBuildDeepTree(props) {
  

  const NUMBER_OF_VALUES = props.NUMBER_OF_VALUES;

  let numberLeaves = getNextPowerOfTwo(NUMBER_OF_VALUES);
  let totalNodes = getNextPowerOfTwo(numberLeaves + 1);
  let numberEmpty = numberLeaves - NUMBER_OF_VALUES;
  let tree = build(NUMBER_OF_VALUES);


  function rowOfNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 8; i < 16; i++) {
        i != 12 ?
      row.push(
        <div
          key={`${type}node${i}`}
          id={`${type}node${i}`}
          className={"col p-1"}
        >
          <OldNode
            idx={i}
            type={type}
            empty={empty}
            level={level}
            chunkIdx={i}
            numChunks={8}
          />
        </div>
      ) :       row.push(
        <div
          className={"col p-1"}
        >
<div className='flexbox border-4 border' style={{height: '100%', paddingTop: '100%'}}>
    
</div>
        </div>
      )
    }
    return row;
  }

  function rowOfHashNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div key={`${type}node${i}`} id={`${type}node${i}`} className="col p-1">
          <OldNode
            idx={i + numberLeaves}
            type={type}
            empty={empty}
            level={"branch"}
            chunkIdx={i}
            numChunks={NUMBER_OF_VALUES}
         />
        </div>
      );
    }
    return row;
  }

  function rowOfTreeNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div key={`${type}node${i}`} id={`${type}node${i}`} className="col p-1">
          <OldNode
            idx={i + 2 ** level}
            type=""
            empty={empty}
            level={"intermediate"}
            chunkIdx={i}
            numChunks={NUMBER_OF_VALUES}
          />
        </div>
      );
    }
    return row;
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

  function numberOfLevels(leaves) {
    let number = 1;
    if (leaves == 1) {
      return number;
    } else {
      let accumulator = Math.log(leaves) / Math.log(2);
      number += accumulator;
      return number;
    }
  }

  function build(number) {
    let tree = [];
    let leaves = getNextPowerOfTwo(number);
    let empties = leaves - number;
    let levels = numberOfLevels(leaves);
    tree.push(
      <div
        key={`hashtreeroot`}
        id={`hashtreeroot`}
        className="row row-cols-auto justify-content-around"
      >
        <div className="col p-1">
          <OldNode type="R" level="root"  />
        </div>
      </div>
    );
    for (let i = 1; i < levels - 1; i++) {
      tree.push(
        <div
          key={`treelevel:${i}`}
          id={`treelevel:${i}`}
          className="row row-cols-auto justify-content-around"
        >
          {rowOfTreeNodes(2 ** i, `T`, i)}
        </div>
      );
    }
    if (number > 1) {
      tree.push(
        <div
          key={"hash"}
          id={"hash"}
          className="row row-cols-auto justify-content-around"
        >
          {rowOfHashNodes(number + empties, "", "branch")}
          {/* {rowOfHashNodes(empties, "", "branch", true)} */}
        </div>
      );
    }
    tree.push(
      <div
        key={"leaves"}
        id={"leaves"}
        className="row row-cols-auto justify-content-around"
      >
        {rowOfNodes(number, "", "leaf")}
      </div>
    );
    tree.push(
      <div
        key={"subtree"}
        id={"subtree"}
        className="row justify-content-around"
      >
          <div className='col-2'>

          </div>
          <div className='col-10'>
              <MerkleSubTree NUMBER_OF_VALUES={8} origin={12}  />
          </div>
      </div>
    );
    return tree;
  }

  function getTree() {
    return tree;
  }

  return (
    <div className="container pt-4">

      <div className="row">{getTree()}</div>
      </div>
  );
}
