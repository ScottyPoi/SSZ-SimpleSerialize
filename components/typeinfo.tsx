import { useState } from "react";
import ShowFunction from "./ShowFunction";
import MapMethods from "./MapMethods";
import * as ssz from "@chainsafe/ssz";
import * as pmt from "@chainsafe/persistent-merkle-tree";
import LodeStarTypes from "./Lodes";
import LodesMenu from "./LodesMenu";
import { CompositeValue } from "@chainsafe/ssz";
import { ForkName, typeNames, forks } from "../sszsrc/util/types";
import { metaProperty } from "@babel/types";
import { forEach } from "core-js/core/array";

export default function Typeinfo() {
  const [display, setDisplay] = useState("Type");
  const [mod, setMod] = useState(ssz);
  const [lodesReturns, setLodesReturns] = useState()


  const types = forks["altair"];
const names = typeNames(types);

  function handleChange(display, Mod) {
    setDisplay(display);
    setMod(Mod);
    display.substr(0,2) == "is" ? setLodesReturns(lodesTypes(display)) : setLodesReturns(null)

  }
  
  function lodesTypes(func) {
    return names.map((name) => {
      const current = forks["altair"][name]
      return ssz[func](current) && (
        <div className='row'>
          {`${func}(${name}) // returns true`}
          </div>
      )
    })}

    const tvc = ssz.getTreeValueClass

    const numberops: ssz.IUintOptions ={
      byteLength: 2
    }

    const listops: ssz.IListOptions = {
      limit: 84,
      elementType: new ssz.NumberUintType(numberops)
    }

    const testArrayL: Uint8Array = new Uint8Array(32)
    const testArrayR: Uint8Array = new Uint8Array(32)
    const testNodeL: pmt.LeafNode = new pmt.LeafNode(testArrayL)
    const testNodeR: pmt.LeafNode = new pmt.LeafNode(testArrayR)
    const testRoot: pmt.BranchNode = new pmt.BranchNode(testNodeL, testNodeR)

    const testTree: pmt.Tree = new pmt.Tree(testRoot)

    const testValue = new ssz.BasicListTreeValue(new ssz.BasicListType(listops), testTree)

    function revealParams(test) {
      const params = Object.entries(test).map(([key, value]) => {
        return value && typeof value == "object" ? `${key}: !!${revealParams(value)}` : value && `${key}: ${typeof value}`
      })

      return params

    }


  // ssz.CompositeType<ssz.BasicArrayType<ssz.BasicVectorType<ssz.UintType<ssz.NumberUintType>>>>>
    // ssz.BasicArrayTreeValue<ssz.ArrayLike<ssz.UintType<ssz.NumberUintType>>>
  return (
    <div className="container">
      <div className="row p-3">
        <h1 className="text-center">SSZ in TypeScript by Chainsafe</h1>
{revealParams(testValue).map((p) => {return (<div className='col'>{p}</div>)})}
      </div>

      <div className="row p-3" style={{height: "75%"}}>
        <div className="col">
          <div className="row p-3">
            <MapMethods ssz={ssz} pmt={pmt} handleChange={handleChange} />
          </div>
        </div>

        <div className="col border border-3 ">
          <div className="row overflow-auto" style={{ height: "75%" }} >
          <ShowFunction mod={mod} func={display} lodesReturns={lodesReturns} />
        </div>
        </div>
      </div>
    </div>
  );
}
