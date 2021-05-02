import { randomBytes } from "crypto";
import BN from "bn.js";

export default function getRandomValue(type) {
  // assert type is basic ssz type

  if (type === "uint8") {
    return getRandomUint8();
  } else if (type === "uint16") {
    return getRandomUint16();
  } else if (type === "uint32") {
    return getRandomUint32();
  } else if (type === "uint64") {
    return getRandomUint64();
  } else if (type === "uint128") {
    return getRandomUint128();
  } else if (type === "uint256") {
    return getRandomUint256();
  } else if (type === "boolean") {
    return getRandomBoolean();
  }
}

function getRandomUint256() {
  const value = randomBytes(32);
  const string = `0x${value.toString("hex")}`;
  const bigInt = BigInt(`0x${value.toString("hex")}`);
  const bn = new BN(value.toString("hex"), 16);
  return [
    {
      value: value,
      string: string,
      bigInt: bigInt,
      bn: bn,
      type: "uint256",
    },
  ];
}

function getRandomUint128() {
  const value = randomBytes(16);
  const string = `0x${value.toString("hex")}`;
  const bigInt = BigInt(`0x${value.toString("hex")}`);
  const bn = new BN(value.toString("hex"), 16);
  return [
    {
      value: value,
      string: string,
      bigInt: bigInt,
      bn: bn,
      type: "uint128",
    },
  ];
}

function getRandomUint64() {
  const value = randomBytes(8);
  const string = `0x${value.toString("hex")}`;
  const bigInt = BigInt(`0x${value.toString("hex")}`);
  const bn = new BN(value.toString("hex"), 16);
  return [
    {
      value: value,
      string: string,
      bigInt: bigInt,
      bn: bn,
      type: "uint64",
    },
  ];
}

function getRandomUint32() {
  const value = randomBytes(4);
  const string = `0x${value.toString("hex")}`;
  const bigInt = BigInt(`0x${value.toString("hex")}`);
  const bn = new BN(value.toString("hex"), 16);
  return [
    {
      value: value,
      string: string,
      bigInt: bigInt,
      bn: bn,
      type: "uint32",
    },
  ];
}

function getRandomUint16() {
  const value = randomBytes(2);
  const string = `0x${value.toString("hex")}`;
  const bigInt = BigInt(`0x${value.toString("hex")}`);
  const bn = new BN(value.toString("hex"), 16);
  return [
    {
      value: value,
      string: string,
      bigInt: bigInt,
      bn: bn,
      type: "uint16",
    },
  ];
}

function getRandomUint8() {
  const value = randomBytes(1);
  const string = `0x${value.toString("hex")}`;
  const bigInt = BigInt(`0x${value.toString("hex")}`);
  const bn = new BN(value.toString("hex"), 16);
  return [
    {
      value: value,
      string: string,
      bigInt: bigInt,
      bn: bn,
      type: "uint8",
    },
  ];
}

function getRandomBoolean() {
  let rand = Math.floor(Math.random());
  if (rand == 1) {
    return {
      value: true,
      string: `0x${true.toString("hex")}`,
      type: "boolean",
    };
  } else {
    return {
      value: false,
      string: `0x${false.toString("hex")}`,
      type: "boolean",
    };
  }
}
