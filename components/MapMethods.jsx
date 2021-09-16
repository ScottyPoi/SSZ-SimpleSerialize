import * as ssz from "@chainsafe/ssz";
import { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";

import { ForkName, typeNames, forks } from "../sszsrc/util/types";

const defaultFork = "altair";

const forkList = ["altair", "phase0", "prim"];
const fork = defaultFork;
const types = forks[fork];
const names = typeNames(types);
export default function MapMethods(props) {
  const [fun, setFun] = useState();
  function menu(list, name) {
    return (
      <div className="col">
        {name}
        <ul>
          {list.map((func, idx) => {
            return (
              ssz[func] && (
                <button
                  type="button"
                  className="btn "
                  onClick={() => props.handleChange(func)}
                >
                  {func}
                </button>
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
      return new String(func).substr(0, 2) == "is" && func;
    })
    .sort();
  const typeFunctions = functions
    .map((func) => {
      return (
        new String(func).includes("Type") &&
        !new String(func).includes("is") &&
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

  const other = Object.entries(module)
    .map(([method, object]) => {
      return [method, typeof object];
    })
    .sort();

  const types = other.map(([symbol, type]) => {
    return type;
  });

  return (
    <div className="container">
      <div className="row">
        {menu(typeFunctions, "TYPE Classes")}
        {menu(isFunctions, "IS Functions")}
      </div>
      <div className="row">
        {menu(valueFunctions, "VALUE Classes")}
        {menu(getFunctions, "GET Functions")}
      </div>
      <div className="row">
        {menu(objects, "objects")}
        {menu(otherFunctions, "Other Functions")}
      </div>
    </div>
  );
}
