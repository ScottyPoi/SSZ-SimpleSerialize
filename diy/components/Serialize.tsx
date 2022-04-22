import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputBox from "./InputBox/InputBox";
import {
  BasicVectorType,
  BigIntUintType,
  BitVectorType,
  BooleanType,
  isBitVectorType,
  isVectorType,
  Number64UintType,
  NumberUintType,
  Type,
  UintType,
  BasicListType,
  BitListType,
  isListType,
  isBitListType,
  isUintType,
  UnionType,
  isUnionType,
  isContainerType,
  ContainerType,
  isCompositeType,
} from "@chainsafe/ssz";
import { randomDataSet } from "./DataEntry/randUint";
import SelectType from "./SelectMenus/SelectType";
import InfoTable from "./OutputBox/InfoTable";
import SetLength from "./Setters/setLength";
import SetElementType from "./Setters/SetElementType";
import { SetLimit } from "./Setters/SetLimit";
import { UnionObject } from "./DataEntry/RandomData";
import Union, { nameString } from "./TypeMenus/Union";
import Container from "./TypeMenus/Container";
import EventEmitter from "events";
import { Modal } from "bootstrap";
import LittleTree from "./VisualTree/LittleTree";

interface SerializeProps {
  userTypes: string[];
  TN: string;
  t: Type<unknown>;
  setTN: Dispatch<SetStateAction<string>>;
  setT: Dispatch<SetStateAction<Type<unknown>>>;
  data: unknown;
  aliasList: Record<string, Type<unknown>>;
  SimpleSerialize: EventEmitter;
  showInfo: JSX.Element;
  setShowInfo: Dispatch<SetStateAction<JSX.Element>>;
}

export type TypeValue = number | bigint | boolean | unknown[] | UnionObject;

