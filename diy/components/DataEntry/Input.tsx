/* eslint-disable @typescript-eslint/no-unused-vars */
import { Type } from "@chainsafe/ssz";
import EventEmitter from "events";
import { useEffect, useState } from "react";
import ContainerMenu from "../TypeMenus/ContainerMenu";
import ExampleMessage from "../ExampleMessage";
import ListMenu from "../TypeMenus/ListMenu";
import Prompt from "../Prompt";
import SelectElementType from "../SelectMenus/SelectElementType";
import { UintMenu } from "../TypeMenus/UintMenu";
import UnionMenu from "../TypeMenus/UnionMenu";
import VectorMenu from "../TypeMenus/VectorMenu";

type InputProps = {
  aliasList: Record<string, Type<any>>
};

const _types = ["boolean", "uint", "Vector", "List", "Union", "Container"];
let basicTypes = ["Uint", "Boolean"];
let uintTypes = ["Uint8", "Uint16", "Uint32", "Uint64", "Uint128", "Uint256"];

export default function Input(props: InputProps) {
  const [boolean, setBoolean] = useState(false);
  const [uint, setUint] = useState(false);
  const [vector, setVector] = useState(false);
  const [bitVector, setBitVector] = useState(false);
  const [list, setList] = useState(false);
  const [BitList, setBitList] = useState(false);
  const [union, setUnion] = useState(false);
  const [container, setContainer] = useState(false);
  const [example, setExample] = useState(false);
  //
  const [name, setName] = useState("[USER_TYPE_ALIAS]");
  const [types, setTypes] = useState(_types);
  const [basicVector, setBasicVector] = useState(false);
  const [compositeVector, setCompositeVector] = useState(false);
  const [basicList, setBasicList] = useState(false);
  const [compositeList, setCompositeList] = useState(false);
  const [type, setType] = useState("[SSZ_TYPE]");
  const [elementOps, setElementOps] = useState("<OPTIONS>");
  const [elementType, setElementType] = useState("");
  const [elementParams, setElementParams] = useState("");
  const [compositeVectorParams, setCompositeVectorParams] = useState("");
  const [typeArray, setTypeArray] = useState("");
  const [string, setString] = useState("");

  const log = new EventEmitter();

  useEffect(() => {
    log.emit("TypeSelected", type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    setString("");
    switch (type) {
      case "Boolean":
        setBoolean(true);
        setUint(false);
        setVector(false);
        setBitVector(false);
        setList(false);
        setBitList(false);
        setUnion(false);
        setContainer(false);
        setExample(false);
        break;
      case "Uint":
        setBoolean(false);
        setUint(true);
        setVector(false);
        setBitVector(false);
        setList(false);
        setBitList(false);
        setUnion(false);
        setContainer(false);
        setExample(false);
        break;
      case "Vector":
        setBoolean(false);
        setUint(false);
        setVector(true);
        setBitVector(false);
        setList(false);
        setBitList(false);
        setUnion(false);
        setContainer(false);
        setExample(false);
        break;
      case "BitVector":
        setBoolean(false);
        setUint(false);
        setVector(false);
        setBitVector(true);
        setList(false);
        setBitList(false);
        setUnion(false);
        setContainer(false);
        setExample(false);
        break;
      case "List":
        setBoolean(false);
        setUint(false);
        setVector(false);
        setBitVector(false);
        setList(true);
        setBitList(false);
        setUnion(false);
        setContainer(false);
        setExample(false);
        break;
      case "BitList":
        setBoolean(false);
        setUint(false);
        setVector(false);
        setBitVector(false);
        setList(false);
        setBitList(true);
        setUnion(false);
        setContainer(false);
        setExample(false);
        break;
      case "Union":
        setBoolean(false);
        setUint(false);
        setVector(false);
        setBitVector(false);
        setList(false);
        setBitList(false);
        setUnion(true);
        setContainer(false);
        setExample(false);
        break;
      case "Container":
        setBoolean(false);
        setUint(false);
        setVector(false);
        setBitVector(false);
        setList(false);
        setBitList(false);
        setUnion(false);
        setContainer(true);
        setExample(false);
        break;
      case "Example_Message":
        setBoolean(false);
        setUint(false);
        setVector(false);
        setBitVector(false);
        setList(false);
        setBitList(false);
        setUnion(false);
        setContainer(false);
        setExample(true);
        break;
      default:
        setBoolean(false);
        setUint(false);
        setVector(false);
        setBitVector(false);
        setList(false);
        setBitList(false);
        setUnion(false);
        setContainer(false);
        setExample(false);
    }
  }, [type]);

  function createType() {
    let t = [...types];
    t.push("user type");
    setTypes(t);
  }

  return (
    <div className="container-fluid border">
      <div className="row">
        <div className="col-2">
          <h3>
            <div className="row align-items-center">New Type Alias:</div>
            <div className="row">
              <input
                type="string"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="exampleFormControlTextarea1"
              ></input>
            </div>
          </h3>
          <SelectElementType aliasList={props.aliasList} name="SSZ Type" setType={setType} types={types} />
        </div>
        <div className="col-10">
          {uint && <UintMenu setString={setString} />}
          {vector && <VectorMenu aliasList={props.aliasList} setString={setString} />}
          {list && <ListMenu aliasList={props.aliasList} setString={setString} />}
          {union && <UnionMenu aliasList={props.aliasList}/>}
          {container && <ContainerMenu aliasList={props.aliasList} setString={setString} />}
          {example && <ExampleMessage />}
        </div>
      </div>
      <div className="row">
        <div className="col-8">
            <h3>
              {name} = {type}
              {string}
            </h3>
          </div>
          <div className="row">
            <div className="col-4">
              <button
                className="btn btn-secondary "
                style={{
                  border: "solid",
                  borderColor: "black",
                  textAlign: "center",
                }}
                onClick={() => createType()}
              >
                <h3> CREATE TYPE ALIAS</h3>
              </button>
            </div>
            <Prompt log={log} />
          </div>
        </div>
      </div>
  );
}
