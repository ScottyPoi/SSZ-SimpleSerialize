import styles from "../styles/UintText.module.css";

export default function VectorText(props) {
  let _chunk = props.chunk;
  let _length = props.length;
  let _idx = props.idx;
  let numberOfLeaves = props.numberOfLeaves;
  let numberOfChunks = props.numberOfChunks;
  let emptyLeaves = props.emptyLeaves;

  const chunk_count = props.numberOfChunks;
  let values_per_chunk = 256 / props.size;
  const size = props.size;

  const split = (_length * 2) % 64;
  let red = _idx + 1 == chunk_count ? 0 : _idx % 2 == 1 ? 240 : 0;
  let green = _idx + 1 == chunk_count ? 160 : 0;
  let blue = _idx + 1 == chunk_count ? 0 : _idx % 2 == 0 ? 256 : 180;
  let color = `rgb(${red},${green},${blue})`;

  function getLength() {
    return props.length;
  }

  function getSize() {
    return props.size;
  }

  let valueBlocks = [];

  function parseChunk() {
    let valueBlocks = [];
    for (let i = 0; i < _chunk.length; i += size / 4) {
      valueBlocks.push(_chunk.substring(i, i + size / 4));
    }

    if (_idx === chunk_count - 1) {
      let len = getLength();
      let size = getSize();
      let bits = valueBlocks.slice(0, len % (256 / size));
      let bitBlocks = [];
      let pads = valueBlocks.slice(
        (len % (256 / size)) + 1,
        valueBlocks.length - 1
      );
      let lengthBit = pads[0];
      bits = bits;
      for (let i = 0; i < bits.length; i += size / 4) {
        bitBlocks.push([bits.slice(i, i + size / 4)]);
      }
      return (
        <div className="col" >
          {" "}
          <div className="row" style={{ border: "solid green", backgroundColor: "green", color: 'gold' }}>
            <text style={{fontSize:'small'}}>0x{_chunk}</text>
          </div>
          <div className='row text-break' style={{ border: 'solid green 2px'}}>
          <text className={`${styles.hex} text-break p-0`}>
            0x
            {bits.map((bit) => {
              return (
                <span style={{ color: "green", border: "solid green 1px"}}>
                  {bit}
                </span>
              );
            })}
            <span style={{ backgroundColor: "black", color: "gold"}}>
              {valueBlocks[len % values_per_chunk]}
            </span>
            <span
              style={{ border: "solid black"}}
              className={`${styles.padding} text-break`}
            >
              {pads}
            </span>
          </text>
        </div>
        </div>
      );
    } else {
      return (
        <div
          className="col"
          style={{ border: `solid ${color}`, display: `inline-block` }}
        >
                    <div className="row" style={{ border: `solid ${color}`, backgroundColor: color, color: 'gold' }}>
            <text style={{fontSize:'small', margin:'0'}}>0x{_chunk}</text>
          </div>
          0x
          {valueBlocks.map((value) => {
            return (
              <span
                style={{
                  border: `solid ${color} 1px`
                }}
              >
                {value}
              </span>
            );
          })}
          {/* {valueBlocks.reverse().map((block) => {
            return (
              <div style={{ color: color, border: `solid ${color}`, display: 'inline-block' }}>
                {block.reverse().map((value) => {
                    return value
                })}
              </div>
            );
          })} */}
        </div>
      );
    }
  }
  const parsed = parseChunk();

  return parsed;
}
