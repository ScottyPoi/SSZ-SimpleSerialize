import SerializeWalk from '../../sszsrc/components/SerializeWalk.tsx'
import { auto } from "@popperjs/core";
import { useState, useEffect } from "react";
import { Type, toHexString } from '@chainsafe/ssz';
import _createRandomValue from "../../sszsrc/components/RandomValue";
import { forks} from '../../sszsrc/util/types';
import { inputTypes } from '../../sszsrc/util/input_types'
export default function UintBox(props) {
  const [uintValue, setUintValue] = useState("ef");
  const [uintString, setUintString] = useState("Uint8")
  const [uintSize, setUintSize] = useState(1);
  const [string, setString] = useState("0xef");
  const [display, setDisplay] = useState();
  const [input, setInput] = useState()


  function handleSizeChange(size) {
    setUintSize(size);
    let value = "";
    let digits = "0123456789abcdef"
    for (let i=0;i<size*2;i++) {
      value += digits[Math.floor(Math.random() * 16)]
    }
    setUintValue(value)
    setUintString(list[size])
    let str = `0x${value}`;
    str = str.padEnd(66, "0");
    setString(str);
    setDisplay(
      <p>
        <span style={{ color: "blue" }}>{str.substr(0, 2)}</span>
        <span style={{ color: "green" }}>{str.substr(2, size * 2)}</span>
        <span style={{ color: "red" }}>
          {str.substr(size * 2 + 2, 66 - size * 2)}
        </span>
      </p>
    );

  };

  useEffect(() => {
    handleSizeChange(1)
  }, [])

  const list = [
    "Boolean",
    "Bytes32",
    "Uint8",
    "Uint16",
    "Uint32",
    "Uint64",
    "Uint128",
    "Uint256",
  ];

  const uintSelect = () => {
    return (
      <>
            <div className='col-3'>

</div>
      <div className='col-6'><select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => handleSizeChange(e.target.value)}
        >
          <option value={1}>Uint8</option>
          <option value={2}>Uint16</option>
          <option value={4}>Uint32</option>
          <option value={8}>Uint64</option>
          <option value={16}>Uint128</option>
          <option value={32}>Uint256</option>
        </select></div>
      <div className='col-3'>

      </div>
        
      </>
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <p className="text-center">as 32 Byte leaf: </p>
        <div className="col text-break border">{display}</div>
      </div>
      <div className="row">
        <p className="text-center">^</p>
      </div>{" "}
      <div className="row justify-content-center">
        <div className="col border text-break">
          <p>
            <span> serialized: </span>
            <span style={{ color: "blue" }}>{string.substr(0, 2)}</span>
            <span style={{ color: "green" }}>
              {string.substr(2, uintSize * 2)}
            </span>
          </p>
        </div>
      </div>
      <div className="row">{uintSelect()}</div>
    </div>
  );
}
