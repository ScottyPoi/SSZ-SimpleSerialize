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

export default function MapMethods(props) {
  const [group, setGroup] = useState("Type Classes");
  const [subMenu, setSubMenu] = useState();
  const [subSubMenu, setSubSubMenu] = useState(null);
  const [subGroup, setSubGroup] = useState(null);
  const [typeClass, setTypeClass] = useState(null)

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
      <div className="row p-1 m-1">
        <div className="col-4">
          <div className="row overflow-auto" style={{ height: "75%" }}>
            <div className="list-group">
              <h5 className="text-center list-group-item">
                SSZ in TypeScript (@chainsafe/ssz)
              </h5>
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
              <h4 className="text-center list-group-item">
                Persistent Merkle Tree (@chainsafe/persistent-merkle-tree)
              </h4>
              <MerkleMenu
                handleChange={props.handleChange}
                pmt={pmt}
                lst={Object.keys(pmt)}
                setSubMenu={setSubMenu}
                setGroup={setGroup}
                active={group}
                resetSubs={resetSubs}
              />
              <h4>lodestar</h4>
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

        <div className="col-8">
        <div className="row overflow-auto">
          {group == "Type Classes" && typeClass}
        </div>
          <div className="list-group">
            {subSubMenu ? (
              <div className="row overflow-auto" style={{height: "75%"}}>
                <div className="col-4 p-0 vh-75">{subMenu}</div>
                <div className="col-8 ">{subSubMenu && subSubMenu}</div>
              </div>
            ) : (
              <div className="row p-0 vh-75">{subMenu}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
