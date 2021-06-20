import React from "react";
import Image from "next/image";
import Link from "next/link";
import BuildVectorTree from "../simulator/trees/BuildVectorTree";
import BuildDemoTree from "../simulator/trees/BuildDemoTree";
export default function Simulator() {

  let v = 32



  return (
    <div className="container p-0">
      
      <div className="d-flex flex-row justify-content-center">
        <div className="d-flex flex-col">
          <img
            src="/developers-eth-blocks.png"
            alt="ethereum building blocks"
            height={200}
            width={300}
          />
        </div>
      </div>
      <br />
      <div className="row justify-content-center">
        <div className="col">
          <h1><div className="row justify-content-center">SSZ Visualizer</div></h1>

          <h3><div className="row justify-content-center">
            Explore SSZ Types and Merkle Trees
          </div></h3>
          <div className="row p-3 justify-content-center">
            <button
              className={`btn btn-dark col-6`}
              style={{ border: "solid white" }}
            >
              <h2><Link href='./visualizer'>START</Link></h2>
            </button>
          </div>
        </div>
      </div>
      <div className='row p-0'>
        <BuildDemoTree NUMBER_OF_VALUES={v} animate={true}/><br/>
        <h5 className='text-center'>*click to see merkle-proofs!*</h5>
      </div>
    </div>
  );
}
