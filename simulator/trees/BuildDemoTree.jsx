import OldNode from "../nodes/OldNode";
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";
export default function BuildDemoTree(props) {
  const [selected, setSelected] = useState(0);
  const [rootActivated, setRootActivated] = useState(false);
  const [selections, setSelections] = useState([]);
  const animate = props.animate;

  const NUMBER_OF_VALUES = 32;

  function rootActive() {
    return rootActivated;
  }

  function isSelected(node) {
    return selected === node;
  }

  function isInSelections(node) {
    return selections.includes(node);
  }

  let numberLeaves = 32;
  let totalNodes = 64;
  let numberEmpty = 0;

  function toggleSelected(node) {
    selected !== node ? setSelected(node) : setSelected(0);
  }

  function iterate() {
          setSelected(Math.floor((Math.random() * 64)+32))
    }

    function start() {
        setInterval(() => setSelected(Math.floor((Math.random() * 64)+32)), 5000)}
    

    // start();



  

  useEffect(() => {
let hashes = new Array(5)
    if (selected !== 0) {
      setRootActivated(true);
      let _selections = [];
      if (selected % 2 == 0) {
        hashes[0] = selected - 31;
      } else {
        hashes[0] = selected - 33;
      }
      for (let i=0; i<5; i++)
      if (Math.floor(hashes[i] / 2) % 2 == 0) {
        hashes[i+1] = Math.floor(hashes[i] / 2) + 1;
      } else {
        hashes[i+1] = Math.floor(hashes[i] / 2) - 1;
      }

      setSelections(hashes);
    } else {
      setRootActivated(false);
      setSelections([]);
    }
  }, [selected]);

  function rowOfNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    let letters = "SIMPLE_______SSZ_______SERIALIZE"
    for (let i = 64; i < 96; i++) {
      row.push(
        <div
          onClick={() => toggleSelected(`${i}`)}
          key={`${type}node${i}`}
          id={`${type}node${i}`}
          className={"col p-1"}
        >
          <OldNode
            idx={letters[i-64]}
            type={type}
            empty={empty}
            level="intro"
            chunkIdx={i - 64}
            numChunks={NUMBER_OF_VALUES}
            selected={isSelected(`${i}`)}
          />
        </div>
      );
    }
    return row;
  }

  function rowOfEmptyNodes(number, type, level, empty = true) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = totalNodes; i < totalNodes + number; i++) {
      row.push(
        <div
          onClick={() => toggleSelected(`${i + NUMBER_OF_VALUES}`)}
          key={`${type}node${i}`}
          id={`${type}node${i}`}
          className={"col p-1"}
        >
          <OldNode
            idx={i - totalNodes + NUMBER_OF_VALUES}
            type={type}
            empty={empty}
            level={level}
            chunkIdx={i - totalNodes + NUMBER_OF_VALUES}
            numChunks={NUMBER_OF_VALUES}
            selected={isSelected(`${i + NUMBER_OF_VALUES}`)}
          />
        </div>
      );
    }
    return row;
  }

  function rowOfHashNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 32; i < 64; i++) {
      row.push(
        <div key={`${type}node${i}`} id={`${type}node${i}`} className="col p-1">
          <OldNode
            idx={i}
            type={type}
            empty={empty}
            level={level}
            chunkIdx={i}
            numChunks={NUMBER_OF_VALUES}
            active={isInSelections(i)}
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
            level={level}
            chunkIdx={i}
            numChunks={NUMBER_OF_VALUES}
            active={isInSelections(i + 2 ** level)}
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
        <div id={`emptyvaluenode${i}`} className="col p-1">
          <OldNode idx={i + 1} type="EV" empty={true} />
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
          <OldNode type="R" level="root" active={rootActive()} />
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
        {rowOfNodes(number, "", "intro")}
        {rowOfEmptyNodes(empties, "", "leaf", true)}
      </div>
    );
    return tree;
  }

  let tree = build(32);
//   if (animate) {
//       start()
//   };


  return tree;
}
