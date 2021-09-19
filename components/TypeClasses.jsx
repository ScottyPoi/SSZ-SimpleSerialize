export default function TypeClasses(props) {
  const ssz = props.ssz;
  const TypeClassObj = {
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

  const typeFunctions = ["VectorType", "ListType"];

  function classMenu(obj) {
    const keys = Object.keys(obj);
    if (keys.includes("subs")) {
      return (
        <li className="nav-item">
          <div className="row justify-content-start">
            <div className="col-2">
              <button
                type="button"
                className="btn btn-secondary m-1"
                onClick={() => props.handleChange(obj.name)}
              >
                {obj.name}
              </button>
            </div>
          </div>
          <div className="row justify-content-end">
            {obj.subs.map((sub) => {
              return (
                <div className="col-11">
                  <ul className="nav nav-pills">{classMenu(sub)}</ul>
                </div>
              );
            })}
          </div>
        </li>
      );
    } else if (keys.includes("name")) {
      return (
        ssz[obj.name] && (
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-secondary m-1"
              onClick={() => props.handleChange(obj.name)}
            >
              {obj.name}
            </button>
          </li>
        )
      );
    } else return;
  }
  function menu(list, name) {
    return (
      <div className="row">
        <h3>Type Functions</h3>
        <br />
        <ul className="nav nav-pills">
          {list.map((func, idx) => {
            return (
              ssz[func] && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-secondary m-1"
                    onClick={() => props.handleChange(func)}
                  >
                    {func}
                  </button>
                </li>
              )
            );
          })}
        </ul>
      </div>
    );
  }

  return classMenu(TypeClassObj)
    
}
