import Node from "../nodes/Node";
import { useEffect, useState } from "react";
import styles from '../styles/NodeStyles.module.css'

export default function BuildTree(props) {

    const NUMBER_OF_VALUES = props.NUMBER_OF_VALUES


    
    let numberLeaves = getNextPowerOfTwo(NUMBER_OF_VALUES);
    let numberEmpty = numberLeaves - NUMBER_OF_VALUES;
    let tree = build(NUMBER_OF_VALUES);

  function rowOfNodes(number, type, level, empty=false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div key={`${type}node${i}`} id={`${type}node${i}`} className="col p-1">
          <Node idx={i + 1} type={type} empty={empty} level={level} chunkIdx={i} numChunks={NUMBER_OF_VALUES}/>
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



  function getEmpty() {
    return numberEmpty;
  }

  function Empties(number) {
    let empties = [];
    for (let i = 0; i < number; i++) {
      empties.push(
        <div id={`emptyvaluenode${i}`} className="col p-1">
          <Node idx={i + 1} type="EV" empty={true}/>
        </div>
      );
    }
    return empties;
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
          <Node type="R" level='root'/>
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
          {rowOfNodes(2 ** i, `T${i - 1}`)}
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
          {rowOfNodes(number + empties, "", 'branch')}
          {/* {rowOfNodes(empties, "EH", 'branch', true)} */}
        </div>
      );
    }
    tree.push(
      <div
        key={"leaves"}
        id={"leaves"}
        className="row row-cols-auto justify-content-around"
      >
        {rowOfNodes(number + empties, "", 'leaf')}
        {/* {rowOfNodes(empties, "EL", 'leaf', true)} */}
      </div>
    );
    return tree;
  }

  function getTree() {
    return tree;
  }

  return getTree()


}