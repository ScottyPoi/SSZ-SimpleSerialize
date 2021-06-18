/** @module ssz */
import SHA256 from '@chainsafe/as-sha256';

/**
 * Hash used for hashTreeRoot
 */
export function hash(...inputs) {
  return SHA256.digest(Buffer.concat(inputs));
}

