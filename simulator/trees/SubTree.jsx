import OldNode from "../nodes/OldNode";
import multiProof from "./Proof";
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";
export default function SubTree(props) {
  const [selected, setSelected] = useState(0);
  const [rootActivated, setRootActivated] = useState(true);
  const [selections, setSelections] = useState([]);
  const [active, setActive] = useState({ active: [] });
  const [activeProof, setActiveProof] = useState({ active: [] });
  const [treeNodes, setTreeNodes] = useState({
    16: { active: false },
    17: { active: false },
    18: { active: false },
    19: { active: false },
    20: { active: false },
    21: { active: false },
    22: { active: false },
    23: { active: false },
  });
  const [allNodes, setAllNodes] = useState([]);

  useEffect(() => {
    let all = [];
    let leaves = props.leaves.active
      .filter((n) => n != 20)
      .map((leaf) => {
        return leaf - 8;
      });
    let leafs = active.active.map((leaf) => {
      return leaf + 6;
    });
    let proofs = props.proof.active.map((n) => {
      return n;
    });
    let proofs2 = activeProof.active.map((n) => {
      return n + 14;
    });

    leaves.forEach((leaf) => all.push(leaf));
    leafs.forEach((leaf) => all.push(leaf));
    proofs.forEach((leaf) => all.push(leaf));
    proofs2.forEach((leaf) => all.push(leaf));
    setAllNodes(all.sort((a, b) => a - b));
  });

  const NUMBER_OF_VALUES = props.NUMBER_OF_VALUES;

  useEffect(() => {
    toggleSelected(23);
  }, []);

  useEffect(() => {
    rootActivated ? props.active(true) : props.active(false);
  }, [rootActivated]);

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
    isSelected(node) ? (a = a.filter((n) => n != node)) : a.push(node);
    setActive({ active: a });
    isSelected(node)
      ? (b[node] = { active: false })
      : (b[node] = { active: true });
    setTreeNodes(b);
  }

  useEffect(() => {
    let proof = multiProof(treeNodes);
    proof = proof.filter((n) => !isNaN(n) & (n != 1));
    let noDup = [];
    proof.forEach((n) => !noDup.includes(n) && noDup.push(n));
    setActiveProof({ active: noDup });
    active.active.length > 0 ? setRootActivated(true) : setRootActivated(false);
  }, [active]);

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
            idx={i + 14}
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
            idx={i + numberLeaves + 14}
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
            idx={i + 2 ** level + 14}
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
          <OldNode type={props.origin} level="root" active={rootActivated} />
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

  function makeProofString(nodes) {
    let pairs = nodes
      .map((node) => {
        return (
          nodes.includes(node ^ 1) & (node % 2 == 0) &&
          `H(${node}, ${node ^ 1})`
        );
      })
      .filter((n) => n != 0);

    let lones = nodes
      .map((node) => {
        return !nodes.includes(node ^ 1) && node;
      })
      .filter((n) => n != 0);

    pairs.push(lones);
    return pairs.toString();
  }

  return (
    <div className="container">
      <div className="row">{getTree()}</div>
      <div className="row">
        <p className="text-center">click on leaf to show merkle proof</p>
      </div>

      <>
        <div className="row">
          <h4 className="text-center">
            leaves:{" "}
            {props.leaves.active
              .filter((n) => n != 20)
              .map((leaf) => {
                return leaf - 8;
              })
              .toString()}
            ,{" "}
            {active.active
              .map((leaf) => {
                return leaf + 6;
              })
              .toString()}
          </h4>
        </div>
        <div className="row">
          <h4 className="text-center">
            witness data:{" "}
            {props.proof.active
              .reverse()
              .map((n) => {
                return n;
              })
              .toString()}
            ,
            {activeProof.active
              .map((n) => {
                return n + 14;
              })
              .reverse()
              .toString()}
          </h4>
        </div>
        <div className="row">
          <h4 className="text-center">proof: {allNodes.toString()} </h4>

          <br />
        </div>
      </>
    </div>
  );
}
