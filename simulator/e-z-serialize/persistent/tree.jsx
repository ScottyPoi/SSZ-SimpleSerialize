import {Gindex, gindexIterator, Bit, toGindexBitstring} from "./gindex";
import {Node, BranchNode, Link, compose, identity, LeafNode} from "./node";
import {createNodeFromProof, createProof, Proof, ProofInput} from "./proof";
import {createSingleProof} from "./proof/single";
import {zeroNode} from "./zeroNode";


const ERR_INVALID_TREE = "Invalid tree operation";
const ERR_PARAM_LT_ZERO = "Param must be >= 0";
const ERR_COUNT_GT_DEPTH = "Count extends beyond depth limit";

export default function Tree(props) {
  
  const [rootNode, set_rootNode] = useState(props._node)
  

  function createFromProof(proof) {
    return <Tree _node={createNodeFromProof(proof)}/>;
  }

  function get_rootNode() {
    return rootNode;
  }


  function get_root() {
    return rootNode.root;
  }

  function getNode(index) {
    let node = rootNode;
    for (const i of gindexIterator(index)) {
      if (i) {
        if (node.isLeaf()) throw new Error(ERR_INVALID_TREE);
        node = node.right;
      } else {
        if (node.isLeaf()) throw new Error(ERR_INVALID_TREE);
        node = node.left;
      }
    }
    return node;
  }

  function setter(index, expand = false) {
    let link = identity;
    let node = rootNode;
    const iterator = gindexIterator(index);
    for (const i of iterator) {
      if (i) {
        if (node.isLeaf()) {
          if (!expand) throw new Error(ERR_INVALID_TREE);
          else {
            const child = zeroNode(iterator.remainingBitLength() - 1);
            node = <BranchNode left={child} right={child}/>;
          }
        }
        link = compose(node.rebindRight.bind(node), link);
        node = node.right;
      } else {
        if (node.isLeaf()) {
          if (!expand) throw new Error(ERR_INVALID_TREE);
          else {
            const child = zeroNode(iterator.remainingBitLength() - 1);
            node = <BranchNode left={child} right={child}/>;
          }
        }
        link = compose(node.rebindLeft.bind(node), link);
        node = node.left;
      }
    }
    return compose(identity, link);
  }

  function setNode(index, n, expand = false) {
    set_rootNode(setter(index, expand)(n));
  }

  function getRoot(index) {
    return getNode(index).root;
  }

  function setRoot(index, root, expand = false) {
    setNode(index, <LeafNode _root={root}/>, expand);
  }

  function getSubtree(index) {
    return <Tree _node={getNode(index)}/>, (v) => setNode(index, v.rootNode);
  }

  function setSubtree(index, v, expand = false) {
    setNode(index, v.rootNode, expand);
  }

  function clone() {
    return <Tree _node={rootNode}/>
  }

  function getSingleProof(index) {
    return createSingleProof(rootNode, index)[1];
  }

  /**
   * Fast read-only iteration
   * In-order traversal of nodes at `depth`
   * starting from the `startIndex`-indexed node
   * iterating through `count` nodes
   */
   function *iterateNodesAtDepth(depth, startIndex, count) {
    // Strategy:
    // First nagivate to the starting Gindex node,
    // At each level record the tuple (current node, the navigation direction) in a list (Left=0, Right=1)
    // Once we reach the starting Gindex node, the list will be length == depth
    // Begin emitting nodes: Outer loop:
    //   Yield the current node
    //   Inner loop
    //     pop off the end of the list
    //     If its (N, Left) (we've nav'd the left subtree, but not the right subtree)
    //       push (N, Right) and set set node as the n.right
    //       push (N, Left) and set node as n.left until list length == depth
    //   Inner loop until the list length == depth
    // Outer loop until the list is empty or the yield count == count
    if (startIndex < 0 || count < 0 || depth < 0) {
      throw new Error(ERR_PARAM_LT_ZERO);
    }

    if (BigInt(1) << BigInt(depth) < startIndex + count) {
      throw new Error(ERR_COUNT_GT_DEPTH);
    }

    if (count === 0) {
      return;
    }

    if (depth === 0) {
      yield rootNode;
      return;
    }

    let node = rootNode;
    let currCount = 0;
    const startGindex = toGindexBitstring(depth, BigInt(startIndex));
    const nav = [];
    for (const i of gindexIterator(startGindex)) {
      nav.push([node, i]);
      if (i) {
        if (node.isLeaf()) throw new Error(ERR_INVALID_TREE);
        node = node.right;
      } else {
        if (node.isLeaf()) throw new Error(ERR_INVALID_TREE);
        node = node.left;
      }
    }

    while (nav.length && currCount < count) {
      yield node;

      currCount++;
      if (currCount === count) {
        return;
      }

      do {
        const [parentNode, direction] = nav.pop();
        // if direction was left
        if (!direction) {
          // now navigate right
          nav.push([parentNode, 1]);
          if (parentNode.isLeaf()) throw new Error(ERR_INVALID_TREE);
          node = parentNode.right;

          // and then left as far as possible
          while (nav.length !== depth) {
            nav.push([node, 0]);
            if (node.isLeaf()) throw new Error(ERR_INVALID_TREE);
            node = node.left;
          }
        }
      } while (nav.length && nav.length !== depth);
    }
  }

  function getProof(input) {
    return createProof(rootNode, input);
  }
}
