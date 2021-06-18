import {Tree} from "../../../e-z-serialize/persistent";

export function isTree(value) {
  return Boolean((value).rootNode && (value).rootNode.isLeaf);
}
