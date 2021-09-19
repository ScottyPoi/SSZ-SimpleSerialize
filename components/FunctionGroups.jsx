import * as ssz from "@chainsafe/ssz"

export default function FilterFunctions(module, keyword) {
  return Object.entries(module)
    .map(([method, object]) => {
      return typeof object == keyword && method;
    })
    .sort();
}

const module = ssz;
export const symbols = FilterFunctions(module, "symbol");
export const functions = FilterFunctions(module, "function");
export const isFunctions = functions
  .map((func) => {
    return (
      new String(func).substr(0, 2) == "is" &&
      !new String(func).includes("Type") &&
      func
    );
  })
  .sort();

export const isTypeFunctions = functions
  .map((func) => {
    return (
      new String(func).substr(0, 2) == "is" &&
      new String(func).includes("Type") &&
      func
    );
  })
  .sort();
export const valueFunctions = functions
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
export const getFunctions = functions
  .map((func) => {
    return new String(func).includes("get") && func;
  })
  .sort();
export const otherFunctions = functions
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

export const objects = Object.entries(module)
  .map(([method, object]) => {
    return (
      typeof object == "object" &&
      !new String(method).includes("Type") &&
      method
    );
  })
  .sort();

export const bigints = Object.entries(module)
  .map(([method, object]) => {
    return typeof object == "bigint" && `${method}: ${object.toString()}`;
  })
  .sort();

export const typeFunctionList = ["VectorType", "ListType"];

