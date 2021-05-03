import useSWR from "swr";
import { useEffect, useState } from "react";
import DisplayNode from "../visualizer/components/DisplayNode";
import MakeRandomTree from "../visualizer/components/MakeRandomTree";
import NodeInfo from "../visualizer/components/NodeInfo";
import MerkleMap from "../visualizer/components/MerkleMap";

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
  const [data, setData] = useState(MakeRandomTree());
  const [treemap, setTreemap] = useState(<MerkleMap>{{ props }}</MerkleMap>);

  console.log(`props: ${Object.values(props)}`);
  console.log(`data: ${data}`);
  console.log(`treemap: ${treemap}`);
  useEffect(() => {
    setData(MakeRandomTree());
    setTreemap(data);
  });

  function changeData() {
    let {
      treeValues,
      treeSerialized,
      treeLeaves,
      treeLevel2,
      treeLevel1,
      treeRoot,
    } = data;
    console.log("changing data set");
    setValues(treeValues);
    setSerialized(treeSerialized);
    setLeaves(treeLeaves);
    setLevel2(treeLevel2);
    setLevel1(treeLevel1);
    setRoot(treeRoot);
    setData(MakeRandomTree());
  }

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
          >
            {Root[0].data.slice(0, 7)}
          </DisplayNode>
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
                  >
                    {value.index}
                  </DisplayNode>
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
                  >
                    {value.index}
                  </DisplayNode>
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
                  >
                    {value.index}
                  </DisplayNode>
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
                    nodevalue={value.data.slice(0, 7)}
                    mousePressed={false}
                    type="serial"
                  >
                    {value.data}
                  </DisplayNode>
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
                  >
                    {`Value ${value.index}`}
                    <br />
                    {value.type}
                    <br />
                    {value.bigInt.slice(0, 7)}
                  </DisplayNode>
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
