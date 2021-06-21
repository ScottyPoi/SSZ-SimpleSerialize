import VectorType from "./VectorType";
// import Node from "../../persistent/Node";
// import subtreeFillToLength from "../../subtreeFillToLength";
// import Tree from "../../persistent/Tree";
// import ZeroNode from "../../ZeroNode";
import { useState } from "react";
import {
  deserializeUintFromBytes,
  serializeUintToBytes,
} from "../../../components/math/UintMath";
import { createHash } from "crypto";

export default function BasicVectorType({ ...props }) {
  const [defaultNode, setDefaultNode] = useState(null);
  const values = props.values;
  const elementType = props.elementType;
  const _byteLength = props.byteLength;
  const _length = props.length;
  const children = props.children;
  const uintType = props.uintType;
  const fullChunks = [];
  const BYTES_PER_CHUNK = 32;
  const BYTES_PER_LENGTH_OFFSET = 4;
  const BITS_PER_BYTE = 8;

  const size_of = props.byteLength;
  const values_per_chunk = BYTES_PER_CHUNK / size_of;
  const chunk_count = Math.floor((_length * size_of + 31) / BYTES_PER_CHUNK);

  const pack = (vector) => {
    let chunks = [];
    for (let j = 0; j < chunk_count; j++) {
      let idx = j * values_per_chunk;
      let values = vector.slice(idx, idx + 32);
      let serialized = serializeBasicVectorChunkToBytes(values);
      chunks.push(serialized);
    }
    return chunks;
  };

  const serializeBasicVectorChunkToBytes = (vector) => {
    let byteLength = _byteLength;
    let serialized = new Uint8Array(32);
    for (let i = 0; i < vector.length; i++) {
      serialized = serializeUintToBytes(
        vector[i],
        32,
        serialized,
        i * byteLength
      );
    }
    return serialized;
  };

  const serializeBasicVectorToBytes = (vector) => {
    if (chunk_count <= 1) {
      return serializeBasicVectorChunkToBytes(vector);
    } else if (chunk_count > 1) {
      let chunks = pack(vector);
      return chunks;
    }
  };

  const BasicVectorRoot = (chunks) => {
    let hashes = [];
    for (let i=0; i<chunks.length; i+= 2) {
      let hash = createHash("sha256");
      hash.update(chunks[i]);
      hash = hash.digest();
      hashes.push(hash);
    }
    let root = createHash("sha256");
    root.update(Buffer.concat(hashes));
    root = root.digest();
    return root;
  };

  const pack_bits = () => {};

  const defaultValue = () => {
    return Array.from({ length: length }, () => {
      return defaultValue();
    });
  };

  const getVecorLength = () => {
    return length;
  };

  const getSerializedElementLength = () => {
    return _byteLength;
  };

  const getSerializedVectorLength = () => {
    return _byteLength * length;
  };

  const bytesValidate = (data, start, end) => {
    children.bytesValidate(data, start, end);
    if (end - start !== size(null)) {
      throw new Error("Incorrect deserialized vector length!!");
    }
  };

  // const deserializeFromBytes = (data, start, end) => {
  //   // bytes_validate(data, start, end);
  //   const length = end - start;
  //   if (length !== data.length) {
  //     throw new Error(`Invalid deserialized vector length: expected ${data.length}, actual: ${length}`);
  //   }
  //   const value = new Uint8Array(length);
  //   value.set(data.slice(start, end));
  //   return value;
  // }

  const deserializeBasicVectorFromBytes = (serialized) => {
    let deserials = [];
    for (let i = 0; i < serialized.length; i++) {
      let data = new Uint8Array(32);
      data = Uint8Array.from(serialized[i]);
      let length = _length;
      let elementSize = _byteLength;
      let output = [];
      for (let i = 0; i < values_per_chunk; i++) {
        let isInf = true;
        let deserialized = deserializeUintFromBytes(
          data.slice([i * 4, i * 4 + elementSize]),
          i * 4,
          elementSize
        );
        deserials.push(deserialized);
      }
    }
    const deserializedVector = deserials.slice(0, _length);
    return deserializedVector

    
  };

  // const deserializeFromBytes = (data, start, end) => {
  //   bytesValidate(data, start, end);
  //   return children.deserializeFromBytes(data, start, end);
  // };

  // const assertValidValue = (value) => {
  //   const actualLength = value.length;
  //   const expectedLength = getLength();
  //   if (actualLength !== expectedLength) {
  //     throw new Error(
  //       `Invalid vector length: expected ${expectedLength}, actual ${actualLength}`
  //     );
  //   }
  //   children.assertValidValue(value);
  // };

  // const convertFromJson = (data) => {
  //   if (!Array.isArray(data)) {
  //     throw new Error("Invalid JSON vector: expected an Array");
  //   }
  //   const expectedLength = length;
  //   if (data.length !== expectedLength) {
  //     throw new Error(
  //       `Invalid JSON vector length: expected ${expectedLength}, actual ${data.length}`
  //     );
  //   }
  //   return children.fromJson(data);
  // };

  // const treeDefaultNode = () => {
  //   if (!defaultNode) {
  //     setDefaultNode(
  //       subtreeFillToLength(zeroNode(0), getChunkDepth(), getMaxChunkCount())
  //     );
  //   }
  //   return defaultNode;
  // };

  // const treeDefaultValue = () => {
  //   return <Tree defaultNode={defaultNode} />;
  // };

  // const treeGetLength = (target) => {
  //   return length;
  // };

  // const treeDeserializeFromBytes = (data, start, end) => {
  //   if (end - start !== getSerializedLength(null)) {
  //     throw new Error("Incorrect deserialized vector length");
  //   }
  //   return children.treeDeserializeFromBytes(data, start, end);
  // };

  // const treeSetProperty = (target, property, value) => {
  //   if (property >= treeGetLength(target)) {
  //     throw new Error("Invalid array index");
  //   }
  //   return children.treeSetProperty(target, property, value, false);
  // };

  // const hasVariableSerializedLength = () => {
  //   return false;
  // };

  // const getMaxChunkCount = () => {
  //   return Math.ceil((length * elementType.size()) / 32);
  // };

  return (
    <VectorType
      values={values}
      chunk_count={chunk_count}
      fullChunks={fullChunks}
      elementType={elementType}
      vectorType={"Basic"}
      uintType={uintType}
      elementSize={_byteLength}
      length={_length}
      serializeToBytes={serializeBasicVectorToBytes}
      deserializeFromBytes={deserializeBasicVectorFromBytes}
      vectorRoot={BasicVectorRoot}

      // defaultNode={defaultNode}
      // defaultValue={defaultValue}
      // getMaxLength={getMaxLength}
      // getMinLength={getMinLength}
      // bytesValidate={bytesValidate}
      // deserializedFromBytes={deserializeFromBytes}
      // assertValidValue={assertValidValue}
      // convertFromJson={convertFromJson}
      // treeDefaultNode={treeDefaultNode}
      // treeDefaultValue={treeDefaultValue}
      // treeGetLength={treeGetLength}
      // treeDeserializeFromBytes={treeDeserializeFromBytes}
      // treeSetProperty={treeSetProperty}
      // getMaxChunkCount={getMaxChunkCount}
      // hasVariableSerializedLength={hasVariableSerializedLength}
    ></VectorType>
  );
}
