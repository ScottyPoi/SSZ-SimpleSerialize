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
                ],
              },
              {
                name: "BigIntUintType",
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

  export default classObj