export const nativeTypes: Record<string, string[]> = {
  Basic: [
    "Boolean",
    "Uint8",
    "Uint16",
    "Uint32",
    "Uint64",
    "Uint128",
    "Uint256",
  ],

  Array: ["BitVector", "BitList", "Vector", "List"],
  Container: ["Container"],
  Union: ["Union"],
};
export default function Serialize(props: SerializeProps) {
  const typeName = props.TN;
  const setTypeName = props.setTN;
  const typeSelect = props.t;
  const setTypeSelect = props.setT;
  const typeDescription = nameString(typeSelect);
  const aliasList = props.aliasList;
  const [alias, setAlias] = useState<boolean>(false);

  const [unionTypes, setUnionTypes] = useState<Type<unknown>[]>([
    new BigIntUintType({ byteLength: 32 }),
  ]);
  const [containerTypes, setContainerTypes] =
    useState<Record<string, Type<any>>>();
  const [unionTypeNames, setUnionTypeNames] = useState<string[]>([]);
  const [elementType, setEType] = useState<Type<unknown>>(
    new NumberUintType({ byteLength: 8 })
  );
  const [vectorLen, setVectorLen] = useState(100);
  const [listLimit, setListLimit] = useState(512);
  const [showInfo, setShowInfo] = [props.showInfo, props.setShowInfo];
  const [showTree, setShowTree] = useState(false);
  const [dataSet, setDataSet] = useState(props.t.struct_defaultValue());
  function update(_type: string) {
    const t =
      _type === "Boolean"
        ? new BooleanType()
        : _type.substring(0, 4) === "Uint" &&
          parseInt(_type.substring(4)) / 8 < 64
        ? new NumberUintType({ byteLength: parseInt(_type.substring(4)) / 8 })
        : _type.substring(0, 4) === "Uint" &&
          parseInt(_type.substring(4)) / 8 > 64
        ? new BigIntUintType({ byteLength: parseInt(_type.substring(4)) / 8 })
        : _type.substring(0, 4) === "Uint" &&
          parseInt(_type.substring(4)) / 8 === 64
        ? new Number64UintType()
        : _type === "BitVector"
        ? new BitVectorType({ length: vectorLen })
        : _type === "Vector"
        ? new BasicVectorType({ length: vectorLen, elementType: elementType! })
        : _type === "BitList"
        ? new BitListType({ limit: listLimit })
        : _type === "List"
        ? new BasicListType({ limit: listLimit, elementType: elementType! })
        : _type === "Union"
        ? new UnionType({ types: unionTypes })
        : _type === "Container"
        ? new ContainerType({
            fields: containerTypes as Record<string, Type<any>>,
          })
        : typeSelect;
    return t;
  }

  useEffect(() => {
    setShowInfo(<></>);
    const t = update(typeName);
    alias || setTypeSelect(t);
    props.setT(t);
    props.setTN(typeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeName, listLimit, vectorLen, elementType, unionTypes, containerTypes]);

  async function makeInfo() {
    const t = typeSelect;
    const dataSet = randomDataSet(t);
    setDataSet(dataSet);
    setShowInfo(<InfoTable top sszTypeName={typeName} data={dataSet} type={t} />);
  }

  async function setInfo(dataSet: unknown) {
    const t = typeSelect;
    setDataSet(dataSet);
    setShowInfo(<InfoTable top sszTypeName={typeName} data={dataSet} type={t} />);
  }

  useEffect(() => {
    typeof props.data !== "undefined" &&
      setInfo(props.data).then(() => {
        return;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const names: string[] = unionTypes.map((type) => {
      return nameString(type);
    });
    setUnionTypeNames(names);
  }, [unionTypes]);

  function addType(type: Type<any>) {
    let t = [...unionTypes];
    t.push(type);
    setUnionTypes(t);
  }

  function moveUp(idx: number) {
    const o = [...unionTypes];
    const movingUp = o[idx];
    const movingDown = o[idx - 1];
    o[idx] = movingDown;
    o[idx - 1] = movingUp;
    setUnionTypes(o);
  }

  function moveDown(idx: number) {
    const o = [...unionTypes];
    const movingUp = o[idx + 1];
    const movingDown = o[idx];
    o[idx + 1] = movingDown;
    o[idx] = movingUp;
    setUnionTypes(o);
  }

  function remove(idx: number) {
    const oldOrder = [...unionTypes];
    const newOrder: Type<any>[] = [];
    const values = Object.values(oldOrder);
    const removed = values.filter((n, i) => i !== idx);
    removed.forEach((type, i) => {
      newOrder.push(type);
    });
    setUnionTypes(newOrder);
  }

  return (
    <div className="container m-0 p-0 vw-100 vh-100">
      <div className="row m-0 p-0 vh-100 vw-100">
        <SelectType
          setTypeName={setTypeName}
          typeName={typeName}
          type={typeSelect}
          setType={setTypeSelect}
          nativeTypes={nativeTypes}
          setAlias={setAlias}
          aliasList={aliasList}
        />
        <div className="col-10">
          <div className="row">
            <div className="col-10">
              <textarea
                className="form-control m-2"
                style={{ fontSize: "1rem" }}
                readOnly
                rows={2}
                value={
                  alias
                    ? `${typeName}  \n(${typeDescription})`
                    : `${typeName}${
                        isVectorType(typeSelect)
                          ? `<length: ${vectorLen}${
                              isVectorType(typeSelect) &&
                              !isBitVectorType(typeSelect)
                                ? `, elementType: Uint${
                                    8 *
                                    (elementType as UintType<unknown>)
                                      .byteLength
                                  }`
                                : ``
                            }>`
                          : isListType(typeSelect)
                          ? `<limit: ${listLimit}${
                              !isBitListType(typeSelect)
                                ? `, elementType: Uint${
                                    (elementType as UintType<unknown>)
                                      .byteLength * 8
                                  }`
                                : ``
                            }>`
                          : isUnionType(typeSelect)
                          ? `<types: [${unionTypeNames}]>`
                          : isContainerType(typeSelect)
                          ? `<${
                              containerTypes &&
                              Object.entries(containerTypes).map(
                                ([key, type]) => {
                                  return `${key}: ${nameString(type!)}`;
                                }
                              )
                            } >`
                          : ``
                      }`
                }
              />
              <div className="row">
                {
                  <InputBox
                    aliasList={aliasList}
                    type={typeSelect}
                    makeInfo={makeInfo}
                    setData={setDataSet}
                    setShowInfo={setShowInfo}
                  />
                }
              </div>
            </div>
          </div>
          {alias || (
            <>
              {isContainerType(typeSelect) && (
                <Container
                  aliasList={aliasList}
                  setContainerTypes={
                    setContainerTypes as Dispatch<
                      SetStateAction<Record<string, Type<any> | null>>
                    >
                  }
                />
              )}
              <div className="row">
                {" "}
                {isVectorType(typeSelect) && (
                  <div className="col align-items-end">
                    <SetLength
                      setVectorLen={setVectorLen}
                      currentLen={vectorLen}
                    />
                  </div>
                )}
                {/* {isListType(typeSelect) && <>Set Limit: {listLimit}</>} */}
                {isListType(typeSelect) && (
                  <div className="col align-items-end">
                    <SetLimit
                      perChunk={
                        isUintType(typeSelect.elementType)
                          ? 32 /
                            (typeSelect.elementType as UintType<unknown>)
                              .byteLength
                          : 256
                      }
                      setLimit={setListLimit}
                      curLimit={listLimit}
                    />
                  </div>
                )}{" "}
                {isUnionType(typeSelect) && (
                  <div className="col">
                    <Union
                      aliasList={aliasList}
                      setUnion={setTypeSelect}
                      unionTypes={unionTypes}
                      setUnionTypes={setUnionTypes}
                      setTypeNames={setUnionTypeNames}
                      typeNames={unionTypeNames}
                      add={addType}
                      up={moveUp}
                      down={moveDown}
                      remove={remove}
                    />
                  </div>
                )}
                {(isVectorType(typeSelect) || isListType(typeSelect)) &&
                  !isBitVectorType(typeSelect) &&
                  !isBitListType(typeSelect) && (
                    <div className="col">
                      <SetElementType
                        aliasList={aliasList}
                        setEType={setEType}
                      />
                    </div>
                  )}
              </div>
            </>
          )}
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="row">
                  <div className="col"></div>
                </div>
              </div>{" "}
            </div>
          </div>
          <ul className=" nav nav-tabs p-0 nav-fill">
            <li className="nav-item ">
              <button
                onClick={() => setShowTree(false)}
                className={`nav-link ${showTree || "active"}`}
              >
                DATA
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setShowTree(true)}
                className={`nav-link ${showTree && "active"}`}
              >
                MERKLE TREE
              </button>
            </li>
          </ul>
          <div className="row w-100 p-0 my-0 mx-1">
            {isCompositeType(typeSelect) && showTree ? (
              <LittleTree type={typeSelect} value={dataSet} />
            ) : (
              showInfo
            )}
          </div>
          {/* <div className="row w-100 p-0 my-0 mx-1" ><LittleTree /></div> */}
        </div>
      </div>
    </div>
  );
}


