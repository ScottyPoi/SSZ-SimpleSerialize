import {
  ContainerType,
  isBitListType,
  isBitVectorType,
  isCompositeType,
  isListType,
  isVectorType,
  Number64UintType,
  NumberUintType,
  Type,
} from "@chainsafe/ssz";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SetContainerField from "../Setters/setContainerField";
import { SetLimit } from "../Setters/SetLimit";
import SetOptions from "../Setters/SetOptions";
import { nameString } from "./Union";

interface ContainerProps {
  setContainerTypes: Dispatch<SetStateAction<Record<string, Type<any> | null>>>;
  aliasList: Record<string, Type<any>>;
}

export default function Container(props: ContainerProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [container, setContainer] = useState<ContainerType<any>>();
  const setContainerTypes = props.setContainerTypes;
  const [fields, setFields] = useState<Record<string, Type<any>>>({});
  const [newField, setNewField] = useState<Type<unknown>>(new NumberUintType({byteLength: 1}));
  const [curKey, setCurKey] = useState<string>("");
  const [length, setLength] = useState<number>(1);
  const [limit, setLimit] = useState<number>(256);
  const [elementType, setElementType] = useState<Type<unknown>>(
    new NumberUintType({ byteLength: 1 })
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [c_selected, setC_Selected] = useState<Type<unknown>>(
    new Number64UintType()
  );


  function removeFieldAtIdx(idx: number) {
    let f = Object.entries(fields);
    let a = idx > 0 ? Array.from(f).slice(0, idx) : [];
    let b = idx < f.length - 1 ? Array.from(f).slice(idx) : [];
    let c = [...a, ...b];
    setFields(Object.fromEntries(c));
  }

  function addField(key: string, type: Type<unknown>) {
    const f = Object.entries(fields);
    f.push([key, type]);
    const fo = Object.fromEntries(f);
    setFields(fo);
    setCurKey("");
  }

  function moveUp(idx: number) {
    const entries = Object.entries(fields)
    const up = entries[idx]
    const down = entries[idx-1]
    entries[idx] = down;
    entries[idx-1] = up;
    setFields(Object.fromEntries(entries))
  }
  function moveDown(idx: number) {
    const entries = Object.entries(fields)
    const up = entries[idx+1]
    const down = entries[idx]
    entries[idx+1] = down;
    entries[idx] = up;
    setFields(Object.fromEntries(entries))
  }

  useEffect(() => {}, [length, limit, elementType]);

  useEffect(() => {
    const con = new ContainerType({ fields: fields });
    setContainer(con);
    setContainerTypes(fields);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields]);

  // async function getFields() {
  //   return fields;
  // }

  return (
    <div className="container px-0">
      <div className="row ">
        <div id="Set Type" className="col-3">
          <SetContainerField
            newField={newField}
            setNewField={setNewField}
            length={length}
            limit={limit}
            elementType={elementType!}
            setLength={setLength}
            setLimit={setLimit}
            setElementType={setElementType}
            aliasList={props.aliasList}
          />
        </div>
        <div id="Type Functions" className="col-5 border-start">
          {/* <div role='group' className="btn-group-vertical fluid"> */}
          <div className="container m-2 border">
            <div className="row m-1">
              <p className="text-center">{nameString(newField)}</p>
            </div>
            {
              <SetOptions
                newField={newField}
                setNewField={setNewField}
                length={length}
                limit={limit}
                elementType={elementType}
                setLength={setLength}
                setLimit={setLimit}
                setElementType={setElementType}
                aliasList={props.aliasList}
              />
            }

            {isCompositeType(c_selected) && <>options</>}
          </div>
          <div className="row m-1">
            <input
              className="form-control m-1"
              placeholder="Enter KEY for new Type"
              value={curKey}
              type="text"
              minLength={1}
              onChange={(e) => setCurKey(e.target.value)}
            />
          </div>
          <div className="row m-1">
            <button
              disabled={curKey === ""}
              type="button"
              className="btn btn-sm btn-dark m-1"
              onClick={() => addField(curKey!, newField)}
            >
              + ADD TYPE TO CONTAINER
            </button>
          </div>
          <div className="row p-2">
            {isBitListType(newField) ? (
              <p className="text-center">BitList{`<limit: ${limit}>`}</p>
            ) : isBitVectorType(newField) ? (
              <p className="text-center">{`BitVector<length: ${length}>`}</p>
            ) : isVectorType(newField) ? (
              <>
                {/* <div className="col">
                    <SetElementType setEType={setElementType} />
                  </div> */}
              </>
            ) : isListType(newField) ? (
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
        <div className="col-4 border-start">
          <div className="row p-0">
            <p
              className="text-center"
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Container Fields
            </p>
          </div>
          <div className="row"></div>
          <div className="btn-group btn-group-sm">
            <div className="btn-group-vertical btn-group-sm">
                <button
                    type="button"
                    
                    className="btn mx-0 my-1 border-bottom"
                  >
                    __
                  </button>
              {Object.entries(fields).map((typ, idx) => {
                return (
                  <button
                    type="button"
                    onClick={() => removeFieldAtIdx(idx)}
                    className="btn mx-0 my-1 btn-danger"
                  >
                    X
                  </button>
                );
              })}
            </div>
            <div className="btn-group-vertical  btn-group-sm">
            <button
                    type="button"
                    style={{fontWeight: 'bold'}}
                    className="btn mx-0 my-1 border-bottom"
                  >
                    KEY
                  </button>
              {Object.entries(fields).map((typ, idx) => {
                return (
                  <button
                    type="button"
                    key={idx}
                    style={{fontWeight: 'bold'}}

                    className="btn mx-0 my-1"
                  >
                    {typ[0]}:
                  </button>
                );
              })}
            </div>
            <div className="btn-group-vertical  btn-group-sm">
            <button
                    type="button"
                    style={{fontWeight: 'bold'}}
                    
                    className="btn mx-0 my-1 border-bottom"
                  >
                    VALUE
                  </button>
              {Object.entries(fields).map((typ, idx) => {
                return (
                  <button
                    type="button"
                    key={idx}
                    style={{fontWeight: 'bold'}}
                    className="btn mx-0 my-1 "
                  >
                    {nameString(typ[1])}
                  </button>
                );
              })}
            </div>
            <div className="btn-group-vertical btn-group-sm">
            <button
                    type="button"
                    style={{fontWeight: 'bold'}}

                    className="btn mx-0 my-1 border-bottom"
                  >
                    __
                  </button>              {Object.entries(fields).map((typ, idx) => {
                return idx === 0 ? (
                  <button
                    className="btn btn-outline-secondary mx-0 my-1 "
                    type="button"
                    onClick={(() => moveDown(idx))}
                  >
                    DOWN
                  </button>
                ) : idx < Object.entries(fields).length - 1 ? (
                  <div className="btn-group">
                  <button
                    className="btn btn-outline-secondary mx-0 my-1 "
                    type="button"
                    onClick={(() => moveDown(idx))}
                  >
                    DOWN
                  </button>
                  <button
                    className="btn mx-0 my-1 btn-outline-secondary"
                    type="button"
                    onClick={() => moveUp(idx)}
                  >
                    UP
                  </button>
</div>
                ) : (
                  <button
                    className="btn mx-0 my-1 btn-outline-secondary"
                    type="button"
                    onClick={() => moveUp(idx)}
                  >
                    UP
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  //   return (
  //     <div className="container border">
  //       Container Options
  //       {Object.entries(fields).map((entry, idx) => {
  //         return (
  //           <div className="row">
  //             {idx}: {entry[0]} {nameString(entry[1])}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
}
