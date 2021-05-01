import React from "react";
import DisplayNode from "../visualizer/components/DisplayNode";
import MakeRandomTree from "../visualizer/components/MakeRandomTree";

export default function Visual() {
  const {
    treeValues,
    treeSerialized,
    treeLeaves,
    treeLevel2,
    treeLevel1,
    treeRoot,
  } = MakeRandomTree();

  const tree = MakeRandomTree();
  console.log(tree);

  return (
    <div className="row">
      <div className="col">
        <br />
        <div className="row p-3 justify-content-center">
          <DisplayNode id="0" nodevalue={"ROOT"} mousePressed={false} />
        </div>
        <div className="row p-3 g-1 justify-content-around">
          <div className="col">
            <div className="row row-cols-2 g-1 justify-content-around">
              {treeLevel1.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.index}
                    mousePressed={false}
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
              {treeLevel2.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.index}
                    mousePressed={false}
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
              {treeLeaves.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.index}
                    mousePressed={false}
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
              {treeLeaves.map((value) => {
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
              {treeSerialized.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.index}
                    mousePressed={false}
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
              {treeValues.map((value) => {
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
              {treeValues.map((value) => {
                return (
                  <DisplayNode
                    key={value.index}
                    id={value.index}
                    nodevalue={value.type}
                    mousePressed={false}
                  ></DisplayNode>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
