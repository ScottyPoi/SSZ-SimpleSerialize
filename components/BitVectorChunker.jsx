import BitSet from "bitset";

export default function BitVectorChunker(bitVector, vectorSize) {
  let size = vectorSize;
  let chunk_count = Math.floor((size + 255) / 256);
  const bv = [];
  for (let i=0;i<size;i++) {
      bv.push(bitVector[i])
  }

  bv.push("1")
  
  const string = bv.join("");
  let firstChunk = string.padEnd(256, "0")

  return firstChunk;
}
