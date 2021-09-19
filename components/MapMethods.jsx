import * as ssz from "@chainsafe/ssz";
import { useState } from "react";
import { CopyBlock, monoBlue } from "react-code-blocks";
import TypeClasses from "./TypeClasses";
import SSZMenu from './sszmenu'
import { isFunctions, isTypeFunctions, valueFunctions, getFunctions, otherFunctions, objects, typeFunctionList } from "./FunctionGroups";
export default function MapMethods(props) {
  // const module = ssz;
  // function filterFunctions(module, keyword) {
  //   return Object.entries(module)
  //     .map(([method, object]) => {
  //       return typeof object == keyword && method;
  //     })
  //     .sort();
  // }
  // const symbols = filterFunctions(module, "symbol");
  // const functions = filterFunctions(module, "function");
  // const isFunctions = functions
  //   .map((func) => {
  //     return (
  //       new String(func).substr(0, 2) == "is" &&
  //       !new String(func).includes("Type") &&
  //       func
  //     );
  //   })
  //   .sort();

  // const isTypeFunctions = functions
  //   .map((func) => {
  //     return (
  //       new String(func).substr(0, 2) == "is" &&
  //       new String(func).includes("Type") &&
  //       func
  //     );
  //   })
  //   .sort();
  // const valueFunctions = functions
  //   .map((func) => {
  //     return (
  //       new String(func).includes("Value") &&
  //       !new String(func).includes("get") &&
  //       !new String(func).includes("Values") &&
  //       !new String(func).includes("is") &&
  //       func
  //     );
  //   })
  //   .sort();
  // const getFunctions = functions
  //   .map((func) => {
  //     return new String(func).includes("get") && func;
  //   })
  //   .sort();
  // const otherFunctions = functions
  //   .map((func) => {
  //     return (
  //       new String(func).includes("Values") |
  //         !new String(func).includes("Value") &&
  //       !new String(func).includes("is") &&
  //       !new String(func).includes("Type") &&
  //       !new String(func).includes("get") &&
  //       func
  //     );
  //   })
  //   .sort();

  // const objects = Object.entries(module)
  //   .map(([method, object]) => {
  //     return (
  //       typeof object == "object" &&
  //       !new String(method).includes("Type") &&
  //       method
  //     );
  //   })
  //   .sort();

  // const bigints = Object.entries(module)
  //   .map(([method, object]) => {
  //     return typeof object == "bigint" && `${method}: ${object.toString()}`;
  //   })
  //   .sort();

  // const typeFunctionList = ["VectorType", "ListType"];

  return (
    <div className="d-flex flex-row p-0 m-0">
      <div className="d-flex flex-column border border-3">
        <div className="row">
          <h3 className='text-center'>Type Classes:</h3>
        </div>
          <TypeClasses ssz={ssz} handleChange={props.handleChange} />
      </div>
      <div className="d-flex flex-column m-0 border border-3">
        <SSZMenu handleChange={props.handleChange} ssz={ssz} lst={typeFunctionList} name="Type Functions" />
        <SSZMenu handleChange={props.handleChange}  ssz={ssz} lst={isTypeFunctions} name="IsType Functions" />
      </div>
      <div className="d-flex flex-column border border-3">
        <SSZMenu handleChange={props.handleChange}  ssz={ssz} lst={objects} name="Handlers" />
        <SSZMenu handleChange={props.handleChange}  ssz={ssz} lst={getFunctions} name="GET Functions" />
        <SSZMenu handleChange={props.handleChange}  ssz={ssz} lst={isFunctions} name="IS Functions" />
        <SSZMenu handleChange={props.handleChange}  ssz={ssz} lst={valueFunctions} name="VALUE Classes" />
        <SSZMenu handleChange={props.handleChange}  ssz={ssz} lst={otherFunctions} name="Other Functions" />
      </div>
    </div>
  );
}
