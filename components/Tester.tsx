import React from "react";
import { Type } from "@chainsafe/ssz";
import { ssz, Epoch } from "@chainsafe/lodestar-types";
import { ForkName, typeNames, forks } from "../src/util/types";

const EpochType: Type<Epoch> = ssz.Epoch;

const e = EpochType.defaultValue();
const types = Object.keys(forks.prim);
const typeName = typeNames(forks.prim);
const defVals = typeName.map((type) => {
  return (
    <div className="row">
      Default Value of {type} is {forks.prim[type].defaultValue()}
    </div>
  );
});

export default function Tester(props): React.ReactElement {
  return (
    <div>
      {e} <br />
      {types} <br />
      {typeName} <br />
      {defVals}
    </div>
  );
}
