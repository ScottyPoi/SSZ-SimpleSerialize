/* eslint-disable @typescript-eslint/no-unused-vars */
import { Type } from "@chainsafe/ssz";
import { ReactElement, useEffect, useState } from "react";
import ListMenu from "./ListMenu";
import SelectBasicType from "../SelectMenus/SelectBasicType";
import { UintMenu } from "./UintMenu";
import UnionMenu from "./UnionMenu";

type VectorProps = {
  setString: Function;
  aliasList: Record<string, Type<any>>
};

export default function VectorMenu(props: VectorProps) {
  const [boolean, setBoolean] = useState(false);
  const [uint, setUint] = useState(false);
  const [vector, setVector] = useState(false);
  const [list, setList] = useState(false);
  const [union, setUnion] = useState(false);
  const [type, setType] = useState("type");
  const [length, setLength] = useState<string | number>("length");
  const [byteLength, setByteLength] = useState("");
  const [typeOptions, setTypeOptions] = useState(``);
  const [menu, setMenu] = useState<ReactElement | undefined>();

  useEffect(() => {
    props.setString(`[${type}${typeOptions}, ${length}]`);
  });

  useEffect(() => {
    switch (type) {
      case "Boolean":
        setMenu(undefined);
        setBoolean(true);
        setUint(false);
        setVector(false);
        setList(false);
        setUnion(false);
        break;
      case "Uint":
        setMenu(<UintMenu setString={setTypeOptions} />);
        setBoolean(false);
        setUint(true);
        setVector(false);
        setList(false);
        setUnion(false);
        break;
      case "Vector":
        setMenu(<VectorMenu aliasList={props.aliasList} setString={setTypeOptions} />);
        setBoolean(false);
        setUint(false);
        setVector(true);
        setList(false);
        setUnion(false);
        break;
      case "List":
        setMenu(<ListMenu aliasList={props.aliasList} setString={setTypeOptions} />);
        setBoolean(false);
        setUint(false);
        setVector(false);
        setList(true);
        setUnion(false);
        break;
      case "Union":
        setMenu(<UnionMenu aliasList={props.aliasList} />);
        setBoolean(false);
        setUint(false);
        setVector(false);
        setList(false);
        setUnion(true);
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <div className="row ps-2 ms-2">
      <div className="col">
        <div className="row p-2"></div>
        <div className="row">
          <SelectBasicType name="elementType" setType={setType} />
        </div>
{type !== "" &&        <div className="row justify-content-start py-2">
          Set Vector Length: 
            <input
              type="number"
              value={length}
              min={1}
              onChange={(e) => setLength(Number(e.target.value))}
            />
        </div>}
      </div>

      <div className="col">
          <div className="row">{menu && menu}</div>
      </div>
    </div>
  );
}
