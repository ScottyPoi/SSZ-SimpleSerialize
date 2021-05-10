import {
    BasicType,
    CompositeType,
    isBooleanType,
    isListType,
    isVectorType,
    isBitListType,
    isBitVectorType,
    isContainerType,
    isByteVectorType,
    isNumberUintType,
    isBigIntUintType,
  } from "@chainsafe/ssz";

export default function Serializer() {
    return (
        <div>
            foo
        </div>
    )
}

function getSSZType(data: {sszTypeName: string; presetName: string; input: object}): 
BasicType<unknown> | CompositeType<object> {
  return presets[data.presetName][data.sszTypeName];
}