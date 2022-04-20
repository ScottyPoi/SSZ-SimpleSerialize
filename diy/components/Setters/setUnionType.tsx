import {
  BigIntUintType,
  BitListType,
  BitVectorType,
  ListType,
  Number64UintType,
  NumberUintType,
  Type,
  VectorType,
} from "@chainsafe/ssz";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

interface SetElementTypeProps {
  selected: Type<any>;
  setSelected: Dispatch<SetStateAction<Type<any>>>;
  length: number;
  limit: number;
  elementType: Type<any>;
  setLength: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
  setElementType: Dispatch<SetStateAction<Type<any>>>;
}

export default function SetUnionType(props: SetElementTypeProps) {
  const [newType, setNewType] = useState<Type<any>>(new Number64UintType());
  const [value, setValue] = useState("Uint64");
  // const [length, setLength] = [props.length, props.setLength];
  // const [limit, setLimit] = [props.limit, props.setLimit];
  // const [elementType, setElementType] = [
  //   props.elementType,
  //   props.setElementType,
  // ];
  const setSelected = props.setSelected;
  const types = useMemo<Record<string, Type<any>>>(() => {
    return {
      Uint8: new NumberUintType({ byteLength: 1 }),
      Uint16: new NumberUintType({ byteLength: 2 }),
      Uint32: new NumberUintType({ byteLength: 4 }),
      Uint64: new Number64UintType(),
      Uint128: new BigIntUintType({ byteLength: 16 }),
      Uint256: new BigIntUintType({ byteLength: 32 }),
      BitVector: new BitVectorType({ length: props.length }),
      BitList: new BitListType({ limit: props.limit }),
      Vector: new VectorType({
        elementType: props.elementType,
        length: props.length,
      }),
      List: new ListType({
        elementType: props.elementType,
        limit: props.limit,
      }),
    };
  }, [props.length, props.limit, props.elementType]);

  useEffect(() => {
    setNewType(types[value]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  useEffect(() => {
    setSelected(newType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newType]);

  const cmenu = (
    <select
      defaultValue={"Change Element Type"}
      size={Object.keys(types).length}
      onChange={(e) => setValue(e.target.value)}
      className="form-select"
      aria-label="set element type"
    >
      <option disabled>Select Element Type</option>
      {Object.keys(types).map((k, i) => {
        return (
          <option value={k} key={k}>
            {k}
          </option>
        );
      })}
    </select>
  );

  return cmenu;
}
