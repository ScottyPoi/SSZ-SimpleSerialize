import { node } from "stylis";
import RandomDataSet from "./RandomDataSet";

export default function MakeRandomTree() {
  return {
    treeValues: treeValues,
    treeSerialized: treeSerialized,
    treeLeaves: treeLeaves,
    treeLevel2: treeLevel2,
    treeLevel1: treeLevel1,
    treeRoot: treeRoot,
  };
}

const { Values, Serialized, Leaves, level2, level1, root } = RandomDataSet();

let valueIndex = 24;
const treeValues = Values.map((value) => {
  let newNode = {
    index: valueIndex,
    type: value.type,
    // value: value.value,
    string: value.string,
    // bigInt: value.bigInt,
    // bn: value.bn,
    isRoot: false,
    children: null,
    parent: valueIndex - 8,
  };
  valueIndex += 1;
  return newNode;
});

const treeSerialized = [];
for (let i = 0; i < Values.length; i++) {
  let newNode = {
    index: i + 16,
    type: "Serialized",
    data: Serialized[i],
    isRoot: false,
    children: i + 8,
    parent: i - 8,
  };
  treeSerialized.push(newNode);
}

const treeLeaves = [];
for (let i = 0; i < 8; i++) {
  let newNode = {
    index: i + 8,
    type: "Leaves",
    data: Leaves[i],
    isRoot: false,
    children: i,
    parent: Math.floor(i / 2),
  };
  treeLeaves.push(newNode);
}

const treeLevel2 = [];
for (let i = 0; i < level2.length; i++) {
  let newNode = {
    index: i + 4,
    type: "Parent",
    data: level2[i],
    isRoot: false,
    children: [`${i * 2}`, `${i * 2 + 1}`],
    parent: Math.floor(i / 2),
  };
  treeLevel2.push(newNode);
}

const treeLevel1 = [];
for (let i = 0; i < level1.length; i++) {
  let newNode = {
    index: i + 2,
    type: "Parent",
    data: level1[i],
    isRoot: false,
    children: [`${i * 2}`, `${i * 2 + 1}`],
    parent: Math.floor(i / 2),
  };
  treeLevel1.push(newNode);
}

const treeRoot = [{ data: root, type: "root", index: 0 }];
