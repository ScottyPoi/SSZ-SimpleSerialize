export default function MerkleMap({ children }) {
  const map = [];
  let {
    treeValues,
    treeSerialized,
    treeLeaves,
    treeLevel2,
    treeLevel1,
    treeRoot,
  } = children;

  for (let i = 0; i < treeValues.lengh; i++) {
    let proof = {
      value: treeValues[i],
      serial: treeSerialized[i],
      hash: treeLeaves[i],
      level2: treeLevel2[i],
      level1: treeLevel1[i],
      root: treeRoot,
    };
    map.push(proof);
  }
  return map;
}
