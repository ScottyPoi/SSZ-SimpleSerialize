import ArrayType from './ArrayType';
import LeafNode from '../../persistent/node';



export default function BasicArrayType({...props}) {
    
  const basicArrayType = props.basicArrayType
  const basicArrayRoot = props.basicArrayRoot;
  const elementType = "Basic";
  const vectorType = props.vectorType;
  const valueType = props.valueType;
  const uintType = props.uintType;
  const length = props.length;
  const values = props.values;
  const getSerializedElementLength = props.getSerializedElementLength;
  const getSerializedVectorLength = props.getSerializedVectorLength;
  const getMaxLength = props.getMaxLength;
  const getMinLength = props.getMinLength;
  const tree_getLength = props.tree_getLength;
  const _deserializeFromBytes = props.deserializeFromBytes;
  const chunk_count = props.chunk_count
  const fullChunks = props.fullChunks;

  // const getSerializedLength = (value) => {
  //     return props.getSerializedLength() * getLength(value);
  // }

  // const getMaxSerializedLength = () => {
  //     return getMaxLength() * props.getMaxSerializedLength();
  // }

  // const getMinSerializedLength = () => {
  //     return getMinLength() * props.getMinSerializedLength();
  //   }


  const assertValidValue = (value) => {
      for (let i = 0; i < getLength(value); i++) {
        try {
          props.struct_assertValidValue((value)[i]);
        } catch (e) {
          throw new Error(`Invalid element ${i}: ${e.message}`);
        }
      }
    }

  const equals = (value1, value2) => {
      if (getLength(value1) !== getLength(value2)) {
        return false;
      }
      for (let i = 0; i < getLength(value1); i++) {
        if (!props.struct_equals(value1[i], value2[i])) {
          return false;
        }
      }
      return true;
    }

  const clone = (value) => {
      const newValue = defaultValue();
      for (let i = 0; i < getLength(value); i++) {
        newValue[i] = props.struct_clone(value[i]);
      }
      return newValue;
    }
  

  
  // const serializeToBytes = (value, output, offset) => {
  //     const length = getLength(value);
  //     let index = offset;
  //     for (let i = 0; i < length; i++) {
  //       index = props.serializeToBytes(value[i], output, index);
  //     }
  //     return index;
  //   }
  
  const getRootAtChunkIndex = (value, index) => {
      const output = new Uint8Array(32);
      const itemSize = props.struct_getSerializedLength();
      const itemsInChunk = Math.floor(32 / itemSize);
      const firstIndex = index * itemsInChunk;
      // not inclusive
      const lastIndex = Math.min(getLength(value), firstIndex + itemsInChunk);
      // i = array index, grows by 1
      // j = data offset, grows by itemSize
      for (let i = firstIndex, j = 0; i < lastIndex; i++, j += itemSize) {
        props.struct_serializeToBytes(value[i], output, j);
      }
      return output;
    }
  
  const getPropertyNames = (value) => {
      const length = getLength(value);
      return (Array.from({length}, (_, i) => i)).concat(["length"]);
    }
  
  const convertFromJson = (data) => {
      return (Array.from({length: data.length}, (_, i) => props.fromJson(data[i])));
    }
  
  const convertToJson = (value) => {
      return Array.from({length: getLength(value)}, (_, i) =>
        props.struct_convertToJson(value[i])
      );
    }
  
  const convertToTree = (value) => {
      if (isTreeBacked<T>(value)) return value.tree.clone();
      const contents = [];
      for (const chunk of yieldChunkRoots(value)) {
        contents.push(new LeafNode(chunk));
      }
      return new Tree(subtreeFillToContents(contents, getChunkDepth()));
    }
  
  const tree_convertToStruct = (target) => {
      const value = defaultValue();
      const length = tree_getLength(target);
      for (let i = 0; i < length; i++) {
        value[i] = tree_getValueAtIndex(target, i);
      }
      return value;
    }
  

  
  
  const tree_getSerializedLength = (target) => {
      return props.struct_getSerializedLength() * tree_getLength(target);
  }
  
  const tree_deserializeFromBytes = (data, start, end) => {
      const target = tree_defaultValue();
      const byteLength = end - start;
      const chunkCount = Math.ceil(byteLength / 32);
      for (let i = 0; i < chunkCount; i++) {
        // view of the chunk, shared buffer from `data`
        const dataChunk = new Uint8Array(
          data.buffer,
          data.byteOffset + start + i * 32,
          Math.min(32, byteLength - i * 32)
        );
        // copy chunk into new memory
        const chunk = new Uint8Array(32);
        chunk.set(dataChunk);
        tree_setRootAtChunkIndex(
          target,
          i,
          chunk,
          true // expand tree as needed
        );
      }
      return target;
    }
  
  const tree_serializeToBytes = (target, output, offset) => {
      const size = tree_getSerializedLength(target);
      const fullChunkCount = Math.floor(size / 32);
      const remainder = size % 32;
      let i = 0;
      if (fullChunkCount > 0) {
        for (const node of target.iterateNodesAtDepth(getChunkDepth(), 0, fullChunkCount)) {
          output.set(node.root, offset + i * 32);
          i++;
        }
      }
      if (remainder) {
        output.set(tree_getRootAtChunkIndex(target, fullChunkCount).slice(0, remainder), offset + i * 32);
      }
      return offset + size;
    }
  
  const getPropertyGindex = (prop) => {
      return getGindexAtChunkIndex(getChunkIndex(prop));
    }
  
  const getPropertyType = (prop) => {
      return props;
    }
  
  function* tree_iterateValues(target) {
      const length = tree_getLength(target);
      if (length === 0) {
        return;
      }
      const elementSize = props.struct_getSerializedLength();
      if (32 % elementSize !== 0) {
        throw new Error("cannot handle a non-chunk-alignable elementType");
      }
      let left = length;
      for (const node of target.iterateNodesAtDepth(getChunkDepth(), 0, tree_getChunkCount(target))) {
        const chunk = node.root;
        for (let offset = 0; offset < 32; offset += elementSize) {
          yield elementType.struct_deserializeFromBytes(chunk, offset);
          left--;
          if (left === 0) {
            return;
          }
        }
      }
    }
  
  function* tree_readonlyIterateValues(target) {
      yield* tree_iterateValues(target);
    }
  
  const getChunkOffset = (index) => {
      const elementSize = elementType.struct_getSerializedLength();
      return (index % Math.ceil(32 / elementSize)) * elementSize;
    }
  
  const getChunkIndex = (index) => {
      return Math.floor(index / Math.ceil(32 / elementType.struct_getSerializedLength()));
    }
  
  const tree_getValueAtIndex = (target, index) => {
      const chunk = tree_getRootAtChunkIndex(target, getChunkIndex(index));
      return elementType.struct_deserializeFromBytes(chunk, getChunkOffset(index));
    }
  
  const tree_setValueAtIndex = (target, index, value, expand = false) => {
      const chunkGindex = getGindexAtChunkIndex(getChunkIndex(index));
      // copy data from old chunk, use new memory to set a new chunk
      const chunk = new Uint8Array(32);
      chunk.set(target.getRoot(chunkGindex));
      elementType.struct_serializeToBytes(value, chunk, getChunkOffset(index));
      target.setRoot(chunkGindex, chunk, expand);
      return true;
    }
  
  const tree_getProperty = (target, property) => {
      const length = tree_getLength(target);
      if (property === "length") {
        return length;
      }
      const index = Number(property);
      if (Number.isNaN(index)) {
        return undefined;
      }
      if (index >= length) {
        return undefined;
      }
      return tree_getValueAtIndex(target, index);
    }
  
  const tree_setProperty = (target, property, value, expand = false) => {
      return tree_setValueAtIndex(target, property, value, expand);
    }
  
  const tree_deleteProperty = (target, property) => {
      return tree_setProperty(target, property, elementType.struct_defaultValue());
    }
  
  const tree_getPropertyNames = (target) => {
      return Array.from({length: tree_getLength(target)}, (_, i) => String(i)).concat("length");
    }
  
  const  bytes_getVariableOffsets = (target) => {
      return [];
    }
  


  return (
      <ArrayType
      arrayType={basicArrayType}
      arrayRoot={basicArrayRoot}
      chunk_count={chunk_count}
      elementType={elementType}
      uintType={uintType}
      length={length}
      values={values}
      valueType={valueType}
      vectorType={vectorType}
      assertValidValue={assertValidValue}
      equals={equals}
      clone={clone}
      deserializeFromBytes={_deserializeFromBytes}
      serializeToBytes={props.serializeToBytes}
      getRootAtChunkIndex={getRootAtChunkIndex}
      getPropertyNames={getPropertyNames}
      convertFromJson={convertFromJson}
      convertToJson={convertToJson}
      convertToTree={convertToTree}
      tree_convertToStruct={tree_convertToStruct}
      tree_deserializeFromBytes={tree_deserializeFromBytes}
      tree_serializeToBytes={tree_serializeToBytes}
      getPropertyGindex={getPropertyGindex}
      getPropertyType={getPropertyType}
      tree_getProperty={tree_getProperty}
      tree_setProperty={tree_setProperty}
      tree_deleteProperty={tree_deleteProperty}
      tree_getPropertyNames={tree_getPropertyNames}
      bytes_getVariableOffsets={bytes_getVariableOffsets}
      tree_readonlyIterateValues={tree_readonlyIterateValues}
      tree_iterateValues={tree_iterateValues}
      fullChunks={fullChunks}


      >
          {}
      </ArrayType>
  )
}