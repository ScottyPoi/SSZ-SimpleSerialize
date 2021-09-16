import {
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

import { ForkName, typeNames, forks } from "../sszsrc/util/types";

import Typeinfo from "../components/typeinfo";

export default function infotwo(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
<Typeinfo />
        </div>
      </div>
    </div>
  );
}
