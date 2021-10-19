export const ValueObj = {
  name: "TreeValue",
  subs: [
    { name: "BasicArrayTreeValue", subs: [{ name: "BasicListTreeValue" }] },
    {
      name: "CompositeArrayTreeValue",
      subs: [{ name: "CompositeListTreeValue" }],
    },
    { name: "ContainerLeafNodeStructTreeValue" },
    { name: "ContainerTreeValue" },
    { name: "UnionTreeValue" },

  ],
};
