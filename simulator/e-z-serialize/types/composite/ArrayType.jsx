import DisplayArrayType from '../../../components/DisplayCompositeType';
import CompositeType from '../CompositeType';

export default function ArrayType({...props}) {


    const type = "ArrayType";
    const arrayType = props.arrayType;
    const arrayRoot = props.arrayRoot;
    const vectorType = props.vectorType;
    const elementType = props.elementType;
    const uintType = props.uintType;
    const length = props.length;
    const values = props.values;
    const serializeToBytes = props.serializeToBytes;
    const _deserializeFromBytes = props.deserializeFromBytes;
    const getSerializedLength= props.getSerializedLength;
    const getMaxSerializedLength= props.getMaxSerializedLength;
    const getMinSerializedLength= props.getMinSerializedLength;
    const assertValidValue= props.assertValidValue;
    const equals= props.equals;
    const clone= props.clone;
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
    const chunk_count = props.chunk_count;
    const fullChunks = props.fullChunks

    return (
        <CompositeType
        chunk_count={chunk_count}
        fullChunks={fullChunks}
        type={type}
        compositeTypeRoot={arrayRoot}
        compositeType={arrayType}
        vectorType={vectorType}
        elementType={elementType}
        uintType={uintType}
        length={length}
        values={values}
        getSerializedLength={getSerializedLength}
        getMaxSerializedLength={getMaxSerializedLength}
        getMinSerializedLength={getMinSerializedLength}
        assertValidValue={assertValidValue}
        equals={equals}
        clone={clone}
        deserializeFromBytes={_deserializeFromBytes}
        serializeToBytes={serializeToBytes}
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
        >
            {props.children}
        </CompositeType>
    )
}