import React from "react";
import Select from "./Select";

export default function TopBar({ select, toggle, language }) {
  return (
    <div className="list-reset flex flex-wrap items-center justify-between my-2">
      <Select {...language} />
      {/* <Select {...select} /> */}
    </div>
  );
}
