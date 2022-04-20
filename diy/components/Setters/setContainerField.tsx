import {
  BigIntUintType,
  BitListType,
  BitVectorType,
  ContainerType,
  ListType,
  Number64UintType,
  NumberUintType,
  Type,
  UnionType,
  VectorType,
} from "@chainsafe/ssz";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

interface SetElementTypeProps {
  newField: Type<any>;
  setNewField: Dispatch<SetStateAction<Type<any>>>;
  length: number;
  limit: number;
  elementType: Type<any>;
  setLength: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
  setElementType: Dispatch<SetStateAction<Type<any>>>;
  aliasList: Record<string, Type<any>>;
}

export default function SetContainerField(props: SetElementTypeProps) {
  const [newType, setNewType] = useState<Type<any>>(props.newField);
  const [value, setValue] = useState("Uint8");
  const length = props.length;
  const limit = props.limit;
  //   const [_length, set_Length] = useState(props.length)
  // const [limit, setLimit] = [props.limit, props.setLimit]
  //   const [limit, setLimit] = useState(512);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [unionTypes, setUnionTypes] = useState<Type<any>[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [containerFields, setContainerFields] = useState({
  });
  const elementType = props.elementType;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [newField, setNewField] = [props.newField, props.setNewField];
  const types = useMemo<Record<string, Type<any>>>(() => {
    return {
      Uint8: new NumberUintType({ byteLength: 1 }),
      Uint16: new NumberUintType({ byteLength: 2 }),
      Uint32: new NumberUintType({ byteLength: 4 }),
      Uint64: new Number64UintType(),
      Uint128: new BigIntUintType({ byteLength: 16 }),
      Uint256: new BigIntUintType({ byteLength: 32 }),
      BitVector: new BitVectorType({ length: length }),
      BitList: new BitListType({ limit: limit }),
      Vector: new VectorType({ elementType: elementType, length: length }),
      List: new ListType({ elementType: elementType, limit: limit }),
      Union: new UnionType({ types: unionTypes }),
      Container: new ContainerType({ fields: containerFields }),
    };
  }, [length, limit, elementType, unionTypes, containerFields]);

  useEffect(() => {
    Object.keys(props.aliasList).includes(value)
      ? setNewType(props.aliasList[value])
      : setNewType(types[value]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, types]);
  useEffect(() => {
    setNewField(newType);
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
      {Object.keys(types).map((k) => {
        return (
          <option value={k} key={k}>
            {k}
          </option>
        );
      })}
      {Object.keys(props.aliasList).map((alias, idx) => {
        return (
          <option value={alias} key={alias}>
            {alias}
          </option>
        );
      })}
    </select>
  );

  return cmenu;
}
