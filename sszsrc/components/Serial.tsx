import { LeafNode, Node, Tree } from "@chainsafe/persistent-merkle-tree";
import {
  BasicType,
  CompositeType,
  ContainerType,
  isContainerType,
  ObjectLike,
  Type,
  toHexString,
  Number64UintType
} from "@chainsafe/ssz";
import { getSSZType, createRandomValue } from "../components/worker/helpers";

export default function Serial(
  sszType: Type<any> | CompositeType<any>,
  input: object
) {
  const type = sszType;
  const serialized = type.serialize(input);
  const root = type.hashTreeRoot(input);
  const tree: Tree = isContainerType(type)
    ? type.struct_convertToTree(input)
    : new Tree(new LeafNode(root));
  const length = type.struct_getSerializedLength(input);

  return { serialized, root, length, tree };
}

export function visualizeTree(root, counter = 2, nodeId=1) {
  let nodeIdx = nodeId
  let node: Node = root;
  // counter = node.isLeaf() || counter + 2;
  const colorL =
  // !node.isLeaf() && node.left.isLeaf() && toHexString(node.left.root) == toHexString(new Uint8Array(32))
  // ? "danger"
  //   : 
    !node.isLeaf() && node.left.isLeaf()
      ? "light"
      : // : !node.isLeaf() && node.right.isLeaf()
        // ? "light"
        "secondary";
  const colorR =
  // !node.isLeaf() && node.right.isLeaf() && toHexString(node.right.root) == toHexString(new Uint8Array(32))
  //     ? "danger"
  //   : 
    !node.isLeaf() && node.right.isLeaf()
      ? "light"
      : "secondary";
  counter = node.isLeaf() || node.left.isLeaf() ? counter + 2 : counter;
  counter = node.isLeaf() || node.right.isLeaf() ? counter + 2 : counter;
  const levels = node.isLeaf() ? (
    <></>
  ) : (
    <div className="row row-cols-2 justify-content-around">
      <div className="col" style={{width:"50%"}}>
        <div className="row justify-content-center overflow-hidden">
          <button
            type="button"
            className={`btn-outline btn-${colorL}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={toHexString(node.left.root)}
          >
{nodeIdx * 2}          
</button>
        </div>
        {!node.isLeaf() && visualizeTree(node.left, 0, nodeIdx*2)}
      </div>
      <div className="col" style={{width:"50%"}}>
        <div className="row justify-content-center overflow-hidden">
          <button
            type="button"
            className={`btn-outline btn-${colorR}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={toHexString(node.right.root)}
          >
{nodeIdx * 2 + 1}          
</button>
        </div>
        {!node.isLeaf() && visualizeTree(node.right, 0, nodeIdx*2 + 1)}
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
