import {
  GindexBitstring,
  LeafNode,
  Node,
  Tree,
} from "@chainsafe/persistent-merkle-tree";
import {
  BasicType,
  CompositeType,
  ContainerType,
  isContainerType,
  ObjectLike,
  Type,
  toHexString,
  Number64UintType,
  isCompositeType,
} from "@chainsafe/ssz";
import * as ssz from "@chainsafe/ssz";
import { getSSZType, createRandomValue } from "../components/worker/helpers";
import { forks, typeNames } from "../util/types";

type FieldInfo = {
  isBasic: boolean;
  gIndexBitString: GindexBitstring;
  gIndex: bigint;
};

const sszTypeNames = typeNames(forks["altair"]).concat(typeNames(forks["phase0"])).concat(typeNames(forks["prim"])).map((string) => {return string.toLowerCase()});
export default function Serial(sszType: Type<unknown>, input: object) {
  const type = sszType;
  const serialized = type.serialize(input);
  const root = type.hashTreeRoot(input);
  const tree: Tree = isCompositeType(type)
    ? type.struct_convertToTree(input)
    : new Tree(new LeafNode(root));
  const length = isContainerType(type) ? type.tree_getSerializedLength(tree) : type.struct_getSerializedLength(input)
  const names =  isContainerType(type) && type.tree_getPropertyNames();
  const gIndices = names && names.map((name) => {
    return  isContainerType(type) && type.getPropertyGindex(name);
  });
  const gTypes = names && names.map((name) => {
    return  isContainerType(type) && type.getPropertyType(name);
  });


  const typeMap: (string | number | BigInt)[][] = []

  const nameTypes: {
    [k: string]: (string | number)[];
  } = isContainerType(type) && Object.fromEntries(
    new Map(
      names && names.map((name, idx) => {
        let t = type as ContainerType<unknown>
        let typ: Type<unknown> = t.getPropertyType(name);
        let isCon = isContainerType(typ);
        let conType: ContainerType<unknown> = isCon
          ? (typ as ContainerType<unknown>)
          : null;
        // let tre: Tree = tree.getSubtree(gIndices[idx]);
        let numbers = Object.values(typ).map((val, idx) => {
          return typeof val == "number"
            ? `${Object.keys(typ)[idx]} == ${val}`
            : "";
        });
        let typNames = isCon ? conType.tree_getPropertyNames() : numbers;
        let typIdx = typNames.map((name) => {
          return isCon && [name, conType.getPropertyGindex(name)];
        });
        typeMap.push(typIdx[idx])
        return [name, typNames];
      })
    )
  );

  // const propertyTypes: { [k: string]: (Node | Tree)[]} = Object.fromEntries( new Map(names.map((name, idx) => {
  //   return [name, [tree.getNode((gIndices[idx]).toString()),tree.getSubtree(gIndices[idx])]]
  // })))

  const typeIdx =  isContainerType(type) && Object.fromEntries(
    new Map(
      names.map((name, idx) => {
        let t = type as ContainerType<unknown>
        let typ: Type<unknown> = t.getPropertyType(name);
        let isCon = isContainerType(typ);
        let conType: ContainerType<unknown> = isCon
          ? (typ as ContainerType<unknown>)
          : null;
        let tre: Tree = tree.getSubtree(gIndices[idx]);
        let typNames = conType ? conType.fields : {};
        return [name, typNames];
      })
    )
  );

  const casingMap: Map<string, FieldInfo> = (type as ContainerType<unknown>)
    .fieldInfos;

  const fieldMap =  isContainerType(type) && Object.fromEntries(
    new Map(
      names.map((name, idx) => {
        return [gIndices[idx], name];
      })
    )
  );

  return {
    sszType,
    serialized,
    root,
    tree,
    length,
    names,
    gIndices,
    fieldMap,
    nameTypes,
    typeIdx,
    casingMap,
    gTypes
    // propertyTypes,
  };
}

