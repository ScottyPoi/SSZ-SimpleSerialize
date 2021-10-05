import { isBooleanType } from "@chainsafe/ssz";
import { useEffect, useState } from "react";
import TypeClasses from "./TypeClasses";
import classObj from "../data/ClassObj";
import * as ssz from "@chainsafe/ssz";
import { createRandomValue } from "../sszsrc/components/worker/helpers";
import { isTypeFunctions, functions } from "./FunctionGroups";
import { ForkName, typeNames, forks } from "../sszsrc/util/types";
import { CodeBlock, monoBlue } from "react-code-blocks";

export const ops = {
  Type: {},
  BasicType: {},
  CompositeType: {},
  BooleanType: {},
  UintType: {
    byteLength: 1,
    infinityWhenBig: true,
  },
  NumberUintType: {
    byteLength: 8,
    infinityWhenBig: true,
  },
  BigIntUintType: {
    byteLength: 8,
    infinityWhenBig: true,
  },
  BasicArrayType: {
    elementType: ssz.BooleanType,
  },
  BasicVectorType: {
    elementType: ssz.BooleanType,
    length: 32,
  },
  BasicListType: {
    elementType: ssz.Number64UintType,
    length: 32,
  },
  Number64ListType: {
    elementType: ssz.Number64UintType,
    length: 32,
  },
  BitListType: {
    elementType: ssz.BooleanType,
    length: 120,
  },
  BitVectorType: {
    elementType: ssz.BooleanType,
    length: 32,
  },
  ByteVectorType: {
    // elementType: ssz.UintType,
    length: 32,
  },
  CompositeArrayType: {
    elementType: ssz.CompositeType,
  },
  CompositeVectorType: {
    elementType: ssz.CompositeType,
    length: 32,
  },
  CompositeListType: {
    elementType: ssz.CompositeType,
    length: 32,
  },
  RootType: {
    _expandedType: ssz.CompositeType,
  },
  ContainerType: {
    options: {
      fields: {
        1: {
          elementType: ssz.BasicType,
        },
      },
    },
  },
  UnionType: {
    types: [ssz.CompositeType],
  },
};

