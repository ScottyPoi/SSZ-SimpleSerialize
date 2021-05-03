import React, { useEffect, useState } from "react";
import styles from "../styles/GridNode.module.css";

export default function DisplayNode({ children, ...props }) {
  const [on, setOn] = useState(false);
  const [active, setActive] = useState(false);
  const [type, setType] = useState(props.type);
  const [nodevalue, setNodeValue] = useState(props.nodevalue);
  const [selected, setSelected] = useState(false);

  let mousePressed = props.mousePressed;
  // const activate = props.activate;
  // const deactivate = props.deactivate;

  const nodetype =
    type == "value"
      ? styles.gridnodevalueoff
      : type == "serial"
      ? styles.gridnodeserialoff
      : type == "parent"
      ? styles.gridnodeparentoff
      : type == "hash"
      ? styles.gridnodehashoff
      : styles.gridnoderootoff;

  const extraClassName = on && !active ? styles.gridnodevalueon : nodetype;

  const activated = active ? styles.gridnodeactive : "";
  const select = selected ? styles.gridnodeselected : "";

  return (
    <div
      id={props.id}
      className={`${styles.gridnode} ${extraClassName} ${activated} ${select} text-center`}
      onMouseEnter={() =>
        !mousePressed
          ? setOn(true)
          : mousePressed && !active
          ? setActive(true)
          : mousePressed && active
          ? setActive(false)
          : setOn(true)
      }
      onMouseLeave={() => setOn(false)}
      onMouseDown={() => (!selected ? setSelected(true) : setSelected(false))}
      onDoubleClick={() => (!active ? setActive(true) : setActive(false))}
      nodevalue={nodevalue}
      activate={() => setActive(true)}
      deactivate={() => setActive(false)}
    >
      <p className="text-center">{children}</p>
    </div>
  );
}
