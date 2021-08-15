import Node from "../nodes/Node";
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";

export default function BuildtListTree(props) {
  const [selected, setSelected] = useState(0);
  const [rootActivated, setRootActivated] = useState(false);
  const [selections, setSelections] = useState([]);

  const chunks = props.chunks;
  const length = props.length;
  const valuesPerChunk = props.valuesPerChunk;
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
    for (let i = totalNodes; i < totalNodes + number; i++) {
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
              type={type}
              empty={false}
              level={level}
              chunkIdx={i - totalNodes}
              numChunks={activeChunk}
              limit={chunks}
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
    for (let i = totalNodes; i < totalNodes + number; i++) {
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
              type={type}
              empty={true}
              level={level}
              chunkIdx={i + fulls - totalNodes}
              numChunks={activeChunk}
              limit={chunks}
              selected={isSelected(`${i + fulls - totalNodes}`)}
            />
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
                    <div className="row justify-content-center">

          <Node
            idx={"hash node"}
            type={"hash node"}
            empty={empty}
            level={"branch"}
            chunkIdx={i}
            numChunks={activeChunk}
            limit={chunks}
            active={isInSelections(i + number)}
          />
        </div>
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
                    <div className="row justify-content-center">

          <Node
            idx={""}
            type="merkle tree node"
            empty={empty}
            level={"intermediate"}
            chunkIdx={i}
            numChunks={activeChunk}
            limit={chunks}
            active={isInSelections(i + 2 ** level)}
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
        className="row row-cols-5 justify-content-evenly"
      >
        <div className="col p-1">
        </div>
        <div className="col p-1">
        </div>
        <div className="col p-1">
        </div>
        <div className="col p-1">
          <p></p>
          <Node
            type={`hash_tree_root of List Object`}
            idx=""
            level="merkle"
            active={rootActive()}
          />
        </div>
        <div className='col'></div>
      </div>
    );
    tree.push(
      <div
        key={`hashtreeroot`}
        id={`hashtreeroot`}
        className="row row-cols-8 justify-content-between"
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
          <Node
            type="hash_tree_root of values"
            idx=""
            level="root"
            active={rootActive()}
          />
        </div>
        <div className="col p-1">
          <div
            style={{ display: "inline-block", width: "25px", height: "auto" }}
          />
        </div>
        <div className="col p-1">
          <Node
            idx="LIMIT"
            type={`LIMIT: ${props.limit}`}
            level="length"
            active={rootActive()}
          />
        </div>
      </div>
    );
    for (let i = 1; i < levels - 1; i++) {
      tree.push(
        <div
          key={`treelevel:${i}`}
          id={`treelevel:${i}`}
          className="row row-cols-4 justify-content-around"
        >
          {rowOfTreeNodes(2 ** i, ``, i)}
        </div>
      );
    }
    if (number > 1) {
      tree.push(
        <div
          key={"hash"}
          id={"hash"}
          className="row row-cols-8 justify-content-around"
        >
          {rowOfHashNodes(number + empties, "", "branch")}
          {/* {rowOfNodes(empties, "EH", 'branch', true)} */}
        </div>
      );
    }
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
