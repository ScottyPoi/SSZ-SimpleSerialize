import Node from "../nodes/Node";
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";

export default function BuildContainerTree(props) {
  const [selected, setSelected] = useState(0);
  const [rootActivated, setRootActivated] = useState(false);
  const [selections, setSelections] = useState([]);

  const chunks = props.chunks;
  const length = props.length;
  const valuesPerChunk = 1
  const activeChunk = Math.floor(length / valuesPerChunk + 1);

  let numberLeaves = getNextPowerOfTwo(chunks);
  let totalNodes = getNextPowerOfTwo(numberLeaves + 1);
  let numberEmpty = numberLeaves - chunks;
  let tree = build(chunks);

  function toggleSelected(node) {
    selected !== node ? setSelected(node) : setSelected(0);
  }

  function rootActive() {
    return rootActivated;
  }

  function isSelected(node) {
    return selected === node;
  }

  function isInSelections(node) {
    return selections.includes(node);
  }

  useEffect(() => {
    if (selected !== 0) {
      setRootActivated(true);
      let _selections =
        selected == 4
          ? [3]
          : selected == 5
          ? [2]
          : selected == 8
          ? [5, 3]
          : selected == 9
          ? [4, 3]
          : selected == 10
          ? [7, 2]
          : selected == 11
          ? [6, 2]
          : selected == 16
          ? [9, 5, 3]
          : selected == 17
          ? [8, 5, 3]
          : selected == 18
          ? [11, 4, 3]
          : selected == 19
          ? [10, 4, 3]
          : selected == 20
          ? [13, 7, 2]
          : selected == 21
          ? [12, 7, 2]
          : selected == 22
          ? [15, 6, 2]
          : selected == 23
          ? [14, 6, 2]
          : [];
      setSelections(_selections);
    } else {
      setRootActivated(false);
      setSelections([]);
    }
  }, [selected]);

  function rowOfNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div
          onClick={() => toggleSelected(`${i}`)}
          key={`${type}node${i}`}
          id={`${type}node${i}`}
          className="col p-2"
        >
          <div className="row justify-content-center">
            <Node
              idx={""}
              type={"root"}
              empty={false}
              level={level}
              chunkIdx={i}
              numChunks={activeChunk}
              limit={length}
              selected={isSelected(`${i}`)}
            />
          </div>
        </div>
      );
    }
    return row;
  }

  function rowOfEmptyNodes(number, type, level, empty = false, fulls) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 0; i < number; i++) {
      row.push(
        <div
          onClick={() => toggleSelected(`${i}`)}
          key={`${type}node${i}`}
          id={`${type}node${i}`}
          className="col p-2"
        >
          <div className="row justify-content-center">
            <Node
              idx={"empty"}
              type={"empty"}
              empty={true}
              level={level}
              chunkIdx={0}
              numChunks={activeChunk}
              limit={length}
              selected={isSelected(`${i + fulls - totalNodes}`)}
            />
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





  function build(number) {
    let tree = [];
    let leaves = getNextPowerOfTwo(number);
    let empties = leaves - number;
    
    tree.push(
      <div
        key={"leaves"}
        id={"leaves"}
        className="row row-cols-8"
      >
        {rowOfNodes(number, "chunk", "leaf")}
        {rowOfEmptyNodes(empties, "empty", "leaf", true, number)}
      </div>
    );
    return tree;
  }

  function getTree() {
    return tree;
  }

  return getTree();
}
