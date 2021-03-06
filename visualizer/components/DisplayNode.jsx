import React, { useEffect, useState } from "react";
import styles from "../styles/GridNode.module.css";

export default function DisplayNode({ children, ...props }) {
  const [on, setOn] = useState(false);
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    console.log("pushed", [on]);
  });

  let nodevalue = props.nodevalue;
  let mousePressed = props.mousePressed;
  const nodetype =
    props.type == "value"
      ? styles.gridnodevalueoff
      : props.type == "serial"
      ? styles.gridnodeserialoff
      : props.type == "parent"
      ? styles.gridnodeparentoff
      : props.type == "hash"
      ? styles.gridnodehashoff
      : styles.gridnoderootoff;

  const extraClassName = on ? styles.gridnodevalueon : nodetype;

  const active = visited ? styles.gridnodevisited : "";

  return (
    <div
      id={props.id}
      className={`${styles.gridnode} ${extraClassName} ${active} text-center`}
      onMouseEnter={() =>
        !mousePressed
          ? setOn(true)
          : mousePressed && !visited
          ? setVisited(true)
          : mousePressed && visited
          ? setVisited(false)
          : setOn(true)
      }
      onMouseLeave={() => setOn(false)}
      onMouseDown={() => (!visited ? setVisited(true) : setVisited(false))}
      nodevalue={nodevalue}
    >
      <p className="text-center">{nodevalue}</p>
    </div>
  );
}
