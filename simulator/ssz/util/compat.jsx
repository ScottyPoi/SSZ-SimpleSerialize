import {hash as _hash} from "./hash";
import {merkleize as _merkleize, mixInLength as _mixInLength} from "./merkleize";

export function hash(...inputs) {
  return Uint8Array.from(_hash(...inputs.map(Buffer.from)));
}

export function merkleize(chunks, padTo) {
  return _merkleize(Array.from(chunks).map(Buffer.from), padTo);
}

export function mixInLength(root, length) {
  const lengthBuf = Buffer.alloc(32);
  lengthBuf.writeUIntLE(length, 0, 6);
  return hash(root, lengthBuf);
}