export default function FunctionsTool(props) {
  const [subMenu, setSubMenu] = useState();
  const [subSubMenu, setSubSubMenu] = useState();
  const [group, setGroup] = useState();
  const [subGroup, setSubGroup] = useState();
  const [typeName, setTypeName] = useState("BooleanType");
  const [display, setDisplay] = useState("");
  const [options, setOptions] = useState(null);
  const [optionsString, setOptionsString] = useState(<></>);
  const [fee, setFee] = useState({});
  const [returned, setReturned] = useState();

  const types = forks["altair"];
  const names = typeNames(types);

  function handleChange(func) {
    const string = new String(func);
    if (string != "Type") {
      const options = string.includes("UintType")
        ? {
            byteLength: 8,
          }
        : string == "BasicArrayType"
        ? {
            elementType: ssz.BasicType,
          }
        : string == "BasicVectorType"
        ? ops.BasicVectorType
        : string == "BasicListType"
        ? ops.BasicListType
        : string == "Number64ListType"
        ? ops.Number64ListType
        : string == "BitListType"
        ? ops.BitListType
        : string == "BitVecotType"
        ? ops.BitVectorType
        : string == "ByteVectorType"
        ? ops.ByteVectorType
        : string == "CompositeVectorType"
        ? ops.CompositeVectorType
        : string == "CompositeListType"
        ? ops.CompositeListType
        : string == "RootType"
        ? ops.RootType
        : string == "ContainerType"
        ? ops.RootType
        : string == "UnionType"
        ? ops.UnionType
        : string == "CompositeArrayType"
        ? ops.CompositeArrayType
        : string == "ContainerType"
        ? ops.ContainerType
        : string == "ContainerLeafNodeStructType"
        ? ops.ContainerType
        : string == "UnionType"
        ? ops.UnionType
        : null;
      const optionsString =
        string == "UintType" ? (
          <text>
            <span style={{ color: "green" }}>byteLength: </span>
            <span style={{ color: "red" }}>{`number`}</span>
          </text>
        ) : string == "NumberUintType" ? (
          <text>
            <span style={{ color: "green" }}>byteLength: </span>
            <span style={{ color: "red" }}>{`number < 8`}</span>
          </text>
        ) : string == "Number64UintType" ? (
          <text>
            <span style={{ color: "gray" }}>byteLength: 8</span>
          </text>
        ) : string == "BigIntUintType" ? (
          <text>
            <span style={{ color: "green" }}>byteLength: </span>
            <span style={{ color: "red" }}>{`number >= 8`}</span>
          </text>
        ) : string == "BasicArrayType" ? (
          <text>
            <span style={{ color: "green" }}>elementType: </span>
            <span style={{ color: "red" }}>{`<BasicType>`}</span>
          </text>
        ) : string == "BasicVectorType" ? (
          <text>
            <span style={{ color: "green" }}>elementType: </span>
            <span style={{ color: "red" }}>{`<BasicType>`}</span>
            <span style={{ color: "green" }}>, length: </span>
            <span style={{ color: "red" }}>number</span>
          </text>
        ) : string == "BasicListType" ? (
          <text>
            <span style={{ color: "green" }}>elementType: </span>
            <span style={{ color: "red" }}>{`<BasicType>`}</span>
            <span style={{ color: "green" }}>, limit: </span>
            <span style={{ color: "red" }}>number</span>
          </text>
        ) : string == "Number64ListType" ? (
          <text>
            <span style={{ color: "gray" }}>
              elementType: {`<Number64UintType>`}
            </span>
            <span style={{ color: "green" }}>, limit: </span>
            <span style={{ color: "red" }}>number</span>
          </text>
        ) : string == "BitListType" ? (
          <text>
            <span style={{ color: "gray" }}>
              elementType: {`<BooleanType>`}
            </span>
            <span style={{ color: "green" }}>, limit: </span>
            <span style={{ color: "red" }}>number</span>
          </text>
        ) : string == "BitVectorType" ? (
          <text>
            <span style={{ color: "gray" }}>
              elementType: {`<BooleanType>`}
            </span>
            <span style={{ color: "green" }}>, length: </span>
            <span style={{ color: "red" }}>number</span>
          </text>
        ) : string == "ByteVectorType" ? (
          <text>
            <span style={{ color: "gray" }}>elementType: {`<ByteType>`}</span>
            <span style={{ color: "green" }}>, length: </span>
            <span style={{ color: "red" }}>number</span>
          </text>
        ) : string == "CompositeVectorType" ? (
          <text>
            <span style={{ color: "green" }}>elementType: </span>
            <span style={{ color: "red" }}>{`<CompsositeType>`}</span>
            <span style={{ color: "green" }}>, length: </span>
            <span style={{ color: "red" }}>number</span>
          </text>
        ) : string == "CompositeListType" ? (
          <text>
            <span style={{ color: "green" }}>elementType: </span>
            <span style={{ color: "red" }}>{`<CompositeType>`}</span>
            <span style={{ color: "green" }}>, limit: </span>
            <span style={{ color: "red" }}>number</span>
          </text>
        ) : string == "RootType" ? (
          <text>
            <span style={{ color: "green" }}>expandedType: </span>
            <span style={{ color: "red" }}>{`<Type>`}</span>
          </text>
        ) : string == "ContainerType" ? (
          <text>
            <span style={{ color: "green" }}>fields: </span>
            <span style={{ color: "red" }}>{`<fieldName, fieldType>[]`}</span>
          </text>
        ) : string == "UnionType" ? (
          <text>
            <span style={{ color: "green" }}>types: </span>
            <span style={{ color: "red" }}>{`<Type>[]`}</span>
          </text>
        ) : string == "CompositeArrayType" ? (
          <text>
            <span style={{ color: "green" }}>elementType: </span>
            <span style={{ color: "red" }}>{`<CompositeType>`}</span>
          </text>
        ) : string == "ContainerLeafNodeStructType" ? (
          <text>
            <span style={{ color: "green" }}>fields: </span>
            <span style={{ color: "red" }}>{`<fieldName, fieldType>[]`}</span>
          </text>
        ) : null;
      setTypeName(func);
      setOptions(options);
      setOptionsString(optionsString);
    } else {
      handleChange("BooleanType");
    }
  }

  // useEffect(() => {
  //     }, [typeName]);

  function displayWindow(func) {
    return <div className="box">{display}</div>;
  }

  function isTrue(func) {
    return typeName != "Type" && ssz[func](new ssz[typeName](options));
  }

  function lodesTypes(func) {
    return names.map((name) => {
      const current = forks["altair"][name];
      return (
        ssz[func](current) && (
          <div className="row">
            <div className="col">
              <h4 style={{ color: "blue" }}>{`${func}(${name})`} </h4>
            </div>
            <div className="col">
              <h4 style={{ color: "indigo" }}>{`// true`}</h4>
            </div>
          </div>
        )
      );
    });
  }

  function menu(bool) {
    const trueFunc = isTypeFunctions.map((func) => {
      return func && isTrue(func) && func;
    });
    return (
      typeName != "Type" && (
        <div className="row">
          <div className="col">
            {isTypeFunctions.map((func) => {
              return (
                func && (
                  <>
                    <div className="row">
                      {bool == isTrue(func) && (
                        <div className="container">
                          <div className="row">
                            <div className="col-6">
                              <h4 className="text-start">{`${func}(type)`}</h4>
                            </div>
                            <div className="col-6">
                              <h4
                                style={{
                                  color: ssz[func](new ssz[typeName](options))
                                    ? "red"
                                    : "blue",
                                }}
                              >
                                {`// 
                                    ${ssz[func](
                                      new ssz[typeName](options)
                                    ).toString()}`}
                              </h4>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )
              );
            })}
          </div>
          <div className="col">
            {isTypeFunctions.map((func) => {
              return (
                func &&
                bool == isTrue(func) &&
                func == `is${typeName}` &&
                lodesTypes(func)
              );
            })}
          </div>
        </div>
      )
    );
  }

  const bottomTypes = [
    "Number64UintType",
    "BigIntUintType",
    "Number64ListType",
    "BitListType",
    "BitVectorType",
    "RootType",
    "ByteVectorType",
    "BooleanType",
  ];

  return (
    <div className="container">
      
      <div className="row">
        <div className="col-6 border">
          <div className="row">
            <div className="col">
              <TypeClasses
                functionspage={true}
                classObj={classObj}
                ssz={ssz}
                handleChange={handleChange}
                setSubMenu={setSubMenu}
                setGroup={setGroup}
                active={group}
                name={"Basic Types"}
                setSubGroup={setSubGroup}
                setSubSubMenu={setSubSubMenu}
              />{" "}
            </div>
            {/* <div className="row">
              <h1 className="text-center">000{display}000</h1>
            </div> */}
            <div className="row">
              {" "}
              <div className="col-2">{subMenu}</div>
              <div className="col-8">{subSubMenu}</div>
            </div>
          </div>
        </div>
        <div className="col-6 border">
          <div className="row">
            <text>
              <h4>
                var <span style={{ color: "green" }}> type</span> = new{" "}
                {`${typeName}`}(<span>{optionsString}</span>
                {`)`}
              </h4>
            </text>
          </div>
          <div className="container">
            aa{typeName != "Type" && menu(true)}bb
            {/* {menu(false)} */}
          </div>
          <div className="row">
            <div className="col">
              {typeName != "Type" &&
                bottomTypes.includes(typeName) &&
                Object.getOwnPropertyNames(
                  Object.getPrototypeOf(new ssz[typeName](options))
                ).map((p) => {
                  const b = new ssz[typeName](options)[p];
                  const a = b ? b.toString() : "";
                  const f = a.substr(0, a.indexOf(")") + 1);
                  const params =
                    a.includes("(") &&
                    a.substring(a.indexOf("(") + 1, a.indexOf(")"));
                  return (
                    p != "constructor" &&
                    b &&
                    params == "" &&
                    new ssz[typeName](options)[p]().toString() != "" && (
                      <div className="row">
                        <div className="col">
                          <h4>{`type.${f}`}</h4>
                        </div>
                        <div className="col">
                          {b &&
                            params == "" &&
                            new ssz[typeName](options)[p]().toString()}
                        </div>
                      </div>
                    )
                  );
                })}
            </div>
          </div>
          <div className="row">
            <div className="col">
              {typeName != "Type" &&
                bottomTypes.includes(typeName) &&
                Object.getOwnPropertyNames(
                  Object.getPrototypeOf(new ssz[typeName](options))
                ).map((p) => {
                  const b = new ssz[typeName](options)[p];
                  const a = b ? b.toString() : "";
                  const f = a.substr(0, a.indexOf(")") + 1);
                  const params =
                    a.includes("(") &&
                    a.substring(a.indexOf("(") + 1, a.indexOf(")"));
                  return (
                    p != "constructor" &&
                    b &&
                    params != "" && (
                      <div className="row">
                        {/* <div className='col'>
                      <h4>{`type.${f}`}</h4>
                      </div> */}
                        <div className="col px-0 py-1">
                          {b && params != "" && (
                            <h4>
                              <CodeBlock
                                text={`type.${b.toString()}`}
                                showLineNumbers={false}
                                theme={monoBlue}
                                language="javascript"
                              />
                            </h4>
                          )}
                        </div>
                      </div>
                    )
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
