import Node from "../nodes/Node";
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";

export default function BuildtListTree(props) {
  const chunks = props.chunks;
  const length = props.length;
  const valuesPerChunk = props.valuesPerChunk;
  let activeChunk = Math.floor(length / valuesPerChunk) + 1;

  let numberLeaves = getNextPowerOfTwo(chunks);
  let totalNodes = getNextPowerOfTwo(chunks+1)
  let numberEmpty = numberLeaves - chunks;
  let tree = build(chunks);

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
            numChunks={activeChunk}
            limit={chunks}
          />
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
            idx={i + 1}
            type={type}
            empty={empty}
            level={level}
            chunkIdx={i}
            numChunks={activeChunk}
            limit={chunks}
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
          <Node
            idx={i + 1}
            type={type}
            empty={empty}
            level={level}
            chunkIdx={i}
            numChunks={activeChunk}
            limit={chunks}
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

  function getEmpty() {
    return numberEmpty;
  }

  function Empties(number) {
    let empties = [];
    for (let i = 0; i < number; i++) {
      empties.push(
        <div
          id={`emptyvaluenode${i}`}
          key={`emptyvaluenode${i}`}
          className="col p-1"
        >
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

  function build(number) {
    let tree = [];
    let leaves = getNextPowerOfTwo(number);
    let empties = leaves - number;
    let levels = numberOfLevels(leaves);
    tree.push(
      <div
        key={`merkleroot`}
        id={`merkleroot`}
        className="row row-cols-auto justify-content-evenly"
      >
        <div className="col p-1">
          <div
            style={{ display: "inline-block", width: "25px", height: "auto" }}
          />
        </div>
        <div className="col p-1">
          <div
            style={{ display: "inline-block", width: "25px", height: "auto" }}
          />
        </div>
        <div className="col p-1">
          <Node type="M" level="merkle" />
        </div>
      </div>
    );
    tree.push(
      <div
        key={`hashtreeroot`}
        id={`hashtreeroot`}
        className="row row-cols-auto justify-content-between"
      >
        <div className="col p-1">
          <div
            style={{ display: "inline-block", width: "25px", height: "auto" }}
          />
        </div>
        <div className="col p-1">
          <div
            style={{ display: "inline-block", width: "25px", height: "auto" }}
          />
        </div>
        <div className="col p-1">
          <Node type="R" level="root" />
        </div>
        <div className="col p-1">
          <div
            style={{ display: "inline-block", width: "25px", height: "auto" }}
          />
        </div>
        <div className="col p-1">
          <Node type={props.limit} level="length" />
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
          {rowOfTreeNodes(2 ** i, `T${i - 1}`)}
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
          {rowOfHashNodes(number + empties, "H", "branch")}
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
        {rowOfNodes(number + empties, "L", "leaf")}
        {/* {rowOfNodes(empties, "EL", 'leaf', true)} */}
      </div>
    );
    return tree;
  }

  function getTree() {
    return tree;
  }

  return getTree();
}
