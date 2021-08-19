function mkBranch(tree, index) {
  let i = index + Math.floor(tree.length / 2);
  let o = [tree[index]];
  while (i > 1) {
    o.push(tree[index ^ 1]);
    i = Math.floor(i / 2);
  }
  return o;
}

const tree = "0123456789abcdef";

const branch = mkBranch(tree, 0);

// console.log(branch);

function mkMultiBranch(tree, indices) {
  let output = [];
  let calculableIndices = {};
  indices.forEach((i) => {
    let newBranch = mkBranch(tree, i);
    let index = Math.floor(tree.length / 2) + i;
    calculableIndices[index.toString()] = true;
    for (let j = 1; j < newBranch.length; j++) {
      calculableIndices[(index ^ 1).toString()] = true;
      index = Math.floor(index / 2);
    }
    output.push(newBranch);
  });

  let complete = false;
  while (!complete) {
    complete = true;
    let keys = Object.keys(calculableIndices)
      .map((x) => {
        return Math.floor(x / 2);
      })
      .sort()
      .reverse();
    for (let k in keys) {
      if (
        Object.keys(calculableIndices).includes((k * 2).toString()) &
        Object.keys(calculableIndices).includes((k * 2 + 1).toString()) &
        !Object.keys(calculableIndices).includes(k.toString())
      ) {
        calculableIndices[k.toString()] = true;
        complete = false;
      }
    }
  }
  let scanned = {};
  let iandb = indices.map((index, idx) => {
    return {
      i: index,
      b: output[idx],
    };
  });
  iandb.forEach((i) => {
    let index = Math.floor(tree.length / 2) + i.i;
    scanned[index] = true;
    for (let j = 1; j < i.b.length; j++) {
      if (
        (Object.keys(calculableIndices).includes(((index ^ 1) * 2).toString()) &
          Object.keys(calculableIndices).includes(
            ((index ^ 1) * 2 + 1).toString()
          )) |
        indices.includes((index ^ 1) - Math.floor(tree.lenth / 2)) |
        Object.keys(scanned).includes((index ^ 1).toString())
      ) {
        i.b[j] = "0x";
      }
      scanned[index ^ 1] = true;
      index = Math.floor(index / 2);
    }
  });
  return output;
}

const multi = mkMultiBranch(tree, [15, 0]);

// console.log(multi);

// for (let i = 16; i < 24; i++) {
//   console.log(i ^ 1);
// }

const treeNodes = {
  16: { active: false },
  17: { active: false },
  18: { active: false },
  19: { active: false },
  20: { active: true },
  21: { active: false },
  22: { active: true },
  23: { active: false },
};

export default function multiProof(tree) {
  let proof = [];
  for (let i = 23; i >= 16; i--) {
    // iterate through leaf ndoes
    let neighboridx = i ^ 1;
    // and leaf's neighbor
    let node = tree[i.toString()];
    let neighbor = tree[neighboridx.toString()];
    if (node.active & !neighbor.active) {
      proof.push(neighboridx - 8);
    }
    if (node.active & neighbor.active) {
      proof.push(node-8);
      proof.push(neighboridx-8)
    }
  }
  proof.forEach((n) =>
    proof.push(
      Math.floor(n / 2) ^ 1,
      Math.floor((Math.floor(n / 2) ^ 1) / 2) ^ 1
    )
  );
  for (let i = 0; i < 15; i++) {
    if (proof.includes(i) & proof.includes(i ^ 1)) {
      proof = proof.filter((n) => (n != i));
      proof = proof.filter((n) => (n != (i^1)))
    }
  }

  return proof;
}

console.log(multiProof(treeNodes));

