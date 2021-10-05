import * as ssz from "@chainsafe/ssz"

export default function FilterFunctions(module, keyword) {
  return Object.entries(module)
    .map(([method, object]) => {
      return typeof object == keyword && method;
    })
    .sort();
}

export const symbols = FilterFunctions(ssz, "symbol");
export const functions = FilterFunctions(ssz, "function");
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
      !new String(func).includes("Values") &&
      !new String(func).includes("isBackedValue") &&
      !new String(func).includes("getTree") &&
      !new String(func).includes("proxy") &&
      func
    );
  })
  .sort();
export const getFunctions = functions
  .map((func) => {
    return new String(func).includes("get") && func;
  })
  .sort();
  
  export const objects = ["TreeProxyHandler", "proxyWrapTreeValue"]
  
  export const bigints = Object.entries(module)
  .map(([method, object]) => {
    return typeof object == "bigint" && `${method}: ${object.toString()}`;
  })
  .sort();

  export const typeFunctionList = ["VectorType", "ListType"];
  
  
  export const otherFunctions = functions
    .map((func) => {
      return (
        !symbols.includes(func) &&
        !valueFunctions.includes(func) &&
        !getFunctions.includes(func) &&
        !objects.includes(func) &&
        !bigints.includes(func) &&
        !typeFunctionList.includes(func) &&
        !isTypeFunctions.includes(func) &&
        !isFunctions.includes(func) &&
        !func.includes("Type") &&
        func
      );
    })
    .sort();