import * as ssz from "@chainsafe/ssz";
import { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";
import TypeClasses from "./TypeClasses";
import { ForkName, typeNames, forks } from "../sszsrc/util/types";

const defaultFork = "altair";

const forkList = ["altair", "phase0", "prim"];
const fork = defaultFork;
const types = forks[fork];
const names = typeNames(types);
export default function MapMethods(props) {
  const [fun, setFun] = useState();
  function menu(lst, name) {
    const list = [...lst]
    return (
      <div className="col">
        <h3 className="text-center">{name}</h3>
        <ul className="nav nav-pills">
          {list.map((func, idx) => {
            return (
              ssz[func] && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-secondary m-1"
                    onClick={() => props.handleChange(func)}
                  >
                    {func}
                  </button>
                </li>
              )
            );
          })}
        </ul>
      </div>
    );
  }
  const module = ssz;
  const symbols = Object.entries(module)
    .map(([method, object]) => {
      return typeof object == "symbol" && method;
    })
    .sort();
  const functions = Object.entries(module)
    .map(([method, object]) => {
      return typeof object == "function" && method;
    })
    .sort();
  const isFunctions = functions
    .map((func) => {
      return (
        new String(func).substr(0, 2) == "is" &&
        !new String(func).includes("Type") &&
        func
      );
    })
    .sort();
  const isTypeFunctions = functions
    .map((func) => {
      return (
        new String(func).substr(0, 2) == "is" &&
        new String(func).includes("Type") &&
        func
      );
    })
    .sort();
  const valueFunctions = functions
    .map((func) => {
      return (
        new String(func).includes("Value") &&
        !new String(func).includes("get") &&
        !new String(func).includes("Values") &&
        !new String(func).includes("is") &&
        func
      );
    })
    .sort();
  const getFunctions = functions
    .map((func) => {
      return new String(func).includes("get") && func;
    })
    .sort();
  const otherFunctions = functions
    .map((func) => {
      return (
        new String(func).includes("Values") |
          !new String(func).includes("Value") &&
        !new String(func).includes("is") &&
        !new String(func).includes("Type") &&
        !new String(func).includes("get") &&
        func
      );
    })
    .sort();

  const objects = Object.entries(module)
    .map(([method, object]) => {
      return (
        typeof object == "object" &&
        !new String(method).includes("Type") &&
        method
      );
    })
    .sort();

  const numbers = Object.entries(module)
    .map(([method, object]) => {
      return method;
    })
    .sort();
  const bigints = Object.entries(module)
    .map(([method, object]) => {
      return typeof object == "bigint" && `${method}: ${object.toString()}`;
    })
    .sort();

  const typeFunctionList = ["VectorType", "ListType"];

  const other = Object.entries(module)
    .map(([method, object]) => {
      return [method, typeof object];
    })
    .sort();

  const types = other.map(([symbol, type]) => {
    return type;
  });

  return (
    <div className="d-flex flex-row p-0 m-0">
      <div className="d-flex flex-column border border-3">
        <h3>Type Classes:</h3>
        <br />
        <TypeClasses ssz={ssz} handleChange={props.handleChange} />
      </div>
      <div className="d-flex flex-column m-0 border border-3">
        <div className="d-flex flex-row mx-3">
          {menu(typeFunctionList, "Type Functions")}
        </div>
        <div className="d-flex flex-row mx-3">
          {menu(isTypeFunctions, "IsType Functions")}
        </div>
      </div>
      <div className="d-flex flex-column border border-3">
        <div className="d-flex flex-row mx-3">{menu(objects, "Handlers")}</div>
        <div className="d-flex flex-row mx-3">
          {menu(getFunctions, "GET Functions")}
        </div>
        <div className="d-flex flex-row mx-3">
          {menu(isFunctions, "IS Functions")}
        </div>
        <div className="d-flex flex-row mx-3">
          {menu(valueFunctions, "VALUE Classes")}
        </div>
        <div className="d-flex flex-row mx-3">
          {menu(otherFunctions, "Other Functions")}
        </div>
      </div>
    </div>
  );
}
