import styles from "../styles/NodeStyles.module.css";
import "../styles/NodeStyles.module.css";

export default function Node(props) {
  const treeIdx = props.treeIdx;
  const selected = props.selected;
  const active = props.active;
  const type = props.type;
  const idx = props.idx;

  // useEffect(() => {
  //   toggleProof()
  // }, [setSelected])

  function toggleActive() {
    active ? setActive(false) : setActive(true);
  }

  function isActive() {
    return props.active;
  }

  function isSelected() {
    return props.selected;
  }

  let activated = isActive() ? styles.activated : styles.deactivated;
  let selectivated =
    (isSelected() && props.level === "leaf") ||
    (props.level === "intro" && isSelected())
      ? styles.selected
      : styles.unselected;

  const empty = props.empty ? styles.empty : "";
  const level =
    props.level === "merkle"
      ? styles.merkle
      : props.level === "intro"
      ? styles.intro
      : props.level === "root"
      ? styles.root
      : props.level === "length"
      ? styles.length
      : props.level === "branch"
      ? styles.branch
      : props.level === "intermediate"
      ? styles.intermediate
      : props.level === "limit"
      ? styles.limit
      : styles.leaf;
  const chunkIdx = props.empty
    ? ""
    : props.level === "demo"
    ? styles.demo
    : props.level === "leaf" && props.chunkIdx == props.numChunks - 1
    ? styles.green
    : props.level === "leaf" && props.chunkIdx > props.numChunks - 1
    ? styles.limit
    : props.level === "leaf" && props.chunkIdx % 2 == 0
    ? styles.blue
    : props.level === "leaf" && props.chunkIdx % 2 == 1
    ? styles.red
    : styles.tree;

  let newNode = (
    <p
      className={`p-0 text-center ${styles.node} ${level} ${empty} ${chunkIdx} ${selectivated} ${activated}`}
      >{`${type}`}

    </p>
  );

  return newNode;
}
