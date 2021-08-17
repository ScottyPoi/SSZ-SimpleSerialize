import { useEffect, useState } from "react";
import * as NumberUintType from "../ssz/types/basic/NumberUintType";
import DisplayListDemo from "../display/DisplayListDemo";
import BuildHashTree from "../trees/BuildHashTree";
import WalkDisplayList from "../display/WalkDisplayList";
import WalkDisplayContainer from "../display/WalkDisplayContainer";

export default function WalkContainerControls(props) {
  const [length, setLength] = useState(5);

  let digits = "abcdef0123456789";

  let serialized = [];

  for (let j = 0; j < 16; j++) {
    let chunk = "";
    for (let i = 0; i < 64; i++) {
      let digit = digits[Math.floor(Math.random() * 16)];
      chunk += digit;
    }
    serialized.push(chunk);
  }

  function handleIncrease() {
    length < 16 && setLength(length + 1);
  }

  function handleDecrease() {
    length > 1 && setLength(length - 1);
  }

  return (
    <>
      <div className="row justify-content-evenly">
        <div className="col-2 px-3">
          <button
            className="btn btn-outline-primary"
            type="submit"
            onClick={handleDecrease}
          >
            Less
          </button>
        </div>
        <div className="col-3">
          <h4>Container: {length} fields</h4>
        </div>
        <div className="col-2 px-3">
          <button
            className="btn btn-outline-primary"
            type="submit"
            onClick={handleIncrease}
          >
            More
          </button>
        </div>
        <div className='col-5'></div>
</div>
        <div className="row pt-3">
          <WalkDisplayContainer length={length} values={serialized} size={256}>
            {props.children}
          </WalkDisplayContainer>
      </div>
    </>
  );
}
