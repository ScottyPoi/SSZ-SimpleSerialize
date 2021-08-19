import BooleanDemo from "./BooleanDemo";
import BuildTree from "../../simulator/trees/BuildTree";
import BuildContainerTree from "../../simulator/trees/BuildVectorTree";
import { useState } from "react";
import { useEffect } from "react";
import DemoListControls from "../../simulator/controls/DemoListControls";
import MerkleVectorControls from "../../simulator/controls/MerkleVectorControls";
import DemoVectorControls from "../../simulator/controls/DemoVectorControls";
import UintBox from "./UintBox";
import MerkleListControls from "../../simulator/controls/MerkleListControls";
import MerkleContainerControls from "../../simulator/controls/MerkleContainerControls";



export default function TreeTypes(props) {


  return (
    <div>
      <div className="row pt-3 text-center border-bottom">
        <h2 className="text-center">Interactive Merkle Trees: </h2>
      </div>
      <div className="row pt-3 text-center">
        <h3 className="text-center">Vector</h3>
      </div>
      <div className="row py-4 border-bottom">
        <MerkleVectorControls />
      </div>
      <div className="row pt-3 text-center">
        <h3 className="text-center">List</h3>
      </div>
      <div className="border-bottom row py-4">
        <MerkleListControls />
      </div>
      <div className="row pt-3 text-center">
        <h4 className="text-center">CONTAINERS</h4>
      </div>
      <div className="border-bottom row py-4">
        <MerkleContainerControls />
      </div>
    </div>
  );
}
