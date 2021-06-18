import styles from "../styles/UintText.module.css";
import * as BitVector from "../../../ssz/src/types/composite/bitVector";
import * as BigInt from "../../../ssz/src/types/basic/BigIntUintType";
export default function BitVectorText(props) {
  let _chunk = props.chunk;
  let _length = props.length;
  let _idx = props.idx;

  const chunk_count = props.num;
  const split = (_length * 2) % 512;

  let red = _idx + 1 == chunk_count ? 0 : _idx % 2 == 1 ? 240 : 0;
  let green = _idx + 1 == chunk_count ? 160 : 0;
  let blue = _idx + 1 == chunk_count ? 0 : _idx % 2 == 0 ? 256 : 180;
  let color = props.emtpy ? 'gray' : `rgb(${red},${green},${blue})`;

  let fontSize = chunk_count < 2 ? 'medium' : chunk_count < 5 ? 'small' : 'x-small'

  function toHexString(byteArray) {
    return Array.prototype.map
      .call(byteArray, function (byte) {
        return ("0" + (byte & 0xff).toString(16)).slice(-2);
      })
      .join("");
  }

  function getNextPowerOfTwo(number) {
    if (number <= 1) {
      return 1;
    } else {
      let i = 2;
      while (i < Infinity) {
        if (number <= i) {
          return i;
        } else {
          i *= 2;
        }
      }
    }
  }

  let numberOfLeaves = getNextPowerOfTwo(chunk_count);

  let emptyLeaves = (numberOfLeaves = chunk_count);

  function parseChunk() {
    if (_idx == chunk_count - 1) {
      let bits = _chunk.slice(0, split);
      let lengthBit = _chunk.slice(split, split + 2);
      let pads = _chunk.slice(split + 2);

      return (
        <div className="col">
          <div
            className="row"
            style={{
              border: "solid black 2px",
              color: "gold",
              backgroundColor: "green",
            }}
          >
            0x{props.hex}
          </div>
          <div className="row" style={{ border: "solid green" }}>
            <span style={{fontSize: fontSize}}  className={`${styles.hex} p-0`}>
              {bits.toString()}
              <span style={{ backgroundColor: "black", color: "gold"}}>
                {lengthBit}
              </span>
              <span className={`${styles.padding}`}>{pads.toString()} </span>
            </span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="col">
          <div
            className="row"
            style={{
              border: "solid black 2px",
              color: "gold",
              backgroundColor: color,
            }}
          >
            <span className='p-0'>0x{props.hex}</span>
          </div>
          <div
            className="row"
            style={{ border: `solid ${color}`, display: `block` }}
          >
            <div className='p-0' style={{ color: color, fontSize:'x-small' }}>{_chunk.toString()}</div>
          </div>
        </div>
      );
    }
  }
  const parsed = parseChunk();

  return parsed
}
