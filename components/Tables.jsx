import { formatString } from "./FormatString";
import { ForkName, typeNames, forks } from "../sszsrc/util/types";

import {
  getFixedSerializedLength,
  hasVariableSerializedLength,
  isBasicType,
  isBigIntUintType,
  isBitListType,
  isBitVectorType,
  isBooleanType,
  isByteVectorType,
  isCompositeType,
  isContainerType,
  isListType,
  isNumberUintType,
  isRootType,
  isUintType,
  isVectorType,
  Type,
} from "@chainsafe/ssz";

import { Fork } from "@chainsafe/lodestar-types/lib/phase0/types/misc";

import {
  typeFamily,
  typeClass,
  isBasic,
  isType,
  typeCheck,
  variableLength,
  fixedOrVariable,
  checkFamily,
} from "./ssztesters";

const fieldName = {
  target: { name: "Checkpoint" },
  attestation1: { name: "IndexedAttestation" },
  attestation2: { name: "IndexedAttestation" },
  source: { name: "Checkpoint" },
  attestingIndices: { name: `ValidatorIndex` },
  beaconBlockRoot: { name: "Root" },
  depositCount: { name: "Uint64" },
  count: { name: "Uint64" },
  selectionProof: { name: "BLSSignature" },
};
const fieldNames = Object.keys(fieldName);

const types = forks["altair"];
const names = typeNames(types);

function basicInfoCols(type) {
  // const symbols = Object.keys(type._typeSymbols)
  return (
    <>
      <td>{isBasic(type)}</td>
      <td>{typeClass(type)}</td>
      <td>{typeFamily(type)}</td>
      <td>{fixedOrVariable(type)}</td>
      <td>{variableLength(type)}</td>
      {/* <td>{symbols.map((sym) => {return <tr>{sym}</tr>})}</td> */}
    </>
  );
}

function showElementType(obj) {
  const elementType = obj.elementType;
  if (elementType) {
    const byteLength = elementType.byteLength;
    if (byteLength) {
      return byteLength == 1
        ? `Bytes${obj.length}`
        : byteLength == 8
        ? `PooInt[64]`
        : null;
    }
  }

  return obj.elementType.byteLength && obj.elementType.byteLength;
}

function parseObj(obj) {
  return Object.keys(obj)
    .filter(
      (k) =>
        k !== "_typeSymbols" &&
        k !== "_chunkDepth" &&
        k !== "_defaultNode" &&
        k !== "_maxBigInt" &&
        k !== "_expandedType" &&
        k !== "length" &&
        k !== "byteLength"
    )
    .map((f) => {
      return names.includes(formatString(f)) ? (
        subTreeRows(formatString(f))
      ) : fieldNames.includes(f) ? (
        <tr>
          <th>{`${f}: `}</th>
          <td>
            {`<898`}
            {fieldName[f].name}
            {`>`}
          </td>
          <td>{subTreeRows(fieldName[f].name)}</td>
        </tr>
      ) : (
        <tr>
          {f == "elementType" ? (
            <td>
              {showElementType(obj) &&
                `${showElementType(obj)} => ${typeFamily(
                  types[showElementType(obj)]
                )}`}
            </td>
          ) : (
            f != "fields" && <th>{`${f}:`}</th>
          )}
          {fieldName[f] && <th scope="row">{fieldName[f]}heheh</th>}
          <td>
            {isType(names, f) && isContainerType(types[f])
              ? sub.includes("attestation") && `<IndexedAttestation>`
              : isType(names, f) &&
                typeClass(types[f]).substr(0, 1) == "U" &&
                typeClass(types[f])}
          </td>
          {typeof obj[f] == "object" ? (
            <td>{parseObj(obj[f])}</td>
          ) : (
            <td>{typeof obj[f] == "number" ? `${obj[f]}` : null}</td>
          )}
        </tr>
      );
    });
}

function parseNumber(type, subType = null) {
  return (
    <>
      {isUintType(type) && <td>{typeClass(type)}</td>}
      {subType && names.includes(formatString(subType)) && (
        <td>{checkFamily(formatString(subType))}</td>
      )}
    </>
  );
}

function subTreeCol(typeName) {
  return Object.keys(types[typeName]).map((t) => {
    let obj = types[typeName][t];
    let num = types[typeName];
    return typeof obj == "object"
      ? parseObj(obj)
      : typeof obj == "number"
      ? parseNumber(num, t)
      : // : typeof obj == "function" &&
        //   obj.toString().substring(0, 20) == "() => typesRef.get()"
        // ? obj.toString().substring(21)
        null;
  });
}

export function subTreeRow(typeName, sub, subType) {
  const name = fieldNames.includes(sub) ? fieldName[sub].name : null;
  const fName = name ? formatString(name) : null;
  const tName = names.includes(formatString(sub)) ? formatString(sub) : null;

  return (
    <tr>
      <th scope="row" className="align-items-start">
        {sub}:{""}
      </th>
      {fieldNames.includes(sub) ? (
        <td>{`<${name}> = `}</td>
      ) : (
        names.includes(formatString(sub)) && (
          <td>{`<${formatString(sub)}> =`}</td>
        )
      )}
      
      {names.includes(formatString(sub)) && (
        <td>{subTreeRows(formatString(sub))}</td>
      )}
      {fieldNames.includes(sub) ? (
        <td>{subTreeRows(fieldName[sub].name)}</td>
      ) : (
        "nul"
      )}
      {fieldName[sub] &&
      isType(names, fName) &&
      isContainerType(types[fName]) ? (
        <td>{parseObj(types[fName])}</td>
      ) : null}
      <td>{fName && subTreeRows(tName)}</td>
    </tr>
  );
}

export function subTreeRows(typeName) {
  return (
    typeof types[typeName] != "null" &&
          typeof types[typeName] != "undefined" && typeof types[typeName].fields == "object" ?
    Object.keys(types[typeName].fields).map((sub) => {
      let subType = formatString(sub);
      return subTreeRow(typeName, sub, subType);
    })
    : typeof types[typeName] == 'object' && subTreeCol(typeName))
}

function tableMapping() {
  const fullTable = names.map((typeName) => {
    return (
      <tr id={typeName} key={typeName}>
        <th
          scope="row"
          id={`TypeName: ${typeName}`}
          className="align-items-start"
        >
          {typeName}
        </th>
        {basicInfoCols(types[typeName])}
        {typeof types[typeName] != "null" &&
          typeof types[typeName] != "undefined" &&
          isContainerType(types[typeName]) && <td>{subTreeRows(typeName)}</td>}
      </tr>
    );
  });
  return fullTable;
}

function TableBody() {
  return <tbody>{tableMapping()}</tbody>;
}

function TableHead(props) {
  const names = props.names;
  const types = props.types;
  const columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <thead>
      <tr>
        {columns.map((name, idx) => {
          return (
            <th key={idx} scope="col">
              #
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default function makeTable() {
  return (
    <>
      {typeof Fork}
      <table className="table">
        <TableHead names={names} types={types} />
        <TableBody names={names} types={types} />
      </table>
    </>
  );
}
