import Hasher from "./hasher";
import getRandomValue from "./RandomValues";
import { useState } from "react";

const types = ["uint256", "uint128", "uint64", "uint32", "uint16", "uint8"];

export default function RandomDataSet() {
  const dataSet = {
    Values: Values,
    Serialized: Serialized,
    Leaves: Leaves,
    level2: level2,
    level1: level1,
    root: root,
  };

  return dataSet;
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

for (let i = 0; i < 8; i++) {
  let type = getRandomType();
  let value = getRandomValue(type)[0];
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

function getHashRoot() {
  let left = level1[0];
  let right = level1[1];
  let concat = left + right;
  let value = Hasher(concat);
  return value;
}

const root = getHashRoot();