export function visualizeTree(
  tree: Tree,
  root: Node,
  nodeId = 1,
  fieldMap: Record<string, string> = null,
  sszType: Type<any> = null
) {
  let node: Node = root;
  let nodeLeaf = node.isLeaf();
  let gIndices = fieldMap ? Object.keys(fieldMap) : [];
  let fieldNames = fieldMap ? Object.values(fieldMap) : [];
  let nodeIdx = nodeId;
  let leftIdx = nodeIdx * 2;
  let rightIdx = leftIdx + 1;
  let leftField = node && !nodeLeaf && gIndices.includes(leftIdx.toString());
  let RightField = node && !nodeLeaf && gIndices.includes(rightIdx.toString());
  const leaves = sszType  ? (sszType as ContainerType<unknown>).tree_getLeafGindices(tree).map((i) => {return Number(i)}).sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }) : []
  const colorL =
    !node.isLeaf() && leftField
      ? "danger"
      // : !node.isLeaf() &&
      //   toHexString(node.left.root) ==
      //     "0xf5a5fd42d16a20302798ef6ed309979b43003d2320d9f0e8ea9831a92759fb4b"
      // ? "warning"
      : !node.isLeaf() && node.left.isLeaf()
      ? "light"
      : "secondary";
  const colorR =
    !node.isLeaf() && RightField
      ? "danger"
      // : !node.isLeaf() &&
      //   toHexString(node.right.root) ==
      //     "0xf5a5fd42d16a20302798ef6ed309979b43003d2320d9f0e8ea9831a92759fb4b"
      // ? "warning"
      : !node.isLeaf() && node.right.isLeaf()
      ? "light"
      : "secondary";

  const leftType: string =
    fieldMap &&
    typeNames(forks["altair"]).includes(fieldMap[(nodeIdx * 2).toString()]) &&
    fieldMap[(nodeIdx * 2).toString()];

  const leftTitle =
    !node.isLeaf() && leftField
      ? `Serialized: ${toHexString(node.left.root)} Proof: ${tree
          .getSingleProof(BigInt(nodeIdx * 2))
          .map((array) => {
            return `\n${toHexString(array)} `;
          })}`
      : !node.isLeaf() && leftType
      ? leftType
      : !node.isLeaf() && node.left.isLeaf()
      ? `Serialized: ${toHexString(node.left.root)} Proof: ${tree
          .getSingleProof(BigInt(nodeIdx * 2))
          .map((array) => {
            return `\n${toHexString(array)} `;
          })}`
      : !node.isLeaf() && toHexString(node.left.root);
  const rightType: Type<any> = !node.isLeaf() && RightField && sszType && (sszType as ContainerType<any>).getPropertyType(fieldMap[(nodeIdx * 2 + 1).toString()])

  const rightTitle =
    !node.isLeaf() && leftField
      ? `Serialized: ${toHexString(node.right.root)} Proof: ${tree
          .getSingleProof(BigInt(nodeIdx * 2 + 1))
          .map((array) => {
            return `\n${toHexString(array)} `;
          })}`
      : !node.isLeaf() && leftType
      ? leftType
      : !node.isLeaf() && node.right.isLeaf()
      ? `Serialized: ${toHexString(node.right.root)} Proof: ${tree
          .getSingleProof(BigInt(nodeIdx * 2 + 1))
          .map((array) => {
            return `\n${toHexString(array)}`;
          })}`
      : !node.isLeaf() && toHexString(node.right.root);

  const levels = node.isLeaf() ? (
    <></>
  ) : (
    <div className="row p-0 m-0">
      <div style={{ width: "50%", padding: "0px" }}>
        {/* <div className="d-flex"> */}
        <button
          style={{ width: "100%" }}
          type="button"
          className={`btn-outline btn-${colorL}`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={leftTitle}
        >
          {gIndices.includes((nodeIdx * 2).toString())
            ? `${nodeIdx * 2}: ${
                fieldMap && fieldMap[(nodeIdx * 2).toString()]
              }`
            : `${leaves.includes(leftIdx) ? leftIdx : node.left.isLeaf() ? "0" : "H"}`}
        </button>
        {/* </div> */}
        {!node.isLeaf() && leftField
          ? visualizeTree(tree, node.left, leftIdx, null, sszType)
          : visualizeTree(tree, node.left, nodeIdx * 2, fieldMap, sszType)}
      </div>
      <div style={{ width: "50%", padding: "0px" }}>
        {/* <div className="d-flex"> */}
        <button
          style={{ width: "100%" }}
          type="button"
          className={`btn-outline btn-${colorR}`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title={rightTitle}
        >
          {gIndices.includes((nodeIdx * 2).toString())
            ? fieldMap && fieldMap[(nodeIdx * 2 + 1).toString()]
              ? `${nodeIdx * 2 + 1}: ${
                  fieldMap && fieldMap[(nodeIdx * 2 + 1).toString()]
                }`
              : "zeroNode"
            : `${leaves.includes(rightIdx) ? rightIdx : node.right.isLeaf() ? "*" : "H"}`}
        </button>
        {/* </div> */}
        {!node.isLeaf() && RightField && sszType
          ? visualizeTree(tree, node.right, rightIdx, null, sszType)
          : visualizeTree(tree, node.right, nodeIdx * 2 + 1, fieldMap, sszType)}
      </div>
    </div>
  );

  if (!root) {
    return <></>;
  }

  const queue = [node];
  // while (queue.length) {
  //   const queueLength = queue.length;
  //   const level = [];

  //   for (let i = 0; i < queueLength; i++) {
  //     const node = queue.shift();

  //     if (!node.isLeaf()) {
  //       queue.push(node.left);
  //     }
  //     if (!node.isLeaf()) {
  //       queue.push(node.right);
  //     }

  //     level.push(node);
  //   }
  //   levels.push(level);
  // }
  return levels;
}
