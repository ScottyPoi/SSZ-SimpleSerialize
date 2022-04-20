import {
  BasicListType,
  BasicVectorType,
  BitList,
  BitListType,
  BitVector,
  isBasicType,
  isBitListType,
  isBitVectorType,
  isCompositeType,
  isListType,
  isUnionType,
  isVectorType,
  Type,
} from "@chainsafe/ssz";
import { Dispatch, SetStateAction } from "react";
import { randBasic, randVector, randList, randUnion } from "./randUint";

export interface UnionObject {
  selector: number
  value: number | bigint | boolean | unknown[]
}

interface RandomDataProps {
  t: Type<any>;
  setValues: Dispatch<SetStateAction<number | bigint | boolean | unknown[] | UnionObject>>
}

export default async function RandomData(props: RandomDataProps) {
  let values: number | bigint | boolean | unknown[] | UnionObject = 0;

  const t = props.t;
  if (isBasicType(t)) {
    values = randBasic(t);
  } else if (isCompositeType(t)) {
    if (isVectorType(t)) {
      const data = randVector(t as BasicVectorType);
      const vals = isBitVectorType(t)
        ? t.tree_iterateValues(t.struct_convertToTree(data as BitVector))
        : t.tree_iterateValues(t.struct_convertToTree(data));
      values = Array.from(vals);
    } else if (isListType(t)) {
      const data = randList(t as BasicListType | BitListType);
      const vals = isBitListType(t)
        ? t.tree_iterateValues(t.struct_convertToTree(data as BitList))
        : t.tree_iterateValues(t.struct_convertToTree(data));

      values = Array.from(vals);
    } else if (isUnionType(t)) {
      values = randUnion(t)
    }
  }

  return values;
}
