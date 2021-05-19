import React from "react";
import Select from "./Select";
import ChangeFunction from "./ChangeFunction";
export default function TopBar({ language, selectfunction, children }) {
  return (
    <div className="list-reset flex flex-wrap items-center justify-between my-2">
      <div>
        <Select {...selectfunction}>{children}</Select>
      </div>
      <div>
        <Select {...language} />
      </div>
    </div>
  );
}
