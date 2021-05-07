import { useState, useEffect } from "react";
import BitlistFiller from './BitlistFiller';
const { createHash } = require("crypto");
 

export default function BitlistForm() {
  const [limit, setLimit] = useState(0);
  const [value, setValue] = useState(0);
  const [type, setType] = useState("uint8");
  const [asBytes, setAsBytes] = useState("0x00");
  const [padded, setPadded] = useState("0x00000000000000000000000000000000");
  const [asHash, setAsHash] = useState(null);

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

  const changeValue = (event) => {
    setLimit(event.target.value);
  };

  return (
    <>
    <div className='col-3'>
    <p>Limit:</p>
      <input value={limit} type="number" min={0} onChange={changeValue} />
    </div>
        <div className="col-3">
        <BitlistFiller limit={limit} />
      </div>
      <div className="col-3">
        in action
      </div>
      <div className="col-3">
        <div>SSZ Type: {type}</div>
        <div>Value: {value}</div>
        <div>As Bytes: {asBytes}</div>
        <div>Padded: {padded}</div>
        <div>As Hash: {asHash}</div>
      </div>

    </>
  );
}
