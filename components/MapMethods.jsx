import TypeClasses from "./TypeClasses";
import SSZMenu from "./sszmenu";
import {
  isFunctions,
  isTypeFunctions,
  valueFunctions,
  getFunctions,
  otherFunctions,
  objects,
  typeFunctionList,
} from "./FunctionGroups";
import classObj from "../data/ClassObj";
import { ValueObj } from "../data/ValueObj";
import { useEffect, useState } from "react";
import LodesMenu from "./LodesMenu";
import * as lodes from "@chainsafe/lodestar-types";
import MerkleMenu from "./MerkleMenu";
import ProofMenu from "./proofmenu";

export default function MapMethods(props) {
  const group = props.group
  const setGroup = props.setGroup
  const setSubMenu = props.setSubMenu
  const setSubSubMenu = props.setSubSubMenu
  const setSubGroup=props.setSubGroup
  const setTypeClass = props.setTypeClass
  // useEffect(() => {
  //   let newGroup = group;
  //   newGroup != "Type Classes" && resetSubs();
  //   newGroup != "Value Classes" && resetSubs();
  //   return;
  // }, [group]);

  function resetSubs() {
    setSubSubMenu(null);
    // setSubMenu(null);
  }

  const ssz = props.ssz;
  const pmt = props.pmt;
  const groups = {
    typeFuncionList: { name: "Type Functions", list: typeFunctionList },
    isTypeFunctions: { list: isTypeFunctions, name: "IsType Functions" },
    getFunctions: { list: getFunctions, name: "Get Functions" },
    // valueFunctions: { list: valueFunctions, name: "Value Classes" },
    otherFunctions: { list: otherFunctions, name: "Other Functions" },
    objects: { list: objects, name: "Proxy" },
    // persistantMerkleTree: {
    //   list: Object.keys(pmt),
    //   name: "Persistant Merkle Tree",
    // },
  };


  return (
    <>
      <div className="d-flex flex-row">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row overflow-auto border" >
            <div className="list-group ">
              <h6 className="text-center list-group-item">
                SSZ in TypeScript (@chainsafe/ssz)
              </h6>
              <TypeClasses
                classObj={classObj}
                ssz={ssz}
                setTypeClass={setTypeClass}
                handleChange={props.handleChange}
                setSubMenu={setSubMenu}
                setGroup={setGroup}
                active={group}
                name={"Type Classes"}
                setSubGroup={setSubGroup}
                setSubSubMenu={setSubSubMenu}
                head={"Type"}
                // functionsPage={true}
              />
              <TypeClasses
                classObj={ValueObj}
                ssz={ssz}
                handleChange={props.handleChange}
                setSubMenu={setSubMenu}
                setGroup={setGroup}
                active={group}
                name={"Value Classes"}
                head={"TreeValue"}
                setSubGroup={setSubGroup}
                setSubSubMenu={setSubSubMenu}
                // functionsPage={true}
              />

              {Object.keys(groups).map((key) => {
                return (
                  <SSZMenu
                    handleChange={props.handleChange}
                    ssz={ssz}
                    lst={groups[key].list}
                    name={groups[key].name}
                    setGroup={setGroup}
                    setSubMenu={setSubMenu}
                    active={group}
                    resetSubs={resetSubs}
                  />
                );
              })}
              <h6 className="text-center list-group-item">
                Persistent Merkle Tree (@chainsafe/persistent-merkle-tree)
              </h6>
              <MerkleMenu
                handleChange={props.handleChange}
                pmt={pmt}
                lst={Object.keys(pmt)}
                setSubMenu={setSubMenu}
                setGroup={setGroup}
                active={group}
                resetSubs={resetSubs}
              />
              <ProofMenu
                name={"Proof"}
                handleChange={props.handleChange}
                setSubMenu={setSubMenu}
                setGroup={setGroup}
                active={group}
                resetSubs={resetSubs}
              />
              <h6>lodestar</h6>
              <LodesMenu
                handleChange={props.handleChange}
                lodes={lodes}
                setSubMenu={setSubMenu}
                setSubSubMenu={setSubSubMenu}
                setGroup={setGroup}
                name="LodeStar Type Classes"
                active={group}
              />
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
