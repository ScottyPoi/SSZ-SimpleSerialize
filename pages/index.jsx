import React from "react";
import Image from "next/image";
import Link from "next/link";
import TabsFront from "../src/components/TabsFront.tsx";
import HomeCards from "../components/HomeCards";
export default function Hello() {
  return (
    <div className="container py-0 px-0 border-top">
      <div className="row px-2">
        <div className="col">SSZ SimpleSerialize</div>
        <div className="col text-center">
          <h1>SSZ.DEV</h1>
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
          Technical Specs and Resources for SSZ - SimpleSerialize
        </h4>
      </div>
      <br />
      <HomeCards />
    </div>
  );
}
