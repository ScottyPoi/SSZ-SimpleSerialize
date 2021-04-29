import Hasher from "./hasher";
import getRandomValue from "./RandomValues";

const types = ["uint256", "uint128", "uint64", "uint32", "uint16", "uint8"];

export default function RandomDataSet() {
  return {
    Values: Values,
    Serialized: Serialized,
    Leaves: Leaves,
    level2: level2,
    level1: level1,
    root: root,
  };
}

function getRandomType() {
  let index = Math.floor(Math.random() * 5);
  return types[index];
}

const Values = [];
const Serialized = [];
const Leaves = [];
const level2 = [];
const level1 = [];
const root = [];

for (let i = 0; i < 8; i++) {
  let type = getRandomType();
  let value = getRandomValue(type);
  Values.push(value);
}

Values.map((value) => {
  Serialized.push(value.string);
});

Serialized.map((value) => {
  Leaves.push(Hasher(value));
});

for (let i = 0; i < 8; i += 2) {
  let left = Leaves[i];
  let right = Leaves[i + 1];
  let concat = left + right;
  let value = Hasher(concat);
  level2.push(value);
}

for (let i = 0; i < 4; i += 2) {
  let left = level2[i];
  let right = level2[i + 1];
  let concat = left + right;
  let value = Hasher(concat);
  level1.push(value);
}

for (let i = 0; i < 2; i += 2) {
  let left = level1[i];
  let right = level1[i + 1];
  let concat = left + right;
  let value = Hasher(concat);
  root.push(value);
}
