import SSZMenu from "./sszmenu";

export default function MerkleMenu(props) {
  const list = props.lst;
  const pmt = props.pmt;

  const classes = [
    "Node",
    "BranchNode",
    "LeafNode",
    "Tree",
    "ProofType",
    "ProofTypeSerialized",
  ];

  const hashFunctions = list.map((f) => {
    return f.includes("hash") | f.includes("Hash") && f;
  });
  const gIndexFunctions = list.map((f) => {
    return f.includes("Gind") | f.includes("gind") && f;
  });
  const proofFunctions = list.map((f) => {
    return f.includes("Proof") | f.includes("proof") && f;
  });
  const subTreeFunctions = list.map((f) => {
    return f.includes("SubTree") | f.includes("subtree") && f;
  });

  const functions = list.map((f) => {
    return (
      !classes.includes(f) &
        !hashFunctions.includes(f) &
        !subTreeFunctions.includes(f) &
        !proofFunctions.includes(f) &
        !gIndexFunctions.includes(f) && f
    );
  });

  const merkleTreeFunctions = [
    classes,
    hashFunctions,
    gIndexFunctions,
    proofFunctions,
    subTreeFunctions,
    functions,
  ];
  const mtfStrings = [
    "Merkle Tree Class Objects",
    "Merkle Tree Hash Funcions",
    "Merkle Tree GIndex Functions",
    "Merkle Tree Proof Functions",
    "Merkle Tree Subtree Functions",
    "Merkle Tree Helper Functions",
  ];

  return (
    <div className="container">
      {merkleTreeFunctions.map((f, idx) => {
        return (
          <SSZMenu
            lst={f}
            name={mtfStrings[idx]}
            handleChange={props.handleChange}
            ssz={pmt}
            setSubMenu={props.setSubMenu}
            setGroup={props.setGroup}
            active={props.group}
            resetSubs={props.resetSubs}
          />
        );
      })}
    </div>
  );
}
