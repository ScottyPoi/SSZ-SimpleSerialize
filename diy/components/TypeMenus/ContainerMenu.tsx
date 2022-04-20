import { Type } from "@chainsafe/ssz";
import { useEffect, useState } from "react";
import SelectElementType from "../SelectMenus/SelectElementType";

let basics = [
  "Boolean",
  "Uint8",
  "Uint16",
  "Uint32",
  "Uint64",
  "Uint128",
  "Uint256",
];

let composites = [
    "BitVector",
    "BitList",
    "Vector",
    "List",
    "Container",
    "Union"
]

interface ContainerMenuProps {
  setString: Function;
  aliasList: Record<string, Type<any>>
}

export default function ContainerMenu(props: ContainerMenuProps) {
  const [selection, setSelection] = useState("");
  const [fields, setFields] = useState<string[]>([]);
  const [fieldsObj, setFieldsObj] = useState<Record<number, string>>({});
  const [list, setList] = useState<string>("Basic");

  function addField(field: string) {
    let o = fieldsObj;
    let idx = Object.keys(o).length;
    o[idx] = field;
    setFieldsObj(o);
    setFields(Object.values(o));
  }

  function removeField(i: number) {
    let o = fieldsObj;
    let newObj: Record<number, string> = {};
    Object.values(o).forEach((key: string, idx: number) => {
      idx < i
        ? (newObj[idx] = key)
        : idx > i
        ? (newObj[idx - 1] = key)
        : console.log(`${key} removed...`);
    });
    setFieldsObj(newObj);
    setFields(Object.values(newObj));
  }

  function moveUp(i: number) {
    let o = fieldsObj;
    let up = o[i];
    let down = o[i - 1];
    o[i] = down;
    o[i - 1] = up;
    setFieldsObj(o);
    setFields(Object.values(o));
  }
  function moveDown(i: number) {
    let o = fieldsObj;
    let up = o[i + 1];
    let down = o[i];
    o[i + 1] = down;
    o[i] = up;
    setFieldsObj(o);
    setFields(Object.values(o));
  }

  function showList(list: string) {
    const lists: Record<string, JSX.Element> = {
      Basic: (
        <SelectElementType
        aliasList={props.aliasList}
          types={basics}
          name="Select Basic Type"
          setType={(e: string) => setSelection(e)}
        />),
      Composite: (
        <SelectElementType 
        aliasList={props.aliasList}
          types={composites}
          name="Select Composite Type"
          setType={(e: string) => setSelection(e)}
        />),
      User: (
        <SelectElementType
        aliasList={props.aliasList}
          types={["User", "List"]}
          name="Select User Type"
          setType={(e: string) => setSelection(e)}
        />
      ),
    };
    return Object.keys(lists).includes(list) ? lists[list] : lists["Basic"]
  }

  useEffect(() => {
    let string = "{ fields: [";
    fields.forEach((field, idx) => {
      string += `${idx !== 0 ? ", " : ""}${idx}: ${field}`;
    });
    string += "]}";
    props.setString(string);
  });

  return (
    <div>
      Container Menu
      <div className="row">
        <div className="col">
          <div className="row">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <button
                  className="btn"
                  type="button"
                  onClick={() => setList("Basic")}
                >
                  Basic Types
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  type="button"
                  onClick={() => setList("Composite")}
                >
                  Composite Types
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn"
                  type="button"
                  onClick={() => setList("User")}
                >
                  User Types
                </button>
              </li>
            </ul>
{showList(list)}
          </div>
          <div className="row">Composite Types</div>
          <div className="row">User Defined Types</div>
        </div>
        <div className="col">Composite Options?</div>
        <div className="col">
          <div className="row">
            <button
              className="btn btn-warning"
              type="button"
              onClick={() => {
                addField(selection);
              }}
            >
              Add {selection} Field to Container at index {fields.length}
            </button>
          </div>
        </div>
        <div className="col">
          Container Description
          {fields.map((field, idx) => {
            return (
              <div className="row">
                <div className="col">
                  {idx}: {field}
                </div>
                <div className="col">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      className="btn"
                      type="button"
                      onClick={() => removeField(idx)}
                    >
                      X
                    </button>
                    {idx !== 0 && (
                      <button
                        className="btn"
                        type="button"
                        onClick={() => moveUp(idx)}
                      >
                        Up
                      </button>
                    )}
                    {idx !== fields.length - 1 && (
                      <button
                        className="btn"
                        type="button"
                        onClick={() => moveDown(idx)}
                      >
                        Down
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
