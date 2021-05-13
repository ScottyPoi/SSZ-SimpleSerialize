import {byteType, booleanType, ByteVectorType, BigIntUintType, number32Type, NumberUintType} from "@chainsafe/ssz";





// Interface is defined in the return of getPrimitiveTypes(), to de-duplicate info
// To add a new type, create and return it in the body of getPrimitiveTypes()
export type PrimitiveSSZTypes = ReturnType<typeof getPrimitiveTypes>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export function getPrimitiveTypes() {
  const Boolean = booleanType;
  const Bytes4 = new ByteVectorType({length: 4});
  const Bytes8 = new ByteVectorType({length: 8});
  const Bytes32 = new ByteVectorType({length: 32});
  const Bytes48 = new ByteVectorType({length: 48});
  const Bytes96 = new ByteVectorType({length: 96});
  const Uint8 = byteType;
  const Uint16 = new NumberUintType({byteLength: 2});
  const Uint32 = number32Type;
  const Number64 = new NumberUintType({byteLength: 8});
  const Uint64 = new BigIntUintType({byteLength: 8});
  const Uint128 = new BigIntUintType({byteLength: 16});
  const Uint256 = new BigIntUintType({byteLength: 32});
};
