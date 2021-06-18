export default function UintMath() {
    return null
}

export function deserializeUintFromBytes(data, offset, byteLength) {
    let isInfinity = true;
    let output = 0;
    for (let i = 0; i < byteLength; i++) {
      output += data[offset + i] * 2 ** (8 * i);
      if (data[offset + i] !== 0xff) {
        isInfinity = false;
      }
    }
    if (byteLength > 6 && isInfinity) {
      return Infinity;
    }
    return Number(output);
}

export function serializeUintToBytes(value, byteLength, output, offset) {
    let array = new Uint8Array(32);
    array = Uint8Array.from(output);
    let val = value;
    const MAX_BYTE = 0xff;
    for (let i = 0; i < byteLength; i++) {
      array[offset + i] = val & MAX_BYTE;
      val = Math.floor(val / 256);
    }
    return array;
  };