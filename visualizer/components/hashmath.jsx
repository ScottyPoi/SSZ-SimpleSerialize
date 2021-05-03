import Hasher from "./hasher";
import { randomBytes } from "crypto";
import BN from "bn.js";

const testData = "some test data";

const h1 = Hasher(testData);

const { createHash } = require("crypto");

// test
// create hash object
const testDataHash = createHash("sha256");
// give it test data
testDataHash.update(testData);
// generate sha256 hash
const testDataCopyHash = createHash("sha256");
// make new hash object, with same data
testDataCopyHash.update(testData);
const testDataEncoded = testDataHash.digest("hex");
const testDataCopyEncoded = testDataCopyHash.digest("hex");
// hashed values should be equal
console.log(testDataEncoded == testDataCopyEncoded);
console.log(h1 == testDataEncoded);
console.log(h1);
console.log(testDataEncoded);
console.log(testDataCopyEncoded);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const leftValues = [];
const rightValues = [];
const leftLeaves = [];
const rightLeaves = [];
const level3 = [];
const level2 = [];
const level1 = [];
const root = [];

for (let i = 0; i < 8; i++) {
  let num = `${i}`;
  let bug = Buffer.from(num);
  leftValues.push(bug);
}

for (let i = 8; i < 16; i++) {
  let num = `${i}`;
  let bug = Buffer.from(num);
  rightValues.push(bug);
}

leftValues.map((value) => {
  leftLeaves.push(Hasher(value));
});

rightValues.map((value) => {
  rightLeaves.push(Hasher(value));
});

for (let i = 0; i < 8; i += 2) {
  let left = leftLeaves[i];
  let right = leftLeaves[i + 1];
  let concat = left + right;
  let value = Hasher(concat);
  level3.push(value);
}

for (let i = 0; i < 8; i += 2) {
  let left = rightLeaves[i];
  let right = rightLeaves[i + 1];
  let concat = left + right;
  let value = Hasher(concat);
  level3.push(value);
}

for (let i = 0; i < 8; i += 2) {
  let left = level3[i];
  let right = level3[i + 1];
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
