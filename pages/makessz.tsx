import * as ssz from "@chainsafe/ssz";
import * as pmt from "@chainsafe/persistent-merkle-tree";
import { useEffect, useState } from "react";
import { BranchNode } from "@chainsafe/persistent-merkle-tree";

export default function makessz() {
  const [text, setText] = useState("type foo = ssz.");
  const [options, setOptions] = useState(["Basic", "Composite"]);
  const [choice, setChoice] = useState("");
  const [type, setType] = useState("");
  const [currentType, setCurrentType] = useState(null);
  const [compositeType, setCompositeType] = useState({
    vector: false,
    list: false,
  });
  const [length, setLength] = useState(0);
  const [limit, setLimit] = useState(0);

  const textobj = {
    0: "",
    1: "",
  };

  const opsobj = {
    ssz: ["Basic", "Composite"],
    Basic: ["Boolean", "Uint8", "Uint16", "Uint32", "Uint128", "Uint256"],
    Composite: ["Vector", "List", "Container"],
    List: ["Boolean", "Uint8", "Uint16", "Uint32", "Uint128", "Uint256"],
    Vector: ["Boolean", "Uint8", "Uint16", "Uint32", "Uint128", "Uint256"],
    Container: [],
    // Boolean: [],
    // Uint8: [],
    // Uint16: [],
    // Uint32: [],
    // Uint128: [],
    // Uint256: [],
  };

  useEffect(() => {
    choice != "ssz" && setText(text + `<${choice}>`);
    setOptions(opsobj[choice]);

    const ct =
      choice == "Vector"
        ? { vector: true, list: false }
        : choice == "List"
        ? { vector: true, list: false }
        : compositeType;
    choice == "Vector" ? setLength(0) : choice == "List" ? setLimit(0) : null;
    // opsobj.Basic.forEach((typ) => opsobj[typ] == arrayType)
    opsobj[choice] || setCurrentType(choice);
    setCompositeType(ct);
  }, [choice]);

  function newText(ops) {
    let t = `type foo = `;
    for (let op in ops) {
      op && t + `.${op}`;
    }
    return t;
  }

  function reset() {
    setText(`type foo = ssz.`);
    setOptions(["Basic", "Composite"]);
    setChoice("ssz");
    setType(null);
    setCurrentType(null);
    setCompositeType({ vector: false, list: false });
    setLimit(null);
    setLength(null);
  }

  function createType(type) {
    const ct = compositeType.vector
      ? "vector"
      : compositeType.list
      ? "list"
      : "";
    const len = compositeType.vector ? length : compositeType.list ? limit : "";
    setType(`${ct}[${type}, ${len}]`);
  }

  function handleChangeLength(length) {
    setLength(length);
  }

  function createTree() {
    let array = new Uint8Array(32)
    let node = new pmt.LeafNode(array);
    const root = new BranchNode(node, node)
    const tree = new pmt.Tree(root)
    return tree
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <textarea readOnly value={text} />
          <h1>{type}</h1>
          {/* {currentType && compositeType.vector ? (
            <div className="row">

              {currentType && length != 0 && (
                <button className="btn" onClick={() => createType(currentType)}>
                  Create Type
                </button>
              )}
            </div>
          ) : compositeType.list ? (
            <div className='row'>
            {currentType && (
            <button className="btn" onClick={() => createType(currentType)}>
              Create Type
            </button>
          )}
          </div>
          ) : currentType && (
            <button className="btn" onClick={() => createType(currentType)}>
              Create Type
            </button>
          )} */}
        </div>
        <div className="col">
          <div className="btn-group">
            <button className="btn btn-warning" onClick={() => reset()}>
              RESET
            </button>
            {options &&
              options.map((option) => {
                return (
                  <button
                    className="btn btn-secondary"
                    onClick={() => setChoice(option)}
                  >
                    {option}
                  </button>
                );
              })}
              {currentType && compositeType.vector ? (
            <div className="form-outline">
              Length
              <input
              type="number"
                className="form-control"
                id="floatingPassword"
                defaultValue={0}
                value={length}
                onChange={(e) => handleChangeLength(e.target.value)}
                // rows={1}
              />
              {/* <label className="form-label" htmlFor="floatingPassword">  {length}</label> */}
              
              {/* <label htmlFor="floatingPassword">Length</label> */}
            </div>
          ) : compositeType.list ? (
            <div>
              <h3>Limit</h3>
              <textarea
                className="text-area"
                id="floatingPassword"
                defaultValue={0}
                value={length}
                onChange={(e) => handleChangeLength(e.target.value)}
                rows={1}
              />
              
          </div>
          ) : null}
          </div>
          {currentType && compositeType.vector ? (
            <div className="row">

              {currentType && length != 0 && (
                <button className="btn btn-secondary" onClick={() => createType(currentType)}>
                  Create Type
                </button>
              )}
            </div>
          ) : compositeType.list ? (
            <div className='row'>
            {currentType && (
            <button className="btn btn-secondary" onClick={() => createType(currentType)}>
              Create Type
            </button>
          )}
          </div>
          ) : currentType && (
            <button className="btn btn-secondary" onClick={() => createType(currentType)}>
              Create Type
            </button>
          )}
        </div>
        <div className="col">{createTree().toString()}</div>
        <div className="col">Visualization of exploration </div>
      </div>
    </div>
  );
}
