import { useState, useEffect } from "react";
import BitvectorFiller from './BitvectorFiller';
const { createHash } = require("crypto");
 

export default function BitvectorForm() {
  const [size, setSize] = useState(0);
  const [value, setValue] = useState(0);
  const [type, setType] = useState("uint8");
  const [asBytes, setAsBytes] = useState("0x00");
  const [padded, setPadded] = useState("0x00000000000000000000000000000000");
  const [asHash, setAsHash] = useState(null);
  const [bitSet, setBitSet] = useState(["0"]);

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

  useEffect(() => {
    const newSet = BitvectorFiller(size);
    setBitSet(newSet); 
  }, [size])
  
  const changeValue = (event) => {
    setSize(event.target.value);
  };

  return (
    <>
    <div className='col-3'>
    <p>Size:</p>
      <input value={size} type="number" min={0} onChange={changeValue} />
    </div>
        <div className="col-3">
        BitSet: {bitSet}
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
