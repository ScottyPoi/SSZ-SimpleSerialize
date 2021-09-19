import { useState } from "react";
import ShowFunction from "./ShowFunction";
import MapMethods from "./MapMethods";



export default function Typeinfo() {
  const [display, setDisplay] = useState("Type");
  return (
    <div className="container">
            <div className="row p-3">
<h1 className='text-center'>SSZ in TypeScript by Chainsafe</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <MapMethods handleChange={setDisplay} />
        </div>

        <div className="col-6">
          {display}<br/>
          <ShowFunction func={display} />
        </div>
      </div>
    </div>
  );
}

