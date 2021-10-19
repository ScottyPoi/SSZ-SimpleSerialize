import {
  getFixedSerializedLength,
  hasVariableSerializedLength,
  isBasicType,
  isBigIntUintType,
  isBitListType,
  isBitVectorType,
  isBooleanType,
  isByteVectorType,
  isCompositeType,
  isContainerType,
  isListType,
  isNumberUintType,
  isRootType,
  isUintType,
  isVectorType,
  Type,
} from "@chainsafe/ssz";
import { FAILSAFE_SCHEMA } from "js-yaml";
import { tmpdir } from "os";
import { ForkName, typeNames, forks } from "../sszsrc/util/types";
import makeTable from "../components/Tables";
import Interfaces from "../components/interfaces";


export default function sszinfo(props) {
  const types = forks["altair"];
  const names = typeNames(types);

  return (
    <div className="container p-0">
      <div className='row'>
        <Interfaces />
      </div>
      <div className='row'>
{makeTable(names, types)}

      </div>
    </div>
  );
}
