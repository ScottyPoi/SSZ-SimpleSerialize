/** @ignore */
export function bitLength(n) {
  const bitstring = n.toString(2);
  if (bitstring === "0") {
    return 0;
  }
  return bitstring.length;
}

/** @ignore */
export function nextPowerOf2(n) {
  return n <= 0 ? 1 : Math.pow(2, bitLength(n - 1));
}

/** @ignore */
export function previousPowerOf2(n) {
  return n === 0 ? 1 : Math.pow(2, bitLength(n) - 1);
}
