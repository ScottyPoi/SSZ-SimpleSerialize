import BasicArrayType from "../composite/BasicArrayType";
import CompositeVectorType from "../composite/CompositeVectorType";

export default function VectorType({ ...props }) {
  const values = props.values;
  const vectorRoot = props.vectorRoot;
  const fullChunks = props.fullChunks;
  const vectorType = props.vectorType;
  const elementType = props.elementType;
  const elementSize = props.elementSize;
  const serializeToBytes = props.serializeToBytes;
  const _deserializeFromBytes = props.deserializeFromBytes;
  const uintType = props.uintType;
  const length = props.length;
  const getSerializedElementLength = props.getSerializedElementLength;
  const getSerializedVectorLength = props.getSerializedVectorLength;
  const getMinSerializedLength = props.getMinLength;
  const bytesValidate = props.bytesValidate;
  const chunk_count = props.chunk_count;
  const assertValidValue = props.assertValidValue;
  const fromJson = props.fromJson;
  const treeDeserializedFromBytes = props.treeDeserializedFromBytes;
  const treeSetProperty = props.treeSetProperty;
  const getSerializedValue = props.getSerializedValue;
  const equals = props.equals;
  const clone = props.clone;
  const convertToJson = props.covertToJson;
  const defaultValue = props.defaultValue;
  const defaultNode = props.defaultNode;

  //   const ch = {
  //     bytesValidate: bytesValidate,
  //     deserializedFromBytes: deserializedFromBytes,
  //     assertValidValue: assertValidValue,
  //     fromJson: fromJson,
  //     treeDeserializedFromBytes: treeDeserializedFromBytes,
  //     treeSetProperty: treeSetProperty,
  //   };

  if (vectorType === "Basic") {



    return (
      <BasicArrayType
        length={length}
        values={values}
        elementType={elementType}
        uintType={uintType}
        vectorType={vectorType}
        fullChunks={fullChunks}
        basicArrayRoot={vectorRoot}
        chunk_count={chunk_count}
        // getSerializedValue={getSerializedValue}
        // getSerializedElementLength={getSerializedElementLength}
        // getSerializedVectorLength={getSerializedVectorLength}
        // getMinSerializedLength={getMinSerializedLength}
        assertValidValue={assertValidValue}
        // equals={equals}
        // clone={clone}
        deserializeFromBytes={_deserializeFromBytes}
        serializeToBytes={serializeToBytes}
        // fromJson={fromJson}
        // convertToJson={convertToJson}
        // defaultValue={defaultValue}
        // defaultNode={defaultNode}
        basicArrayType={"Vector"}
      ></BasicArrayType>
    );
  } else {
    return <div>TODO</div>;
  }
}
