import { useEffect, useState } from "react";
import classObj from "../data/ClassObj";
import { ops } from "./FunctionsTool";

export default function TypeClasses(props) {
  const [subTypes, setSubTypes] = useState(null);
  const classObj = props.classObj;
  const [sub0, setSub0] = useState(classObj);
  const [sub1, setSub1] = useState(null);
  const [sub2, setSub2] = useState(null);
  const [sub3, setSub3] = useState(null);
  const [sub4, setSub4] = useState(null);
  const [sub5, setSub5] = useState(null);

  const subs = {
    0: {
      sub: classObj,
      set: setSub0,
    },
    1: {
      sub: sub1,
      set: setSub1,
    },
    2: {
      sub: sub2,
      set: setSub2,
    },
    3: {
      sub: sub3,
      set: setSub3,
    },
    4: {
      sub: sub4,
      set: setSub4,
    },
    5: {
      sub: sub5,
       set: setSub5,
    },
  };

  const ssz = props.ssz;

  function classMenu(obj, prev = null) {
    const keys = Object.keys(obj);
    if (keys.includes("subs")) {
      return obj.subs.map((key) => {
        return (
          <div className="row justify-content-end">
            {/* {!Object.keys(key).includes("subs") && <div className="col">{""}</div>} */}
            <div className="col p-0">
              <button
                className={`list-group-item list-group-item-action ${
                  props.active == props.name && `active`
                } btn-success`}
                type="button"
                id={`${props.name}menu`}
                onClick={() => props.handleChange(key.name, ssz)}
                // onMouseUp={() => props.setTypeClass && props.setTypeClass(ssz.getTreeValueClass(new ssz[key.name](ops[key.name])) && props.setTypeClass(ssz.getTreeValueClass(new ssz[key.name](ops[key.name])).toString()))}

              >
                <h5 className="text-start">{key.name}</h5>
              </button>
            </div>
            {Object.keys(key).includes("subs") && (
              <div className="col">{classMenu(key)}</div>
            )}
          </div>
        );
      });
    } else return;
  }

  function handleClick() {
    const menu = classMenu(classObj);
    // !props.funtionspage && props.handleChange(props.head, ssz);
    props.setSubSubMenu(classMenu(classObj));
    // props.setSubMenu(classMenu(menu));
    props.setSubMenu(
      <div className="row ">
        <div className="col">
          <button
            type="button"
            className="list-group-item list-group-item-action"
            id={`${classObj.name}button`}
            onClick={() => props.handleChange(props.head, ssz)}
          >
            <h5 className="text-start">{classObj.name}</h5>
          </button>
        </div>
      </div>
    );
    props.setGroup(props.group);
    // handleChangeMenu(classObj);
    return;
    }

  if (props.functionsPage) {
    handleClick();
    return (<div>huh</div>)
  } else {
    return (
      <button
        className={`list-group-item list-group-item-action ${
          props.active == props.name && `active`
        }`}
        type="button"
        id={`${props.name}menu`}
        onClick={() => handleClick()}
      >
        <h3>{props.name}</h3>
      </button>
    );
  }
}
