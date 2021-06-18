import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Simulator() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <img
            src="/developers-eth-blocks.png"
            alt="ethereum building blocks"
            height={300}
            width={500}
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
          <div className="row justify-content-center">
            <button
              className={`btn btn-dark col-6`}
              style={{ border: "solid black" }}
            >
              <h2>START</h2>
            </button>
          </div>
{/* <h5>          <div className="row justify-content-center">
            Learn more about SSZ SimpleSerialize at{" "}
          </div></h5>
          <div className="row justify-content-center">
            <div className='col-3 text-center'><h3><a href="https://www.ssz.dev">www.ssz.dev</a></h3></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
