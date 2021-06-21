import { createHash } from 'crypto';

/**
 * Hash two 32 byte arrays
 */
export default function hash(a, b="") {
    let hashed = createHash('sha256');
    hashed.update(a+b)
  return hashed.digest();
}