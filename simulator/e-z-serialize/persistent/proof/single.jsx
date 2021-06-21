import {BranchNode, LeafNode, Node} from "../node";
import {Gindex, gindexIterator} from "../gindex";

export const ERR_INVALID_NAV = "Invalid tree navigation";

export function createSingleProof(rootNode, index) {
  const witnesses = [];
  let node = rootNode;
  for (const i of gindexIterator(index)) {
    if (i) {
      if (node.isLeaf()) throw new Error(ERR_INVALID_NAV);
      witnesses.push(node.left.root);
      node = node.right;
    } else {
      if (node.isLeaf()) throw new Error(ERR_INVALID_NAV);
      witnesses.push(node.right.root);
      node = node.left;
    }
  }
  return [node.root, witnesses.reverse()];
}

export function createNodeFromSingleProof(gindex, leaf, witnesses) {
  let node = new LeafNode(leaf);
  const w = witnesses.reverse();
  while (gindex > 1) {
    const sibling = new LeafNode(w.pop());
    if (gindex % BigInt(2) === BigInt(0)) {
      node = new BranchNode(node, sibling);
    } else {
      node = new BranchNode(sibling, node);
    }
    gindex = gindex / BigInt(2);
  }
  return node;
}
