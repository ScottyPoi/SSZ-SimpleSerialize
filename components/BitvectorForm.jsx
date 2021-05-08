import { useState, useEffect } from "react";
const { createHash } = require("crypto");

export default function BitvectorForm() {
  const [size, setSize] = useState(1);
  const [value, setValue] = useState(0);
  const [type, setType] = useState("uint8");
  const [asBytes, setAsBytes] = useState("0x00");
  const [padded, setPadded] = useState("0x00000000000000000000000000000000");
  const [asHash, setAsHash] = useState(null);
  const [bitSet, setBitSet] = useState([]);
  const [chunks, setChunks] = useState(["00000000"]);

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
  }, [size]);

  useEffect(() => {
    const newChunks = BitVectorChunker(bitSet, size);
    setChunks(newChunks);
  }, [bitSet]);

  const changeValue = (event) => {
    setSize(event.target.value);
  };


  return (
    <>
      <div className="col-3">
        <p>Size:</p>
        <input value={size} type="number" min={1} onChange={changeValue} />
      </div>
      <div className="col-3 text-break">BitSet: {bitSet}</div>
      <div className="col-3 text-break">
        BitVector:
        {chunks.map((chunk, index) => {
          return (
            <div key={index}>
              {chunk.toString()}
              <br />
            </div>
          );
        })}
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

function BitVectorChunker(bitVector, vectorSize) {
  let size = vectorSize;
  let chunk_count = Math.floor((size + 7) / 8);
  let packedChunks = (chunk_count - 1) * 8;
  let unpackedChunks = -1 * (size - packedChunks);
  const bytes = [];
  const bv = [];
  for (let i = 0; i < size; i++) {
    bv.push(bitVector[i]);
  }

  bv.push("1");

  const string = bv.join("");

  if (size > 8) {
    for (let i=0; i<(Math.floor(size/8)+1); i++) {
      let fullChunk = string.slice(i*8, i*8+8).padEnd(8, "0").split("").reverse();
      bytes.push(fullChunk);
    }
  } else {
    let lastChunk = string.padEnd(8, "0").split("").reverse();
    bytes.push(lastChunk);
  }
  console.log(bytes);
  return bytes;
}

function BitvectorFiller(vectorSize) {
  const size = vectorSize;
  const array = [];
  for (let i = 0; i < size; i++) {
    let rand = Math.floor(Math.random() * 2);
    while (rand === 2) {
      rand = Math.floor(Math.random() * 2);
    }
    array.push(rand);
  }
  const str = array.toString();
  const char = Array.from(str);
  return array;
}
