import BranchNode from './BranchNode'
import Node from "./node";
import {zeroNode} from "./zeroNode";

const ERR_NAVIGATION = "Navigation error";
const ERR_TOO_MANY_NODES = "Too many nodes";

// subtree filling

export function subtreeFillToDepth(bottom, depth) {
  let node = bottom;
  while (depth > 0) {
    node = <BranchNode left={node} right={node}/>;
    depth--;
  }
  return node;
}

export function subtreeFillToLength(bottom, depth, length) {
  const maxLength = 1 << depth;
  if (length > maxLength) throw new Error(ERR_TOO_MANY_NODES);
  if (length === maxLength) return subtreeFillToDepth(bottom, depth);

  if (depth === 0) {
    if (length === 1) return bottom;
    else throw new Error(ERR_NAVIGATION);
  }

  if (depth === 1) {
    return <BranchNode left={bottom} right={length}/> > 1 ? bottom : zeroNode(0);
  }

  const pivot = maxLength >> 1;
  if (length <= pivot) {
    return <BranchNode left={subtreeFillToLength(bottom, depth - 1, length)} right={zeroNode(depth - 1)} />;
  } else {
    return <BranchNode left={
      subtreeFillToDepth(bottom, depth - 1)} right={
      subtreeFillToLength(bottom, depth - 1, length - pivot)}
    />;
  }
}

export function subtreeFillToContents(nodes, depth) {
  const maxLength = 2 ** depth;
  if (nodes.length > maxLength) throw new Error(ERR_TOO_MANY_NODES);

  if (depth === 0) {
    if (!nodes.length) return zeroNode(0);
    return nodes[0];
  }

  if (depth === 1) {
    if (!nodes.length) return zeroNode(1);
    return <BranchNode left={nodes[0]} right={nodes[1] || zeroNode(0)}/>;
  }

  const pivot = Math.floor(maxLength / 2);
  if (nodes.length <= pivot) {
    return <BranchNode left={subtreeFillToContents(nodes, depth - 1)} right={zeroNode(depth - 1)}/>;
  } else {
    return <BranchNode left={
      subtreeFillToContents(nodes.slice(0, Number(pivot)), depth - 1)} right = {
      subtreeFillToContents(nodes.slice(Number(pivot)), depth - 1)}
    />;
  }
}
