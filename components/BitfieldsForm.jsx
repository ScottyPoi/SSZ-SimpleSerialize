import { useState, useEffect } from "react";
const { createHash } = require("crypto");
import BitlistSerializer from "./BitlistSerializer";
import BitvectorSerializer from "./BitvectorSerializer";
export default function BitfieldsForm() {
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
    const pad = Number(value).toString(16).padStart(32, "0");
    setPadded(`0x${pad}`);
  }, [asBytes]);

  useEffect(() => {
    const val = Number(value).toString(16);
    const valPadded = val.padStart(32, "0");
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
      <>
    <div className="row">
      <div className="col-3">
        <p>Type:</p>
        <form>
          <label>
            <select value={type} onChange={changeType}>
              <option value="bitlist">Bitlist</option>
              <option value="bitvector">Bitvector</option>
            </select>
          </label>
        </form>
        </div>
        <div className='row'>
        {type === "bitvector" ? <BitvectorSerializer /> : <BitlistSerializer />}
      </div>
    </div>
    </>
  );
}
