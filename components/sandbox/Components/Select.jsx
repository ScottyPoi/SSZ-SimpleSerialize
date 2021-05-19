import React from "react";
import CaretDown from "./CaretDown";

export default function Select({...props}) {
  return (
    <div className="inline-block relative w-64 mb-2">
      <select className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        {...props}
        value={props.value}>
		{props.options}
      </select>
	  
    </div>
  );
}
