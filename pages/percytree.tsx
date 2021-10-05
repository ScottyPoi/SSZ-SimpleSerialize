import {Node, Tree, LeafNode, BranchNode, zeroNode} from '@chainsafe/persistent-merkle-tree';

export default function percytree() {
    const rightNode: Node = zeroNode(0)
    const leftNode: Node = zeroNode(0)
    const rootNode: BranchNode = new BranchNode(leftNode, rightNode);
    const tree0: Tree = new Tree(rootNode)

    return (
        <div className='container'>
            {tree0.clone()["_node"].h1}
        </div>
    )}
