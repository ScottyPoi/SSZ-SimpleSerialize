import {
  BasicType,
  BitListType,
  BitVectorType,
  ContainerType,
  isBasicType,
  isBigIntUintType,
  isBooleanType,
  isContainerType,
  isListType,
  isNumberUintType,
  isUnionType,
  isVectorType,
  ListType,
  Type,
  UintType,
  UnionType,
  VectorType,
} from "@chainsafe/ssz";
export default function hey() {}
export function randBasic(type: BasicType<any>): basicData {
  let numType = type as UintType<any>;
  let byteLength = numType.byteLength * 8;
  let num = isBooleanType(type)
    ? Math.random() > 0.5
    : isNumberUintType(type)
    ? Math.abs(Math.floor(2 ** byteLength * Math.random() - 1))
    : isBigIntUintType(type)
    ? BigInt(Math.abs(Math.floor(2 ** byteLength * Math.random() - 1)))
    : 0;
  return num;
}

export function randVector(type: VectorType<any> | BitVectorType): arrayData {
  let length = type.length;
  let elementType = type.elementType;
  let array = [];
  for (let i = 0; i < length; i++) {
    let rand = randomDataSet(elementType);
    array.push(rand);
  }
  return array;
}

export function randList(type: ListType<any> | BitListType): arrayData {
  let limit = type.limit;
  let length = Math.ceil(Math.random() * limit);
  let elementType = type.elementType;
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(randomDataSet(elementType));
  }
  return array;
}

export function randUnion(type: UnionType<any>): unionData {
  const types = type.types;
  const randIdx = Math.floor(Math.random() * (types.length - 1))
  const randType = types[randIdx];
  const randData = randomDataSet(randType);
  const union = { selector: randIdx, value: randData };
  return union;
}

export function randContainer(container: ContainerType<any>) {
  const fields = container.fields;
  const data = Object.entries(fields).map(([key, type]) => {
    return [key, randomDataSet(type)];
  });
  const dataObj: Record<string, dataSet> = Object.fromEntries(data);
  return dataObj;
}

type basicData = boolean | bigint | number;
// @ts-ignore
type compositeData = arrayData | containerData | unionData;
type basicArrayData = basicData[];
type compositeArrayData =
  | compositeData[]
  | compositeArrayData[]
  | basicArrayData[];
type arrayData = basicArrayData | compositeArrayData | arrayData[];
// @ts-ignore
type containerData = Record<string, dataSet>;
type unionData = { selector: number; value: dataSet };
// @ts-ignore
export type dataSet = basicData | compositeData;

export function randomDataSet(type: Type<any>): dataSet {
  const data: dataSet = isBasicType(type)
    ? randBasic(type)
    : isVectorType(type)
    ? randVector(type)
    : isListType(type)
    ? randList(type)
    : isUnionType(type)
    ? randUnion(type)
    : isContainerType(type)
    ? randContainer(type)
    : type.defaultValue();
  return data;
}
