// 'offcanvas' reveal of hashes-only merkle tree representation
// 'hash' math functions revealed
// animated filling of merkle tree.

import OldNode from "../nodes/OldNode";
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";

export default function BuildHashTree(props) {
  let numberOfValues = props.NUMBER_OF_VALUES;
  let numberLeaves = getNextPowerOfTwo(numberOfValues);
  let numberPadded = props.red;
  let emptyLeaves = props.emptyLeaves;
  let list = props.list;
  let object = props.object ? props.object : "x";
  return build(numberLeaves, list, numberOfValues, numberPadded, object);
}

export function getNextPowerOfTwo(number) {
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

function rowOfLeafNodes(number, empty = false, pad = false) {
  //   let leaves = getNextPowerOfTwo(number);
  let row = [];
  if (number % 2 == 0) {
    for (let i = 0; i < number; i++) {
      row.push(
        <div
          key={`leafNodes${i}`}
          className="d-flex flex-row justify-content-evenly"
        >
          <div className="d-flex flex-col">
            <h4>{`hash (`} </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 1}
              type=""
              empty={empty}
              level="leaf"
              chunkIdx={i}
              numChunks={number}
            />
          </div>
          <div className="d-flex flex-col">
            <h4> ) = </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 1}
              type=""
              empty={empty}
              level="branch"
              chunkIdx={i}
              numChunks={number}
            />
          </div>
        </div>
      );
    }
  } else {
    for (let i = 0; i < number; i++) {
      row.push(
        <div
          key={`leafNodes${i}`}
          className="d-flex flex-row justify-content-evenly"
        >
          <div className="d-flex flex-col">
            <h4>{`hash (`} </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 1}
              type=""
              empty={empty}
              level="leaf"
              chunkIdx={i}
              numChunks={number}
            />
          </div>
          <div className="d-flex flex-col">
            <h4> ) = </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 1}
              type=""
              empty={empty}
              level="branch"
              chunkIdx={i}
              numChunks={number}
            />
          </div>
        </div>
      );
    }
    row.push(
      <div key="tophash" className="d-flex flex-row justify-content-evenly">
        <div className="d-flex flex-col">
          <h4>{`hash (`} </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={number + 1}
            type=""
            empty={true}
            level="leaf"
            chunkIdx={number}
            numChunks={number}
          />
        </div>
        <div className="d-flex flex-col">
          <h4> ) = </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={number}
            type=""
            empty={empty}
            level="branch"
            chunkIdx={number - 1}
            numChunks={number}
          />
        </div>
      </div>
    );
  }

  return row;
}

function rowOfNodes(
  number,
  type,
  level,
  empty = false,
  pad = false,
  numberOfValues
) {
  //   let leaves = getNextPowerOfTwo(number);

  let row = [];
  for (let i = 0; i < number; i++) {
    row.push(
      <div key={`${type}node${i}`} id={`${type}node${i}`} className="col p-1">
        <OldNode
          idx={i + 1}
          type={type}
          empty={i >= numberOfValues}
          level={level}
          chunkIdx={i}
          numChunks={numberOfValues}
        />
      </div>
    );
  }
  return row;
}

function displayTreeNodes(number, empty = false) {
  //   let leaves = getNextPowerOfTwo(number);
  let row = [];
  if (number == 1) {
    return <div></div>;
  }
  if (number == 2) {
    for (let i = 0; i < number; i += 2) {
      row.push(
        <div
          key={`treenodes${i}`}
          className="d-flex flex-row justify-content-evenly"
        >
          <div className="d-flex flex-col">
            <h4>{`hash (`} </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 2}
              type=""
              empty={empty}
              level="branch"
              chunkIdx={i}
              numChunks={number}
            />
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 3}
              type=""
              empty={empty}
              level="branch"
              chunkIdx={i + 1}
              numChunks={number}
            />
          </div>
          <div className="d-flex flex-col">
            <h4> ) = </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              // idx={Math.floor(i / 2) + 1}
              type="R"
              empty={empty}
              level="root"
              // chunkIdx={i}
              numChunks={number}
            />
          </div>
        </div>
      );
    }
  } else {
    for (let i = 0; i < number; i += 2) {
      row.push(
        <div
          key={`treenodes${i}`}
          className="d-flex flex-row justify-content-evenly"
        >
          <div className="d-flex flex-col">
            <h4>{`hash (`} </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 2}
              type=""
              empty={empty}
              level="intermediate"
              chunkIdx={i}
              numChunks={number}
            />
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 3}
              type=""
              empty={empty}
              level="intermediate"
              chunkIdx={i + 1}
              numChunks={number}
            />
          </div>
          <div className="d-flex flex-col">
            <h4> ) = </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={Math.floor(i / 2) + 2}
              type="TA"
              empty={empty}
              level="intermediate"
              chunkIdx={i}
              numChunks={number}
            />
          </div>
        </div>
      );
    }
  }

  return row;
}

