import React from "react";
import { Type } from "@chainsafe/ssz";
import { ssz, Epoch } from "@chainsafe/lodestar-types";
import { ForkName, typeNames, forks } from "../sszsrc/util/types";

const EpochType: Type<Epoch> = ssz.Epoch;

const e = EpochType.defaultValue();
const types = Object.keys(forks.prim);
const typeName = typeNames(forks.prim);


const defVals = types.map((type, idx) => {
  return (
    <div key={idx}>
      {idx}{type}
    </div>
  );
});


export default function Tester(props): React.ReactElement {
  return (
    <div>
      a{e} <br />
      b{types} <br />
      c{typeName} <br />
      typeNames 22 is {types[1]}
    </div>
  );
}
