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
import { setPrototypeOf } from "core-js/core/object";

export default function Typeinfo() {
  const [display, setDisplay] = useState("Type");
  const [mod, setMod] = useState(ssz);
  const [lodesReturns, setLodesReturns] = useState();
  const [subSubMenu, setSubSubMenu] = useState(null);
  const [subGroup, setSubGroup] = useState(null);
  const [group, setGroup] = useState("Type Classes");
  const [subMenu, setSubMenu] = useState();
  const [typeClass, setTypeClass] = useState(null);
  const [proof, setProof] = useState(false);
  const [proofText, setProofText] = useState("");

  const types = forks["altair"];
  const names = typeNames(types);

  function subSubShow() {
    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-row overflow-auto">
          {group == "Type Classes" && typeClass}
        </div>
        <div className="list-group">
          {subSubMenu ? (
            <div className="d-flex flex-row overflow-auto">
              <div className="d-flex flex-column">{subMenu}</div>
              <div className="d-flex flex-column">
                {subSubMenu && subSubMenu}
              </div>
            </div>
          ) : (
            <div className="d-flex flex-row">{subMenu}</div>
          )}
        </div>
      </div>
    );
  }

  function handleChange(display, Mod = ssz, proof = false, proofText = null) {
    proof ? setProof(true) : setProof(false);
    proof ? setProofText(proofText) : setProofText("");
    setDisplay(display);
    setMod(Mod);
    // proof || display.substr(0, 2) == "is"
    //   ? setLodesReturns(lodesTypes(display))
    //   : setLodesReturns(null);
  }

  function lodesTypes(func) {
    return names.map((name) => {
      const current = forks["altair"][name];
      return (
        ssz[func](current) && (
          <div className="row">{`${func}(${name}) // returns true`}</div>
        )
      );
    });
  }

  const tvc = ssz.getTreeValueClass;

  const numberops: ssz.IUintOptions = {
    byteLength: 2,
  };

  const listops: ssz.IListOptions = {
    limit: 84,
    elementType: new ssz.NumberUintType(numberops),
  };

  const testArrayL: Uint8Array = new Uint8Array(32);
  const testArrayR: Uint8Array = new Uint8Array(32);
  const testNodeL: pmt.LeafNode = new pmt.LeafNode(testArrayL);
  const testNodeR: pmt.LeafNode = new pmt.LeafNode(testArrayR);
  const testRoot: pmt.BranchNode = new pmt.BranchNode(testNodeL, testNodeR);

  const testTree: pmt.Tree = new pmt.Tree(testRoot);

  const testValue = new ssz.BasicListTreeValue(
    new ssz.BasicListType(listops),
    testTree
  );

  function revealParams(test) {
    const params = Object.entries(test).map(([key, value]) => {
      return value && typeof value == "object"
        ? `${key}: !!${revealParams(value)}`
        : value && `${key}: ${typeof value}`;
    });

    return params;
  }

  // ssz.CompositeType<ssz.BasicArrayType<ssz.BasicVectorType<ssz.UintType<ssz.NumberUintType>>>>>
  // ssz.BasicArrayTreeValue<ssz.ArrayLike<ssz.UintType<ssz.NumberUintType>>>
  return (
    <div className="container p-0">
      <div className="row justify-content-center">
        <h1 className="text-center p-0">SSZ in TypeScript by Chainsafe</h1>
      </div>
      <div className="row justify-content-start position-relative">
        <div
          className="col-2 my-4 position-absolute start-0"
          style={{ paddingBottom: "0%" }}
        >
          <MapMethods
            ssz={ssz}
            pmt={pmt}
            handleChange={handleChange}
            typeClass={typeClass}
            group={group}
            setGroup={setGroup}
            setSubMenu={setSubMenu}
            setSubGroup={setSubGroup}
            setSubSubMenu={setSubSubMenu}
            setTypeClass={setTypeClass}
          />
        </div>
        <div className="col-4 my-4 position-absolute end-50">
          {subSubShow()}
        </div>
        <div className="col-6 my-4 ms-4 position-absolute end-0 overflow-auto">
          {proof ? (
            <><ShowFunction
            proof={true}
            proofText={proofText}
            mod={mod}
            func={display}
            lodesReturns={lodesReturns}
          /></>
          ) : (
            <ShowFunction
              proof={false}
              proofText={proofText}
              mod={mod}
              func={display}
              lodesReturns={lodesReturns}
            />
          )}{" "}
        </div>
      </div>
    </div>
  );
}
