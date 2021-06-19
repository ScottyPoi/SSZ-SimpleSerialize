import DisplayBasicType from '../../components/DisplayBasicType';
import DisplayCompositeType from '../../components/DisplayCompositeType';
import CreateTreeBacked from '../../components/CreateTreeBacked';
import BasicArrayType from './composite/BasicArrayType';
// import isBackedValue from '../isBackedValue';

const isBackedValue = (value) => {
    return false
}
export default function CompositeType({...props}) {

    const type = props.type;
    const compositeType = props.compositeType
    const chunk_count = props.chunk_count;
    const compositeTypeRoot = props.compositeTypeRoot;
    const fullChunks = props.fullChunks
    const arrayType = props.arrayType;
    const basicArrayType = props.basicArrayType;
    const compositeArrayType = props.compositeArrayType;
    const vectorType = props.vectorType;
    const elementType = props.elementType;
    const uintType = props.uintType;
    const length = props.length;
    const values = props.values;
    const serializeToBytes = props.serializeToBytes;
    const _deserialize = props.deserializeFromBytes;
    const getSerializedLength= props.getSerializedLength;
    const getMaxSerializedLength= props.getMaxSerializedLength;
    const getMinSerializedLength= props.getMinSerializedLength;
    const _assertValidValue= props.assertValidValue;
    const _equals= props.equals;
    const _clone= props.clone;
    const getRootAtChunkIndex= props.getRootAtChunkIndex;
    const getPropertyNames= props.getPropertyNames;
    const convertFromJson= props.convertFromJson;
    const convertToJson= props.convertToJson;
    const convertToTree= props.convertToTree;
    const tree_convertToStruct= props.tree_convertToStruct;
    const tree_deserializeFromBytes= props.tree_deserializeFromBytes;
    const tree_serializeToBytes= props.tree_serializeToBytes;
    const getPropertyGindex= props.getPropertyGindex;
    const getPropertyType= props.getPropertyType;
    const tree_getProperty= props.tree_getProperty;
    const tree_setProperty= props.tree_setProperty;
    const tree_deleteProperty= props.tree_deleteProperty;
    const tree_getPropertyNames= props.tree_getPropertyNames;
    const bytes_getVariableOffsets= props.bytes_getVariableOffsets;
    const tree_readonlyIterateValues= props.tree_readonlyIterateValues;
    const tree_iterateValues= props.tree_iterateValues;
    const chunkDepth = props.chunkDepth;
    const treeDefaultNode = props.treeDefaultNode;
    const toHexString = props.toHexString;
    const fromHexString= props.fromHexString;
    const byteArrayEquals = props.byteArrayEquals;
    const getByteBits = props.getByteBits;
    const hasVariableSerializedLength = props.hasVariableSerializedLength;
    const getMaxChunkCount = props.getMaxChunkCount;
    const convertToStruct = props.convertToStruct;
    const treeDeserializeFromBytes = props.treeDeserializeFromBytes;
    const GetRootAtChunkIndex = props.GetRootAtChunkIndex;
    const getSubtree = props.getSubtree;
    const setSubtree = props.setSubtree;
    const createFromProof = props.createFromProof;
    // const isBackedValue = props.isBackedValue;


    const size = (value) => {
        if (isBackedValue(value)) {
            return value.size;
        } else {
            return getSerializedLength(value);
        };
    };

    const maxSize = () => {
        return getMaxSerializedLength();
    };

    const minSize = () => {
        return getMinSerializedLength();
    };

    const fromBytes = (data, start, end) => {
        return deserializeFromBytes(data, start, end)
    };

    // const deserialize = (data) => {
    //     return fromBytes(data, 0, data.length)
    // };

    const serialize = (values) => {
        return serializeToBytes(values)
    }

    // const toBytes = (value) => {
    //     if (isBackedValue(value)) {
    //         return value.serializeToBytes(output, offset)
    //     } else {
    //         return serializeToBytes(value)
    //     };
    // };

    // const serialize = (values, type, length) => {
    //         if (type === "Vector") {
    //         const output = new Uint8Array(length);
    //         serializeToBytes(values, output, 0);
    //         return output;}
    // };

    // const serialize = (struct, data) => {
    //     const output = new Uint8Array(getSerializedLength(struct));
    //     return serializeToBytes(struct, output, 0);
    // }

    const hashTreeRoot = (value) => {
        if (isBackedValue(value)) {
            return value.hashTreeRoot();
        } else {
            return HashTreeRoot(value);
        };
    };

    const fromJson = (data, options=null) => {
        return CovertFromJson(data, options)
    };

    const toJson = (value, options=null) => {
        return ConvertToJson(value, options);
    };

    const createTreeBacked = (tree) => {
        return (<CreateTreeBacked
        type={<CompositeType />}
        tree={tree} />)
    }

    const createTreeBackedFromStruct = (value) => {
        return createTreeBacked(ConvertToTree(value))
    };

    const createTreeBackedFromBytes = (data) => {
        return createTreeBacked(treeDeserialize(data))
    };

    const createTreeBackedFromJson = (data, options=null) => {
        return createTreeBacked(CovertFromJson(data, options))
    };

    const createTreeBackedFromProof = (root, proof) => {
        return createTreeBacked(treeCreateFromProof(root, proof))
    };

    const createTreeBackedFromProofUnsafe = (proof) => {
        return createTreeBacked(treeCreateFromProofUnsafe(proof))
    };

    const defaultTreeBacked = () => {
        return (
            <CreateTreeBacked 
            type={<CompositeType {...props} />}
            tree={treeDefaultValue()}
            />
        )
    };


    const clone = (value) => {
        if (isBackedValue(value)) {
            return value;
          } else {
            return _clone(value);
          }
    }


    const defaultValue = () => {
        return DefaultValue()
    }

    const assertValidValue = (value) => {
        return _assertValidValue(value);
    };
    
    const equals = (value1, value2) => {
        if (isBackedValue(value1) && isBackedValue(value2)) {
            return value1.equals(value2);
          } else {
            return _equals(value1, value2);
          }
    }

    const treeCreateProof = (target, paths) => {
        const gindices = paths.map((path) => getPathGindex(path));
        return target.getProof({
            type: ProofType.treeOffset,
            gindices,
        });
    };

    const treeCreateFromProof = (root, proof) => {
        const tree = Tree.createFromProof(proof);
        if (!byteArrayEquals(tree.root, root)) {
            throw new Error("Proof does not match trusted root")
        };
        return tree;
    }

    const treeCreateFromProofUnsafe = (proof) => {
        return Tree.createFromProof(proof)
    };

    const HashTreeRoot = (struct) => {
        return merkleize(YieldChunkRoots(struct), getMaxChunkCount())
    };

    const treeHashTreeRoot = (tree) => {
        return tree.root
    }

    const getPathGindex = (path) => {
        const gindices = [];
        for (let prop of path) {
            gindices.push(getPropertyGindex(prop))
            type = getPropertyType(prop)
        };
        return concatGindices(gindices)
    }

    function* YieldChunkRoots(struct) {
        const chunkCount = GetChunkCount(struct);
        for (let i=0; i<chunkCount; i++) {
            yield GetRootAtChunkIndex(struct, i)
        }
    };

    const getChunkDepth = () => {
        if (!chunkDepth) {
            chunkDepth = countToDepth(BigInt(getMaxChunkCount()));
        }
        return chunkDepth;
    };

    const getGindexAtChunkIndex = (index) => {  
        return toGindex(getChunkDepth(), BigInt(index))
    };

    // instead of target.foo  will have to be let newtarget = new Tree.from(target) and return newtarget

    const treeGetSubreeAtChunkIndex = (target, index) => {
        return target.getSubtree(getGindexAtChunkIndex(index), value, expand)
    };

    const treeSetSubtreeAtChunkIndex = (target, index, value, expand=false) => {
        target.setSubtree((getGindexAtChunkIndex(index)));
    };

    const treeGetRootAtChunkIndex = (target, index) => {
        return target.getRoot(getGindexAtChunkIndex(index));
    }

    const treeSetRootAtChunkIndex = (target, index, value, expand = false) => {
        target.setRoot(getGindexAtChunkIndex(index), value, expand)
    };



    const GetChunkCount = (struct) => {
        return GetMaxChunkCount();
    }

    const treeGetChunkCount = (tree) => {
        return getMaxChunkCount();
    }


    const Deserialize = (data) => {
        return DeserializeFromBytes(data, 0, data.length)
    }

    const treeDeserialize = (data) => {
        return treeDeserializeFromBytes(data, 0, data.length)
    }



    const treeSerialize = (tree, data) => {
        const output = new Uint8Array(getSerializedLength(tree));
        return treeSerializeToBytes(tree, output, 0);
    }

    const bytesValidate = (data, start, end) => {
        if (!data) {
            throw new Error("Data is null or undefined");
          }
          if (data.length === 0) {
            throw new Error("Data is empty");
          }
          if (start < 0) {
            throw new Error(`Start param is negative: ${start}`);
          }
          if (start > data.length) {
            throw new Error(`Start param: ${start} is greater than length: ${data.length}`);
          }
          if (end < 0) {
            throw new Error(`End param is negative: ${end}`);
          }
          if (end > data.length) {
            throw new Error(`End param: ${end} is greater than length: ${data.length}`);
          }
          const length = end - start;
          if (!hasVariableSerializedLength() && length !== getSerializedLength(null)) {
            throw new Error(`Incorrect data length ${length}, expect ${getSerializedLength(null)}`);
          }
          if (end - start < getMinSerializedLength()) {
            throw new Error(`Data length ${length} is too small, expect at least ${getMinSerializedLength()}`);
          }
    }


    const treeEquals = (tree1, tree2) => {
        return byteArrayEquals(tree1.root, tree2.root);
    };

    const byteEquals = (bytes1, bytes2) => {
        return byteArrayEquals(bytes1, bytes2);
    };

    const treeDefaultValue = () => {
        return <Tree 
        treeDefaultNode={treeDefaultNode}/>
    }

    const treeClone = (value) => {
        return value.clone
    }

    const bytesClone = (value, start=0, end=value.length) => {
        const bytes = new Uint8Array(end-start);
        value.subarray(start, end).set(bytes);
        return bytes;
    }



    return (
        <DisplayCompositeType
        values={values}
        length={length}
        root={compositeTypeRoot}
        compositeType={compositeType}
        chunkDepth={chunkDepth}
        treeDefaultValue={treeDefaultValue}
        assertValidValue={assertValidValue}
        toHexString={toHexString}
        fromHexString={fromHexString}
        byteArrayEquals={byteArrayEquals}
        getByteBits={getByteBits}
        type="Composite"
        arrayType={arrayType}
        elementType={elementType}
        uintType={uintType}
        basicArrayType={basicArrayType}
        vectorType={vectorType}
        size={size}
        maxSize={maxSize}
        minSize={minSize}
        deserialize={_deserialize}
        serialize={serialize}
        hashTreeRoot={hashTreeRoot}
        fromJson={fromJson}
        toJson={toJson}
        createTreeBackedFromStruct={createTreeBackedFromStruct}
        createTreeBackedFromBytes={createTreeBackedFromBytes}
        createTreeBackedFromJson={createTreeBackedFromJson}
        createTreeBackedFromProof={createTreeBackedFromProof}
        createTreeBackedFromProofUnsafe={createTreeBackedFromProofUnsafe}
        defaultTreeBacked={defaultTreeBacked}
        clone={clone}
        defaultValue={defaultValue}
        equals={equals}
        treeCreateProof={treeCreateProof}
        treeCreateFromProof={treeCreateFromProof}
        treeCreateFromProofUnsafe={treeCreateFromProofUnsafe}
        treeHashTreeRoot={treeHashTreeRoot}
        treeGetSubreeAtChunkIndex={treeGetSubreeAtChunkIndex}
        treeSetSubtreeAtChunkIndex={treeSetSubtreeAtChunkIndex}
        treeGetRootAtChunkIndex={treeGetRootAtChunkIndex}
        treeSetRootAtChunkIndex={treeSetRootAtChunkIndex}
        treeGetChunkCount={treeGetChunkCount}
        Deserialize={Deserialize}
        treeDeserialize={treeDeserialize}
        treeSerialize={treeSerialize}
        bytesValidate={bytesValidate}
        treeEquals={treeEquals}
        byteEquals={byteEquals}
        treeDefaultValue={treeDefaultValue}
        treeClone={treeClone}
        bytesClone={bytesClone}
        chunk_count={chunk_count}
        fullChunks={fullChunks}
        >{props.children}</DisplayCompositeType>
    )
}