import { CompositeType, toHexString } from "@chainsafe/ssz";
import { useState } from "react";

interface TreeProps<T> {
  type: CompositeType<T>;
  value: T
}

export function bitLength(n: number): number {
  const bitstring = n.toString(2);
  if (bitstring === "0") {
    return 0;
  }
  return bitstring.length;
}

/** @ignore */
export function nextPowerOf2(n: number): number {
  return n <= 0 ? 1 : Math.pow(2, bitLength(n - 1));
}

export default function Tree<T>(props: TreeProps<T>) {
  const [leaf, setLeaf] = useState(1);
  const _type: CompositeType<T> = props.type
  // const data: T = props.type.defaultValue()
  const value: T = props.value

  const proofNode = 0
  const serialized = _type.serialize(value);
  const hashroot = toHexString(_type.hashTreeRoot(value));
  const deserialized = _type.deserialize(serialized);
  const tree = _type.struct_convertToTree(deserialized);
  const values: number[] = Array.from(
    _type.tree_iterateValues(tree)
  ) as number[];
  let array = new Array(32).fill(0);
  function getProofNodes(leaf: number) {
    let nodes = [];
    if (leaf % 2 === 0) {
      nodes.push(leaf + 1);
      (leaf / 2) % 2 === 0
        ? nodes.push(leaf / 2 + 1)
        : nodes.push(leaf / 2 - 1);
    } else {
      nodes.push(leaf - 1);
      ((leaf - 1) / 2) % 2 === 0
        ? nodes.push((leaf - 1) / 2 + 1)
        : nodes.push((leaf - 1) / 2 - 1);
    }
    return nodes;
  }

  function style(node: number) {
    const style = {
      fontSize: "0.7rem",
      paddingBottom: "1%",
      border: `solid ${
        getProofNodes(proofNode).includes(node)
          ? "red"
          : proofNode === node
          ? "blue"
          : "black"
      }`,
    };
    return style;
  }

  return (
    <div className="container p-0 w-100" style={{ paddingBlock: "100%" }}>
      <div className="row justify-content-center">
        <div
          className="col-4 border text-break"
          style={{ paddingBottom: "1%" }}
        >
          <h3 className="text-center">
            Root <br />
          </h3>
          <p style={{ fontSize: "0.7rem" }} className="text-start">
            {hashroot}
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-3 text-break" style={style(2)}>
          2 -- {toHexString(tree.getSubtree(BigInt(2)).root)}
        </div>
        <div className="col-3 border"></div>
        <div className="col-3  text-break" style={style(3)}>
          3 -- {toHexString(tree.getSubtree(BigInt(3)).root)}
        </div>
      </div>
      <div className="row justify-content-center">
        
        {_type.tree_getLeafGindices(tree).map((_leaf, idx) => {
          return (<>
            {idx !== 0 &&         <div className="col-1 border"></div>}
                    <div className="col-2  text-break" style={style(Number(leaf))}>
        <text>
            {_leaf.toString()} -- 
            {Array.from(
              toHexString(_type.tree_getRootAtChunkIndex(tree, 1))
            ).map((v, i) => {
              return (
                <span
                key={i}
                  style={{ fontWeight: leaf === Math.floor(i/2) + 32 * (idx)  ? "bold" : "normal" }}
                >
                  {v}
                </span>
                              );
            })}
          </text>          
          <div className="row border">
            Proof Nodes: [{getProofNodes(Number(_leaf)).toString()}]
          </div>
        </div>
          </>)
        })}
        {}
        {new Array((nextPowerOf2(_type.tree_getLeafGindices(tree).length)) - (_type.tree_getLeafGindices(tree).length)).fill(0).map((v,i) => {
          return (<>
          <div className="col-1 border"></div>
                    <div className="col-2  text-break" style={style(Number(leaf))}>
        <text>
            {Number(_type.tree_getLeafGindices(tree).pop()) + i + 1} -- 
            ZeroNode<br/>
            {toHexString(new Uint8Array(32).fill(0))}
          </text>          
        </div>
          </>)
        })}

        {/* <div className="col-1 border"></div>

        <div className="col-2  text-break" style={style(6)}>
        <text>
            6 -- 
            {Array.from(
              toHexString(_type.tree_getRootAtChunkIndex(tree, 2))
            ).map((v, i) => {
              return (
                <span
                key={i}
                  style={{ fontWeight: leaf === Math.floor(i/2) + 64 ? "bold" : "normal" }}
                >
                  {v}
                </span>
              );
            })}
          </text>          
          <div className="row border">
            Proof Nodes: [{getProofNodes(6).toString()}]
          </div>
        </div>
        <div className="col-1 border"></div>
        <div className="col-2 text-break" style={style(7)}>
          7* --{" "}
          {toHexString(_type.tree_getRootAtChunkIndex(tree, 3))}
          <div className="row border">
            Proof Nodes: [{getProofNodes(7).toString()}]
          </div>
        </div> */}
      </div>
      <div className="row">
        <div className="col-3">
          <div
            className="d-flex flex-row justify-content-center"
            style={{ paddingBottom: "0%" }}
          >
            {array.map((i, idx) => {
              return (
                <div
                  className="d-flex flex-column m-0 p-0"
                  style={{ paddingBottom: "20%" }}
                  key={idx + 1}
                  onMouseOver={() => setLeaf(idx + 1)}
                >
                  <div
                    style={{
                      // flex: "50%",
                      margin: "1px",
                      border: "solid black 1px",
                      paddingBottom: `${leaf === idx + 1 ? "1250%" : "1000%"}`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <div
            className="d-flex flex-row justify-content-center"
            style={{ paddingBottom: "0%" }}
          >
            {array.map((i, idx) => {
              return (
                <div
                  className="d-flex flex-column m-0 p-0"
                  style={{ paddingBottom: "20%" }}
                  key={33 + idx}
                  onMouseOver={() => setLeaf(idx + 33)}
                >
                  <div
                    style={{
                      // flex: "50%",
                      margin: "1px",
                      border: "solid black 1px",
                      paddingBottom: `${leaf === 33 + idx ? "1250%" : "1000%"}`,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <div
            className="d-flex flex-row justify-content-center"
            style={{ paddingBottom: "0%" }}
          >
            {array.map((i, idx) => {
              return (
                <div
                  className="d-flex flex-column m-0 p-0"
                  style={{ paddingBottom: "20%" }}
                  key={66 + idx}
                  onMouseOver={() => setLeaf(idx + 65)}
                >
                  <div
                    style={{
                      // flex: "50%",
                      margin: "1px",
                      border: "solid black 1px",
                      paddingBottom: leaf === 65 + idx ? "1250%" : "1000%",
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-3">--------------</div>
      </div>
      {/* <div className="row">
        <div className="col">

        <svg viewBox="0 0 100 10">
          <line
            x1={((70 * (leaf / 96))) + (23*Math.floor(leaf/96)) }
            y1="0"
            x2={37}
            y2="10"
            stroke="black"
            strokeWidth={`0.1px`}
            />
        </svg>
            </div>
      </div> */}
      <div className="row">
        <div className="col-3">
          {leaf < 33 && (
            <svg viewBox="0 0 100 10">
              <line
                x1={`${5 + 90 * (leaf / 32)}`}
                y1="0"
                x2={"50"}
                y2="10"
                stroke="black"
                strokeWidth={`1px`}
              />
            </svg>
          )}
        </div>
        <div className="col-3">
          {leaf < 65 && leaf > 32 && (
            <svg viewBox="0 0 100 10">
              <line
                x1={`${5 + 90 * ((leaf - 32) / 32)}`}
                y1="0"
                x2={"50"}
                y2="10"
                stroke="black"
                strokeWidth={`1px`}
              />
            </svg>
          )}
        </div>
        <div className="col-3">
          {leaf > 64 && (
            <svg viewBox="0 0 100 10">
              <line
                x1={`${5 + 90 * ((leaf - 64) / 32)}`}
                y1="0"
                x2={"50"}
                y2="10"
                stroke="black"
                strokeWidth={`1px`}
              />
            </svg>
          )}
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div
          className="col-1 border"
          style={{
            paddingBottom: "2%",
            // , marginLeft: `${90 * (leaf / 96)}%`
          }}
        >
          {leaf < 33 && (
            <div className="row p-0">
              <span className='px-0 text-center' style={{fontSize: '0.5rem'}}>Value Idx </span>
              <span className='px-0 text-center' style={{fontSize: '0.7rem'}}>{leaf}</span>
              {/* {values[leaf - 1]}
              <br />
              {u8a[leaf - 1].toString(16)} */}
            </div>
          )}
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>
        <div
          className="col-1 border"
          style={{
            paddingBottom: "2%",
            // , marginLeft: `${90 * (leaf / 96)}%`
          }}
        >
          {leaf > 32 && leaf < 65 && (
            <div className='row p-0'>
              <span className='px-0 text-center' style={{fontSize: '0.5rem'}}>Value Idx </span>
              <span className='px-0 text-center' style={{fontSize: '0.7rem'}}>{leaf}</span>               {/* {values[leaf - 1]}
              <br />
              {u8a[leaf - 1].toString(16)} */}
            </div>
          )}
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>
        <div
          className="col-1 border"
          style={{
            paddingBottom: "2%",
            // , marginLeft: `${90 * (leaf / 96)}%`
          }}
        >
          {leaf > 64 && (
                       <div className='row p-0'>
                       <span className='px-0 text-center' style={{fontSize: '0.5rem'}}>Value Idx </span>
                       <span className='px-0 text-center' style={{fontSize: '0.7rem'}}>{leaf}</span>               {/* {values[leaf - 1]}
                       <br />
                       {u8a[leaf - 1].toString(16)} */}
                     </div>

          )}
        </div>
        <div className="col-1"></div>
        <div className="col-1"></div>
        <div className="col-1"></div>
        <div className="col-1"></div>
      </div>
      <div className="row">
        <div className="col text-break">
          <text>
            {values.slice(0, 32).map((v, idx) => {
              return (
                <span
                key={idx}
                  onMouseOver={() => setLeaf(idx + 1)}
                  style={{ fontWeight: leaf === idx + 1 ? "bold" : "normal", fontSize: leaf === idx + 1 ? "1rem" : "0.7rem" }}
                >
                  {v},
                </span>
              );
            })}
          </text>
        </div>
        <div className="col text-break">
          <text>
            {values.slice(32, 64).map((v, idx) => {
              return (
                <span
                key={idx}
                  onMouseOver={() => setLeaf(idx + 33)}
                  style={{ fontWeight: leaf === idx + 33 ? "bold" : "normal", fontSize: leaf === idx + 33 ? "1rem" : "0.7rem" }}
                >
                  {v},
                </span>
              );
            })}
          </text>
        </div>
        <div className="col text-break">
          <text>
            {values.slice(64).map((v, idx) => {
              return (
                <span
                key={idx}
                  onMouseOver={() => setLeaf(idx + 65)}
                  style={{ fontWeight: leaf === idx + 65 ? "bold" : "normal", fontSize: leaf === idx + 65 ? "1rem" : "0.7rem" }}
                >
                  {v},
                </span>
              );
            })}
          </text>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
}
