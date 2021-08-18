import OldNode from '../nodes/OldNode'
import multiProof from "./Proof";
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";
export default function BuildMultiMerkle(props) {
  const [selected, setSelected] = useState(0);
  const [rootActivated, setRootActivated] = useState(false);
  const [selections, setSelections] = useState([]);
  const [active, setActive] = useState({ active: [16] });
  const [activeProof, setActiveProof] = useState({ active: [9, 13, 15, 5] });
  const [treeNodes, setTreeNodes] = useState({
    16: { active: true },
    17: { active: false },
    18: { active: false },
    19: { active: false },
    20: { active: true },
    21: { active: false },
    22: { active: true },
    23: { active: false },
  });

  const NUMBER_OF_VALUES = props.NUMBER_OF_VALUES;

  function rootActive() {
    return rootActivated;
  }

  function isSelected(node) {
    return treeNodes[node].active;
  }

  function isInSelections(node) {
    return selected == node;
  }

  let numberLeaves = getNextPowerOfTwo(NUMBER_OF_VALUES);
  let totalNodes = getNextPowerOfTwo(numberLeaves + 1);
  let numberEmpty = numberLeaves - NUMBER_OF_VALUES;
  let tree = build(NUMBER_OF_VALUES);

  function toggleSelected(node) {
    let a = active.active;
    let b = treeNodes;
    isSelected(node) ? a = a.filter((n) => n != node) : a.push(node);
    setActive({ active: a });
    isSelected(node) ? b[node] = {active: false} : b[node] = {active: true};
    setTreeNodes(b);
  }

useEffect(() => {
  let proof = multiProof(treeNodes)
  setActiveProof({active: proof})
})

  useEffect(() => {
    if (selected !== 0) {
      let a = Array.from(active.active);
      let i = a.indexOf(selected);
      i < 0 ? a.push(selected) : a.splice(i, 1);
      setActive({ active: a });
      setRootActivated(true);
    } else {
      setRootActivated(false);
      setSelections(0);
    }
  }, [selected]);



  function rowOfNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 8; i < 16; i++) {
      row.push(
        <div
          onClick={() => toggleSelected(i + 8)}
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
            selected={isSelected(i + 8)}
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
            active={activeProof.active.includes(i + number)}
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
            active={activeProof.active.includes(i + 2 ** level)}
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
      </div>
    );
    return tree;
  }

  function getTree() {
    return tree;
  }

  return (
    <div className="container">
        <p className="text-center">select combinations of (RED) leaves to show Merkle Proof</p>
      <div className="row">{getTree()}</div>
      <div className="row">
      </div>

      <>
        <div className="row">
          <h4 className="text-center">
            leaves: {active.active.toString()}
          </h4>
        </div>
        <div className="row">
          <h4 className="text-center">witness data: {activeProof.active.reverse().toString()}</h4>
        </div>
        <div className="row">
          <h4 className="text-center">
            proof: H(H({selections[1]}, H({selections[0]},{selected - 8})),
            {selections[2]}) == R
          </h4>
          <br/>
        </div>
      </>
    </div>
  );
}