function build(leaves, list, numberOfValues, numberEmpty, object) {
  let _tree = [];
  if (leaves == 1) {
    _tree = [];

    _tree.push(
      <div key="tophashed" className="d-flex flex-row justify-content-evenly">
        {displayTreeNodes(1)}
        <div className="d-flex flex-col">
          <h4>{`hash (`} </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={1}
            type=""
            empty={false}
            level="leaf"
            chunkIdx={0}
            numChunks={1}
          />
        </div>
        <div className="d-flex flex-col">
          <h4> ) = </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            //   idx={2}
            type="R"
            empty={false}
            level="root"
            chunkIdx={0}
            numChunks={1}
          />
        </div>
      </div>
    );
    list === true
      ? _tree.push(
          <div
            key={`hashtreeroot`}
            id={`hashtreeroot`}
            className="row row-cols-auto justify-content-evenly align-items-center"
            style={{ border: "solid black" }}
          >
            <div className="col p-1 align-items-center">
              <h4>merkleize ({object}) =</h4>
            </div>
            <div className="d-flex flex-col p-1">
              <OldNode
                // idx={i + 1}
                type="M"
                empty={false}
                level="merkle"
                // chunkIdx={i}
                numChunks={leaves}
              />
            </div>
          </div>
        )
      : _tree.push(
          <div
            key={`hashtreeroot`}
            id={`hashtreeroot`}
            className="row row-cols-auto justify-content-evenly align-items-center"
            style={{ border: "solid black" }}
          >
            <div className="col p-1 align-items-center">
              <h4>merkleize ({object}) =</h4>
            </div>
            <div className="d-flex flex-col p-1">
              <OldNode type="R" level="root" />){" "}
            </div>
          </div>
        );
  } else if (leaves == 2) {
    _tree = [];

    _tree.push(
      <div key={"leaves1"} id={"leaves"} className="justify-content-center">
        {displayTreeNodes(leaves)}
        {/* {displayTreeNodes(empties, true)} */}
      </div>
    );
    _tree.push(
      <div key={"leaves2"} id={"leaves"} className="justify-content-center">
        {rowOfLeafNodes(leaves)}
        {/* {rowOfLeafNodes(empties-1, true)} */}
      </div>
    );
    list === true
      ? _tree.push(
          <div
            key={`hashtreeroot`}
            id={`hashtreeroot`}
            className="row row-cols-auto justify-content-evenly align-items-center"
            style={{ border: "solid black" }}
          >
            <div className="col p-1 align-items-center">
              <h4>merkleize ({object}) =</h4>
            </div>
            <div className="d-flex flex-col p-1">
              <OldNode
                // idx={i + 1}
                type="M"
                empty={false}
                level="merkle"
                // chunkIdx={i}
                numChunks={leaves}
              />
            </div>
          </div>
        )
      : _tree.push(
          <div
            key={`hashtreeroot`}
            id={`hashtreeroot`}
            className="row row-cols-auto justify-content-evenly align-items-center"
            style={{ border: "solid black" }}
          >
            <div className="col p-1 align-items-center">
              <h4>merkleize ({object}) =</h4>
            </div>
            <div className="d-flex flex-col p-1">
              <OldNode type="R" level="root" />){" "}
            </div>
          </div>
        );
  } else if (leaves == 4) {
    _tree = [];

    _tree.push(
      <div key="hashednodes" className="d-flex flex-row justify-content-evenly">
        <div className="d-flex flex-col">
          <h4>{`hash (`} </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={2}
            type=""
            empty={false}
            level="intermediate"
            chunkIdx={0}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={3}
            type=""
            empty={false}
            level="intermediate"
            chunkIdx={1}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col">
          <h4> ) = </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            //   idx={Math.floor(i / 2) + 1}
            type="R"
            empty={false}
            level="root"
            // chunkIdx={i}
            numChunks={leaves}
          />
        </div>
      </div>
    );
    for (let i = 0; i < leaves; i += 2) {
      _tree.push(
        <div
          key={`branchnodes${i}`}
          className="d-flex flex-row justify-content-evenly"
        >
          <div className="d-flex flex-col">
            <h4>{`hash (`} </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 1}
              type=""
              empty={false}
              level="branch"
              chunkIdx={i}
              numChunks={leaves}
            />
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 2}
              type=""
              empty={false}
              level="branch"
              chunkIdx={i + 1}
              numChunks={leaves}
            />
          </div>
          <div className="d-flex flex-col">
            <h4> ) = </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={Math.floor(i / 2) + 2}
              type=""
              empty={false}
              level="intermediate"
              // chunkIdx={i}
              numChunks={leaves}
            />
          </div>
        </div>
      );
    }
    for (let i = 0; i < leaves; i++) {
      _tree.push(
        <div
          key={`leafnodes 0${i}`}
          className="d-flex flex-row justify-content-evenly"
        >
          <div className="d-flex flex-col">
            <h4>{`hash (`} </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 1}
              type=""
              empty={i >= numberOfValues}
              level="leaf"
              chunkIdx={i}
              numChunks={numberOfValues}
            />
          </div>
          <div className="d-flex flex-col">
            <h4> ) = </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 1}
              type=""
              empty={false}
              level="branch"
              chunkIdx={i}
              numChunks={leaves}
            />
          </div>
        </div>
      );
    }
    
  } else if (leaves == 8) {
    _tree = [];

    _tree.push(
      <div className="d-flex flex-row justify-content-evenly">
        <div className="d-flex flex-col">
          <h4>{`hash (`} </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={2}
            type=""
            empty={false}
            level="intermediate"
            chunkIdx={0}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={3}
            type=""
            empty={false}
            level="intermediate"
            chunkIdx={1}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col">
          <h4> ) = </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            //   idx={Math.floor(i / 2) + 1}
            type="R"
            empty={false}
            level="root"
            // chunkIdx={i}
            numChunks={leaves}
          />
        </div>
      </div>
    );
    _tree.push(
      <div key="hashthisone" className="d-flex flex-row justify-content-evenly">
        <div className="d-flex flex-col">
          <h4>{`hash (`} </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={4}
            type=""
            empty={false}
            level="intermediate"
            chunkIdx={0}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={5}
            type=""
            empty={false}
            level="intermediate"
            chunkIdx={1}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col">
          <h4> ) = </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={2}
            type=""
            empty={false}
            level="intermediate"
            // chunkIdx={i}
            numChunks={leaves}
          />
        </div>
      </div>
    );
    _tree.push(
      <div key="hashanother" className="d-flex flex-row justify-content-evenly">
        <div className="d-flex flex-col">
          <h4>{`hash (`} </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={6}
            type=""
            empty={false}
            level="intermediate"
            chunkIdx={0}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={7}
            type=""
            empty={false}
            level="intermediate"
            chunkIdx={1}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col">
          <h4> ) = </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            idx={3}
            type=""
            empty={false}
            level="intermediate"
            // chunkIdx={i}
            numChunks={leaves}
          />
        </div>
      </div>
    );
    for (let i = 0; i < leaves; i += 2) {
      _tree.push(
        <div
          key={`branchnodes 0${i}`}
          className="d-flex flex-row justify-content-evenly"
        >
          <div className="d-flex flex-col">
            <h4>{`hash (`} </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 8}
              type=""
              empty={false}
              level="branch"
              chunkIdx={i + 8}
              numChunks={leaves}
            />
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 9}
              type=""
              empty={false}
              level="branch"
              chunkIdx={i + 9}
              numChunks={leaves}
            />
          </div>
          <div className="d-flex flex-col">
            <h4> ) = </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i / 2 + 4}
              type=""
              empty={false}
              level="intermediate"
              // chunkIdx={i}
              numChunks={leaves}
            />
          </div>
        </div>
      );
    }
    for (let i = 0; i < leaves; i++) {
      _tree.push(
        <div
          key={`leaf nodes 1${i}`}
          className="d-flex flex-row justify-content-evenly"
        >
          <div className="d-flex flex-col">
            <h4>{`hash (`} </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 1}
              type=""
              empty={i >= numberOfValues}
              level="leaf"
              chunkIdx={i}
              numChunks={numberOfValues}
            />
          </div>
          <div className="d-flex flex-col">
            <h4> ) = </h4>
          </div>
          <div className="d-flex flex-col p-1">
            <OldNode
              idx={i + 1}
              type=""
              empty={false}
              level="branch"
              chunkIdx={i}
              numChunks={leaves}
            />
          </div>
        </div>
      );
    }
    
  } else {
    _tree = [];
  }

  if (list) {
    _tree.unshift(
      <div
        key={`merkle root`}
        className="d-flex flex-row justify-content-evenly"
      >
        <div className="d-flex flex-col">
          <h4>{`hash (`} </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            // idx={i + 1}
            type="R"
            empty={false}
            level="root"
            // chunkIdx={i}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            // idx={i + 1}
            type="LJ"
            empty={false}
            level="length"
            // chunkIdx={i}
            numChunks={leaves}
          />
        </div>
        <div className="d-flex flex-col">
          <h4> ) = </h4>
        </div>
        <div className="d-flex flex-col p-1">
          <OldNode
            // idx={i + 1}
            type="M"
            empty={false}
            level="merkle"
            // chunkIdx={i}
            numChunks={leaves}
          />
        </div>
      </div>
    );
  }

  return _tree;
}

export function numberOfLevels(leaves) {
  let number = 1;
  if (leaves == 1) {
    return number;
  } else {
    let accumulator = Math.log(leaves) / Math.log(2);
    number += accumulator;
    return number;
  }
}
