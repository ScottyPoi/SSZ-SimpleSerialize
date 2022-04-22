import {
  BooleanType,
  isBitListType,
  isBitVectorType,
  isBooleanType,
  isListType,
  isUintType,
  isVectorType,
  NumberUintType,
  Type,
} from "@chainsafe/ssz";
import { Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import SetContainerField from "../Setters/setContainerField";
import SetElementType from "../Setters/SetElementType";
import SetLength from "../Setters/setLength";
import { SetLimit } from "../Setters/SetLimit";
import TypeList from "./TypeList";

interface UnionProps {
  setUnion: Dispatch<SetStateAction<Type<any>>>;
  unionTypes: Type<any>[]
  setUnionTypes: Dispatch<SetStateAction<Type<any>[]>>;
  setTypeNames: Dispatch<SetStateAction<string[]>>;
  typeNames: string[];
  add: (type: Type<any>) => void 
  up: (idx: number) => void
  down: (idx: number) => void
  remove: (idx: number) => void
  aliasList: Record<string, Type<any>>
}

export function nameString(type: Type<any>): string {
  if (isBooleanType(type)) {
    return "boolean";
  } else if (isUintType(type)) {
    return `Uint${type.byteLength * 8}`;
  } else if (isBitVectorType(type)) {
    return `BitVector<length: ${type.length}>`;
  } else if (isBitListType(type)) {
    return `BitList<limit: ${type.limit}>`;
  } else if (isVectorType(type)) {
    return `Vector<elementType: ${nameString(type.elementType)}, length: ${
      type.length
    }>`;
  } else if (isListType(type)) {
    return `List<elementType: ${nameString(type.elementType)}, limit: ${
      type.limit
    }>`;
  } else return "null";
}
export default function Union(props: UnionProps) {
  const [length, setLength] = useState(1);
  const [limit, setLimit] = useState(256);
  const [elementType, setElementType] = useState<Type<any>>(
    new NumberUintType({ byteLength: 1 })
  );
  const [selected, setSelected] = useState<Type<any>>(new BooleanType());





  return (
    <div className="container">
      <div className="row m-1">
        <div id="Set Type" className="col-4 m-3">
          {selected && (
            <SetContainerField
              newField={selected}
              setNewField={setSelected}
              length={length}
              limit={limit}
              elementType={elementType}
              setLength={setLength}
              setLimit={setLimit}
              setElementType={setElementType}
              aliasList={props.aliasList}
            />
          )}
        </div>
        <div id="Type Functions" className="col-5 m-1">
          {/* <div role='group' className="btn-group-vertical fluid"> */}
          <div className="container m-2 border">
            <div className="row m-1">
              <Text>{nameString(selected)}</Text>
              <button
                type="button"
                className="btn btn-sm btn-dark m-1"
                onClick={() => props.add(selected)}
              >
                + ADD TO TYPES
              </button>
            </div>
            {isVectorType(selected) ? (
              <div className="row my-2">
                {!isBitVectorType(selected) && (
                  <div className="col">
                    <SetElementType aliasList={props.aliasList} setEType={setElementType} />
                  </div>
                )}
                <div className="col">
                  <SetLength currentLen={length} setVectorLen={setLength} />
                </div>
              </div>
            ) : isListType(selected) ? (
              <div className="row">
                <div className="col">
                  <SetElementType aliasList={props.aliasList} setEType={setElementType} />
                </div>

                <div className="col">
                  <SetLimit
                    curLimit={limit}
                    perChunk={256}
                    setLimit={setLimit}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="row m-2">
            <div className="row p-2">
              {isBitListType(selected) ? (
                <p className="text-center">BitList{`<limit: ${limit}>`}</p>
              ) : isBitVectorType(selected) ? (
                <p className="text-center">{`BitVector<length: ${length}>`}</p>
              ) : isVectorType(selected) ? (
                <>
                  {/* <div className="col">
                    <SetElementType setEType={setElementType} />
                  </div> */}
                </>
              ) : isListType(selected) ? (
                <>
                  <div className="col">
                    <SetLimit
                      curLimit={limit}
                      perChunk={256}
                      setLimit={setLimit}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="col border m-2">
          <div className="row border p-0">
            <p
              className="text-center"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Union Types
            </p>
          </div>
          <TypeList types={props.unionTypes} typeNames={props.typeNames} up={props.up} down={props.down} remove={props.remove} />          {/* {types.map((typ, idx) => {
            return (
              <div className="row mt-1">
                <p>
                  {idx}: {nameString(typ)}
                </p>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
