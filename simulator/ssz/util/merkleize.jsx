/** @module ssz */
import {hash} from "./hash";
import {nextPowerOf2, bitLength} from "./math";
import {zeroHashes} from "./zeros";

/** @ignore */
export function merkleize(_chunks, padFor = 0) {
  let chunks = Array.from(_chunks)
  const layerCount = bitLength(nextPowerOf2(chunks.length));
  if (chunks.length == 0) {
    return zeroHashes[layerCount];
  }
  // Instead of pushing on all padding zero chunks at the leaf level
  // we push on zero hash chunks at the highest possible level to avoid over-hashing
  let layer = 0;
  while (layer < layerCount) {
    // if the chunks.length is odd
    // we need to push on the zero-hash of that level to merkleize that level
    if (chunks.length % 2 == 1) {
      chunks.push(zeroHashes[layer]);
    }
    for (let i = 0; i < chunks.length; i += 2) {
      const h = hash(chunks[i], chunks[i + 1]);
      chunks[i / 2] = Buffer.from(h.buffer, h.byteOffset, h.byteLength);
    }
    chunks.splice(chunks.length / 2, chunks.length / 2);
    layer++;
  }
  return chunks[0].toString('hex');
}

/** @ignore */
export function mixInLength(root, length) {
  const lengthBuf = Buffer.alloc(32);
  lengthBuf.writeUIntLE(length, 0, 6);
  const h = hash(root, lengthBuf);
  return Buffer.from(h.buffer, h.byteOffset, h.byteLength);
}
