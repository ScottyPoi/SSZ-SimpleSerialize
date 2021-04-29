import React from "react";
import GridNode from "../visualizer/components/GridNode";
import RandomDataSet from "../visualizer/components/RandomDataSet";

export default function Visual({ children }) {
  const { Values, Serialized, Leaves, level2, level1, root } = RandomDataSet();

  return (
    <div className="container ">
      <br />
      <div className="row p-3 justify-content-center">
        <GridNode nodevalue={root[0]} mousePressed={false} />
      </div>
      <div className="row p-3 row-cols-auto g-1 justify-content-around ">
        {level1.map((value) => {
          return (
            <div className="col">
              <GridNode nodevalue={value} mousePressed={false} />
            </div>
          );
        })}
      </div>
      <div className="row p-3 row-cols-auto g-1 justify-content-around">
        {level2.map((value) => {
          return (
            <div className="col">
              <GridNode nodevalue={value} mousePressed={false} />
            </div>
          );
        })}
      </div>
      <div className="row p-3 row-cols g-1 justify-content-around">
        <div className="col">
          <div className="container">
            <div className="row row-cols-auto g-1 justify-content-between ">
              {Leaves.map((value) => {
                return (
                  <GridNode
                    className="col"
                    nodevalue={value}
                    mousePressed={false}
                  ></GridNode>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row p-3 row-2-cols g-1 justify-content-around">
        <div className="col">
          <div className="container">
            <div className="row row-cols-auto g-1 justify-content-between">
              {Values.map((value) => {
                return (
                  <GridNode
                    className="col"
                    nodevalue={"Hash"}
                    mousePressed={false}
                  ></GridNode>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row p-3 row-cols g-1 justify-content-around">
        <div className="col">
          <div className="container">
            <div className="row row-cols-auto g-1 justify-content-between ">
              {Serialized.map((value) => {
                return (
                  <GridNode
                    className="col"
                    nodevalue={value}
                    mousePressed={false}
                  ></GridNode>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row p-3 row-2-cols g-1 justify-content-around">
        <div className="col">
          <div className="container">
            <div className="row row-cols-auto g-1 justify-content-between">
              {Values.map((value) => {
                return (
                  <GridNode
                    className="col"
                    nodevalue={"toBytes"}
                    mousePressed={false}
                  ></GridNode>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row p-3 row-2-cols g-1 justify-content-around">
        <div className="col">
          <div className="container">
            <div className="row row-cols-auto g-1 justify-content-between">
              {Values.map((value) => {
                return (
                  <GridNode
                    className="col"
                    nodevalue={value.type}
                    mousePressed={false}
                  ></GridNode>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
