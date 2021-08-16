import styles from "../styles/UintText.module.css";

export default function WalkContainerText(props) {
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
  let red =  _idx % 2 == 1 ? 240 : 0;
  let green =  0;
  let blue =  _idx % 2 == 0 ? 256 : 180;
  let color = `rgb(${red},${green},${blue})`;

  function getLength() {
    return props.length;
  }

  function getSize() {
    return props.size;
  }

  let valueBlocks = [];

  function parseChunk() {
      return (
        <div
          className="col text-break"
          style={{ border: `solid ${color}`, display: `inline-block` }}
        >
<span>{_chunk}</span>
  
        </div>
      );
    }

  const parsed = parseChunk();

  return parsed;
}
