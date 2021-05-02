import useSWR from "swr";
import { useEffect, useState } from "react";
import DisplayNode from "../visualizer/components/DisplayNode";
import MakeRandomTree from "../visualizer/components/MakeRandomTree";
import NodeInfo from "../visualizer/components/NodeInfo";

export async function getStaticProps() {
  let {
    treeValues,
    treeSerialized,
    treeLeaves,
    treeLevel2,
    treeLevel1,
    treeRoot,
  } = MakeRandomTree();
  return {
    props: {
      treeValues,
      treeSerialized,
      treeLeaves,
      treeLevel2,
      treeLevel1,
      treeRoot,
    },
  };
}

export default function Visual({ ...props }) {
  const [Values, setValues] = useState(props.treeValues);
  const [Serialized, setSerialized] = useState(props.treeSerialized);
  const [Leaves, setLeaves] = useState(props.treeLeaves);
  const [Level2, setLevel2] = useState(props.treeLevel2);
  const [Level1, setLevel1] = useState(props.treeLevel1);
  const [Root, setRoot] = useState(props.treeRoot);

  useEffect(() => {
    console.log("yay");
  }, [Values, Serialized, Leaves, Level2, Level1, Root]);

  // setValues(props.treeValues);
  // setSerialized(props.treeSerialized);
  // setLeaves(props.treeLeaves);
  // setLevel2(props.treeLevel2);
  // setLevel1(props.treeLevel1);
  // setRoot(props.treeRoot);

  const changeData = () => {
    let newData = MakeRandomTree();
    let {
      treeValues,
      treeSerialized,
      treeLeaves,
      treeLevel2,
      treeLevel1,
      treeRoot,
    } = newData;
    console.log("changing data set");
    setValues(treeValues);
    setSerialized(treeSerialized);
    setLeaves(treeLeaves);
    setLevel2(treeLevel2);
    setLevel1(treeLevel1);
    setRoot(treeRoot);
  };

  return (
    <div className="row">
      <div className="col">
        <br />
        <div className="row p-3 justify-content-center">
          <DisplayNode
            id="0"
            nodevalue={Root[0].index}
            mousePressed={false}
            type="root"
          />
        </div>
        <div className="row p-3 g-1 justify-content-around">
          <div className="col">
            <div className="row row-cols-2 g-1 justify-content-around">
              {Level1.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.index}
                    mousePressed={false}
                    type="parent"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <br />

        <div className="row p-3 row-cols g-1 justify-content-around">
          <div className="col">
            <div className="row row-cols-4 g-1 justify-content-around">
              {Level2.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.index}
                    mousePressed={false}
                    type="parent"
                  ></DisplayNode>
                );
              })}
            </div>
          </div>
        </div>

        <br />

        <div className="row p-3 row-cols g-1 justify-content-around">
          <div className="col">
            <div className="row row-cols-auto g-1 justify-content-between ">
              {Leaves.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.index}
                    mousePressed={false}
                    type="hash"
                  ></DisplayNode>
                );
              })}
            </div>
          </div>
        </div>
        {/* <br />
        <div className="row p-3 row-2-cols g-1 justify-content-around">
          <div className="col">
            <div className="row row-cols-8 g-1 justify-content-between">
              {Leaves.map((value) => {
                return (
                  <DisplayNode
                    nodevalue={"Hash"}
                    mousePressed={false}
                  ></DisplayNode>
                );
              })}
            </div>
          </div>
        </div> */}
        <br />
        <div className="row p-3 row-cols g-1 justify-content-around">
          <div className="col">
            <div className="row row-cols-8 g-1 justify-content-between ">
              {Serialized.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.data}
                    mousePressed={false}
                    type="serial"
                  ></DisplayNode>
                );
              })}
            </div>
          </div>
        </div>
        <br />
        {/* <div className="row p-3 row-2-cols g-1 justify-content-around">
          <div className="col">
            <div className="row row-cols-auto g-1 justify-content-between">
              {Values.map((value) => {
                return (
                  <DisplayNode
                    nodevalue={"toBytes"}
                    mousePressed={false}
                  ></DisplayNode>
                );
              })}
            </div>
          </div>
        </div> */}
        <div className="row p-3 row-2-cols g-1 justify-content-around">
          <div className="col">
            <div className="row row-cols-auto g-1 justify-content-between">
              {Values.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.type}
                    mousePressed={false}
                    type="value"
                  ></DisplayNode>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <button onClick={changeData}>Random Data Set</button>
        </div>
      </div>
      <div className="col-2">
        <div className="row">Click on a node to see info</div>
        <NodeInfo />
      </div>
    </div>
  );
}
