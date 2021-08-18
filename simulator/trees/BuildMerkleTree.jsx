import OldNode from "../nodes/OldNode";
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";
export default function BuildMerkleTree(props) {
  const [selected, setSelected] = useState(0);
  const [rootActivated, setRootActivated] = useState(false);
  const [selections, setSelections] = useState([]);

  const NUMBER_OF_VALUES = props.NUMBER_OF_VALUES;

  function rootActive() {
    return rootActivated;
  }

  function isSelected(node) {
    return selected === node;
  }

  function isInSelections(node) {
    return selections.includes(node);
  }

  let numberLeaves = getNextPowerOfTwo(NUMBER_OF_VALUES);
  let totalNodes = getNextPowerOfTwo(numberLeaves + 1);
  let numberEmpty = numberLeaves - NUMBER_OF_VALUES;
  let tree = build(NUMBER_OF_VALUES);

  function toggleSelected(node) {
    selected !== node ? setSelected(node) : setSelected(0);
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
          className={"col p-1"}
        >
          <OldNode
            idx={i - NUMBER_OF_VALUES}
            type={type}
            empty={empty}
            level={level}
            chunkIdx={i - totalNodes}
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
            empty={true}
            level={"leaf"}
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
            active={isInSelections(i + number)}
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
        {rowOfNodes(number, "", "leaf")}
        {rowOfEmptyNodes(empties, "", "leaf", true)}
      </div>
    );
    return tree;
  }

  function getTree() {
    return tree;
  }

  return (
    <div className="container">
      <div className="row">
        <p className="text-center">Select leaf (BOTTOM ROW) to show merkle proof</p>
      </div>
      <div className="row">{getTree()}</div>
      {selected != 0 && (
        <>
          <div className="row">
            <h4 className="text-center">
              leaf: {selected != 0 && selected - 8}
            </h4>
          </div>
          <div className="row">
            <h4 className="text-center">
              witness data: {selections.toString()}
            </h4>
          </div>
          <div className="row">
            <h4 className="text-center">
              proof: H(H({selections[1]}, H({selections[0]},{selected - 8})),
              {selections[2]}) == R
            </h4>
          </div>
        </>
      )}
    </div>
  );
}
