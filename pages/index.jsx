import React from "react";
import Image from "next/image";
import Link from "next/link";
import TabsFront from "../src/components/TabsFront.tsx";
export default function Hello() {
  return (
    <div className="container py-0 px-0 border-top">
      <div className="row px-2">
        <div className="col">SSZ SimpleSerialize</div>
        <div className="col">
          <text className="fs-2 text-center">Welcome to SSZ.dev</text>
        </div>
        <div className="col">
          <div className="row justify-content-end">
            <text className="text-end">Serialization for Eth2 Data</text>
          </div>
        </div>
      </div>

      <br />

      <div>
        <h4 className="text-center">
          Technical Specs - Overview - SSZ Converter - Merkle Tree Visualizer -
          Implementation Guide
        </h4>
      </div>
      <br />

      <div className="row px-2 justify-content-center">
        <TabsFront />
      </div>
    </div>
  );
}
