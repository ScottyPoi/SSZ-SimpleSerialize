import * as ssz from "@chainsafe/ssz";

const classObj = {
  name: "Type",
  subs: [
    {
      name: "BasicType",
      subs: [
        {
          name: "BooleanType",
        },
        {
          name: "UintType",
          subs: [
            {
              name: "NumberUintType",
              subs: [
                {
                  name: "Number64UintType",
                },
                {
                  name: "BigIntUintType",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "CompositeType",
      subs: [
        {
          name: "BasicArrayType",
          subs: [
            {
              name: "BasicVectorType",
            },
            {
              name: "BasicListType",
              subs: [{ name: "Number64ListType" }],
            },
            {
              name: "BitListType",
            },
            {
              name: "BitVectorType",
              subs: [
                {
                  name: "ByteVectorType",
                },
              ],
            },
            {
              name: "ByteVectorType",
              subs: [
                {
                  name: "RootType",
                },
              ],
            },
          ],
        },
        {
          name: "CompositeArrayType",
          subs: [
            {
              name: "CompositeVectorType",
            },
            {
              name: "CompositeListType",
            },
          ],
        },
        {
          name: "ContainerType",
          subs: [
            {
              name: "ContainerLeafNodeStructType",
            },
          ],
        },
        {
          name: "UnionType",
        },
      ],
    },
  ],
};

export const optionsObj = {
  NumberUintOps: {
    name: "NumberUintType",
    ops: {
      length: 2
    }
  },
  UintOps: {
    name: "UintType",
    ops: {
      length: 8,
      infinityWhenBig: true
    }
  },
  BigUintOps: {
    name: "BigUintType",
    ops: {
      length: 32
    }
  },
  BasicVectorOps: {
    name: "BasicVectorType",
    ops: {
      elementType: ssz.byteType,
      length: 32,
    },
  },

  BasicListOps: {
    name: "BasicListType",
    ops: {
      options: {elementType: ssz.BasicType,
      length: 32,}
    },
  },
  Number64ListOps: {
    name: "Number64ListType",
    ops: {
      elementType: ssz.Number64UintType,
      length: 32,
    },
  },
  BitListOps: {
    name: "BitListType",
    ops: {
      elementType: ssz.BooleanType,
      length: 1200,
    },
  },
  BitVectorOps: {
    name: "BitVectorType",
    ops: {
      elementType: ssz.BooleanType,
      length: 32,
    },
  },
  ByteVectorOps: {
    name: "ByteVectorType",
    ops: {
      // elementType: ssz.UintType,
      length: 32,
    },
  },
  CompositeVectorOps: {
    name: "CompositeVectorType",
    ops: {
      elementType: ssz.CompositeType,
      length: 32,
    },
  },
  CompositeListOps: {
    name: "CompositeListType",
    ops: {
      elementType: ssz.CompositeType,
      length: 32,
    },
  },
  RootOps: {
    name: "RootType",
    ops: {
      expandedType: ssz.CompositeType,
    },
  },
  ContainerOps: {
    name: "ContainerType",
    ops: {
      options: {
        fields: {
          1: {
            elementType: ssz.BasicType,
          },
        },
      },
    },
  },
  UnionOps: {
    name: "UnionType",
    ops: {
      types: [ssz.CompositeType],
    },
  },
  CompositeArrayOps: {
    name: "CompositeArrayType",
    ops: {
      elementType: ssz.CompositeType,
      length: 32,
    },
  },
};

export default classObj;
