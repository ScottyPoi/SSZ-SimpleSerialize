import { useState, useEffect } from "react";
const { createHash } = require("crypto");
import BooleanForm from './BooleanForm';
export default function BasicForm() {
  const [value, setValue] = useState(0);
  const [type, setType] = useState("uint8");
  const [asBytes, setAsBytes] = useState("0x00");
  const [padded, setPadded] = useState("0x00000000000000000000000000000000");
  const [asHash, setAsHash] = useState(null);

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const changeType = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    setValue(range);
  }, [type]);

  useEffect(() => {
    const byte = Number(value).toString(16);
    setAsBytes(`0x${byte}`);
  }, [value]);

  useEffect(() => {
    const pad = asBytes.padEnd(34, "0");
    setPadded(pad);
  }, [asBytes]);

  useEffect(() => {
    const val = Number(value).toString(16);
    const valPadded = val.padEnd(32, "0");
    const hash = createHash("sha256");
    hash.update(valPadded, "hex");
    const hashed = hash.digest("hex");
    setAsHash(hashed);
  }, [padded]);

  const range =
    type === "boolean"
      ? 1
      : type === "uint8"
      ? 255
      : type === "uint16"
      ? 2 ** 16
      : type === "uint32"
      ? 2 ** 32
      : type === "uint64"
      ? 2 ** 64
      : type === "uint128"
      ? 2 ** 128
      : type === "uint256"
      ? 2 ** 256
      : null;

  return (
    <div className="row">
      <div className="col">
        <p>Type:</p>
        <form>
          <label>
            <select value={type} onChange={changeType}>
              <option value="boolean">Boolean</option>
              <option value="uint8">Uint8</option>
              <option value="uint16">Uint16</option>
              <option value="uint32">Uint32</option>
              <option value="uint64">Uint64</option>
              <option value="uint128">Uint128</option>
              <option value="uint256">Uint256</option>
            </select>
          </label>
        </form>

        <p>Value:</p>
          <input
            value={value}
            type="number"
            min={0}
            max={range}
            onChange={changeValue}
          />
      </div>
      <div className="col">
        <div>SSZ Type: {type}</div>
        <div>Value: {value}</div>
        <div>As Bytes: {asBytes}</div>
        <div>Padded: {padded}</div>
        <div>As Hash: {asHash}</div>
      </div>
    </div>
  );
}
