import BuildContainerTree from "../trees/BuildContainerTree";
import BuildMerkleVectorTree from "../trees/BuildMerkleVectorTree";
import BuildTree from "../trees/BuildTree";
import BuildVectorTree from "../trees/BuildVectorTree";
export default function MerkleDisplayContainer(props) {
  // let serialized = props.serialized;
  let values = props.values;
  let length = props.length;
  const size = 256;
  // let variable = props.variable;
  const valuesPerChunk = 256 / size;
  let numberOfChunks = length / (256 / size);


  let totalLeaves = getNextPowerOfTwo(numberOfChunks);


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
          {/* <BuildTree NUMBER_OF_VALUES={totalLeaves} /> */}
          {/* <BuildMerkleVectorTree NUMBER_OF_VALUES={numberOfChunks} /> */}
          <BuildVectorTree NUMBER_OF_VALUES={numberOfChunks} />
      </div>
    </>
  );
}
