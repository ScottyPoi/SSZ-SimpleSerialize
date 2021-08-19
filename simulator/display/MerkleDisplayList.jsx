
import BuildListTree from "../trees/BuildListTree";
export default function MerkleDisplayList(props) {
  let serialized = props.serialized;
  let values = props.values;
  let length = props.length;
  let size = props.size;
  let variable = props.variable;
    const valuesPerChunk = 256 / size
  let numberOfChunks = length / (256 / size);

  let totalLeaves = getNextPowerOfTwo(numberOfChunks)






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

  return (
    <>
      <div className="container">
        <div className="row">
          <BuildListTree 
      limit={length}
      chunks={numberOfChunks}
      length={variable}
      valuesPerChunk={valuesPerChunk}
      numberofLeaves={totalLeaves}
      
      />
</div>
</div>
    </>
  );
}
