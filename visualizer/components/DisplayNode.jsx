import React, { useEffect, useState } from "react";
import styles from "../styles/GridNode.module.css";

export default function DisplayNode({ ...props }) {
  const [on, setOn] = useState(false);
  const [visited, setVisited] = useState(false);

  let nodevalue = props.nodevalue;
  let mousePressed = props.mousePressed;

  const extraClassName = visited ? styles.visited : on ? styles.on : styles.off;

  return (
    <div
      id={props.id}
      className={`${styles.gridnode} ${extraClassName} text-center`}
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
