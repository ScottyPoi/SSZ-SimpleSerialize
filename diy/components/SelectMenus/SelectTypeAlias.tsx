import {
  NumberUintType,
  Type,
  VectorType,
} from "@chainsafe/ssz";
import { Dispatch, SetStateAction, useState } from "react";

type aliasList = Record<string, Type<any>>;

class Byte extends NumberUintType {
  constructor() {
    super({ byteLength: 1 });
  }
}

interface SelectTypeAliasProps {
  setTypeName: Dispatch<SetStateAction<string>>;
  typeName: string;
  setType: Dispatch<SetStateAction<Type<unknown>>>;
}

export default function SelectTypeAlias(props: SelectTypeAliasProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [aliasList, setAliasList] = useState<aliasList>({
    Byte: new Byte(),
    Bytes32: new VectorType({ elementType: new Byte(), length: 32 }),
  });

  const menu = 
      Object.entries(aliasList).map(([alias, type], idx) => {
        return <option key={idx} value={alias}>{alias}</option>;
      })

  return (<>{menu}</>);
}
