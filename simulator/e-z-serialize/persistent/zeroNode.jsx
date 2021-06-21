import BranchNode from './BranchNode'
import LeafNode from './LeafNode'
import Node from "./node";

const zeroes = [<LeafNode root={new Uint8Array(32)}/>];




export function zeroNode(depth) {
  if (depth >= zeroes.length) {
    for (let i = zeroes.length; i <= depth; i++) {
      zeroes[i] = <BranchNode left={zeroes[i - 1]} right={zeroes[i - 1]} />;
    }
  }
  return zeroes[depth];
}
