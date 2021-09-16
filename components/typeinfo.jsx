import * as ssz from "@chainsafe/ssz";
import { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";
import ShowFunction from "./ShowFunction";
import { ForkName, typeNames, forks } from "../sszsrc/util/types";
import MapMethods from "./MapMethods";

const defaultFork = "altair";

const forkList = ["altair", "phase0", "prim"];
const fork = defaultFork;
const types = forks[fork];
const names = typeNames(types);

function displayFunction(fun) {

}

function randomTypeName() {
  const i = Math.random() * names.length;
  console.log(`Selecting random type....${names[i]}`);
  return names[i];
}

function basicInfo(typeName) {
  const type = types[typeName];
  const kingdom = isBasicType(type)
    ? "Basic"
    : isCompositeType(type)
    ? "Composite"
    : "LodeStar";
  const infoObj = { typeName: typeName, type: type, kingdom: kingdom };

  console.log(`Retrieving Basic Info for...${typeName}`);
  return infoObj;
}


export default function Typeinfo() {
  const [display, setDisplay] = useState("Type")
  return (<div className="container">
    <div className='row'>
      <div className='col'>
      <MapMethods handleChange={setDisplay} />
      </div>
    </div>
    <div className='row'>
      <div className='col border'>
      <ShowFunction func={display}/>
      </div>
    </div>
    </div>);
}

console.log(names);
