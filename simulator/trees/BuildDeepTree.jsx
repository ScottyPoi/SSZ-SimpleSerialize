import OldNode from '../nodes/OldNode'
import multiProof from "./Proof";
import BuildMultiMerkle from './BuildMultiMerkle';
import SubTree from './SubTree';
import { useEffect, useState } from "react";
import styles from "../styles/NodeStyles.module.css";
export default function BuildDeepTree(props) {
  const [rootActivated, setRootActivated] = useState(false);
  const [active, setActive] = useState({ active: [16, 20] });
  const [activeProof, setActiveProof] = useState({ active: [5, 7, 9, 13] });
  const [treeNodes, setTreeNodes] = useState({
    16: { active: true },
    17: { active: false },
    18: { active: false },
    19: { active: false },
    20: { active: true },
    21: { active: false },
    22: { active: false },
    23: { active: false },
  });
  const [subTreeActive, setSubTreeActive] = useState(true)

  useEffect(() => {
    let a = active.active;
    let b = treeNodes;
    !subTreeActive ? a = a.filter((n) => n != 20) : a.push(20);
    setActive({ active: a });
    !subTreeActive ? b[20] = {active: false} : b[20] = {active: true};
    setTreeNodes(b);  }, [subTreeActive])


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
  proof = proof.filter((n) => !isNaN(n) & n != 1)
  setActiveProof({active: proof})
})

useEffect(() => {
    let a = active.active;
    a = a.filter((n) => !isNaN(n) & n != 1)
    setActiveProof({active: a})
}, [active])



  function rowOfNodes(number, type, level, empty = false) {
    //   let leaves = getNextPowerOfTwo(number);
    let row = [];
    for (let i = 8; i < 16; i++) {
        i != 12 ?
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
      ) :       row.push(
        <div
          className={"col p-1"}
        >
<div className='flexbox border-4 border' style={{height: '100%', paddingTop: '100%'}}>
    
</div>
        </div>
      )
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
    tree.push(
      <div
        key={"subtree"}
        id={"subtree"}
        className="row justify-content-around"
      >
          <div className='col-2'>

          </div>
          <div className='col-10'>
              <SubTree NUMBER_OF_VALUES={8} origin={12} active={setSubTreeActive} leaves={active} proof={activeProof} />
          </div>
      </div>
    );
    return tree;
  }

  function getTree() {
    return tree;
  }

  return (
    <div className="container pt-4">
        <div className='row'>
            <h3 className='text-center'>Merkle Tree Leaves can be a Root of a nested Subtree.</h3>
        <p className="text-center">select combinations of (RED) leaves to show Proof structure</p>
        </div>
      <div className="row">{getTree()}</div>
      <div className="row">
      </div>
    </div>
  );
}
