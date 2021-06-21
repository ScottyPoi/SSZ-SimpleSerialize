import {isTreeBacked, ITreeBacked} from "./tree";


/**
 * A BackedValue is a value that is backed by a non-structural type
 *
 * It is implemented as an ES6 Proxy object that provides
 * - convenient access to the structural properties corresponding to its type
 * - additional methods for backing-specific implementations of ssz operations
 */

export function isBackedValue(value) {
  return isTreeBacked(value);
}
