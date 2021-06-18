import Node from "../nodes/Node";
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";

export default function BuildContainerTree(props) {
  const NUMBER_OF_VALUES = props.NUMBER_OF_VALUES;
    const nonRoots = 2
    const roots = 3
  let numberLeaves = getNextPowerOfTwo(NUMBER_OF_VALUES);
  let numberEmpty = numberLeaves - NUMBER_OF_VALUES;
  let tree = build(nonRoots, roots);

  function rowOfNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div key={`${type}node${i}`} id={`${type}node${i}`} className="col p-1">
          <Node
            idx={i + 1}
            type={type}
            empty={empty}
            level={level}
            chunkIdx={i}
            numChunks={NUMBER_OF_VALUES}
          />
        </div>
      );
    }
    return row;
  }

  function rowOfLeafNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div key={`${type}node${i}`} id={`${type}node${i}`} className="col">
          <div className="rowjustify-content-center">
            <div className="col">
              <Node
                idx={i + 1}
                type={type}
                empty={empty}
                level={level}
                chunkIdx={i}
                numChunks={NUMBER_OF_VALUES}
              />
            </div>
            </div>
        </div>
      );
    }
    return row;
  }

  function rowOfEmptyNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div key={`${type}node${i}`} id={`${type}node${i}`} className="col">
          <div className="rowjustify-content-center">
            <div className="col">
              <Node
                idx={i + 1 + 5}
                type={type}
                empty={empty}
                level={level}
                chunkIdx={i}
                numChunks={NUMBER_OF_VALUES}
              />
            </div>
            </div>
        </div>
      );
    }
    return row;
  }

  function rowOfRootNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div key={`${type}node${i}`} id={`${type}node${i}`} className="col">
            <div className='row'>
                
            </div>
          <div className="row row-cols-2 justify-content-between">
            <div className="col p-1">
              <Node
                idx={i + 1 + 2}
                type={type}
                empty={empty}
                level={level}
                chunkIdx={i}
                numChunks={NUMBER_OF_VALUES}
              />
            </div>
            <div className="col p-1">
              <Node
                idx=""
                type="T"
                empty={empty}
                level='length'
                chunkIdx={i}
                numChunks={NUMBER_OF_VALUES}
              />
            </div>
            </div>
        </div>
      );
    }
    return row;
  }

  function rowOfHashNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div key={`${type}node${i}`} id={`${type}node${i}`} className="col p-1">
          <Node
            idx={i + numberLeaves}
            type={type}
            empty={empty}
            level={level}
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
          <div className="row">
            <Node
              idx={i + 2 ** level}
              type=""
              empty={empty}
              level={level}
              chunkIdx={i}
              numChunks={NUMBER_OF_VALUES}
            />
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col"></div>
          </div>
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
          <Node idx={i + 1} type="EV" empty={true} />
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

  function build(nonRoots, roots) {
    let tree = [];
    let number = nonRoots + roots
    let leaves = getNextPowerOfTwo(nonRoots + roots);
    let empties = leaves - number;
    let levels = numberOfLevels(leaves);
    tree.push(
      <div
        key={`hashtreeroot`}
        id={`hashtreeroot`}
        className="row row-cols-auto justify-content-around"
      >
        <div className="col p-1">
          <Node type="R" level="root" />
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
        </div>
      );
    }
    tree.push(
      <div
        key={"leaves"}
        id={"leaves"}
        className="row justify-content-center"
      >
        {rowOfLeafNodes(nonRoots + roots, "", "leaf")}
        {/* {rowOfRootNodes(roots, "", "leaf")} */}
        {rowOfEmptyNodes(empties, "", "leaf", true)}
      </div>
    );
    return tree;
  }

  function getTree() {
    return tree;
  }

  return getTree();
}
