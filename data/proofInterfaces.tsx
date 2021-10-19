const proofInterfaces = {
  SingleProof: `
    export interface TreeOffsetProof {
        type: ProofType.treeOffset;
        offsets: number[];
        leaves: Uint8Array[];
    }`,
  TreeOffsetProof: `
    export interface TreeOffsetProof {
      type: ProofType.treeOffset;
      offsets: number[];
      leaves: Uint8Array[];
    }    `,
  Proof: `
    
    export type Proof = SingleProof | TreeOffsetProof;`,
  SingleProofInput: `
    
    export interface SingleProofInput {
      type: ProofType.single;
      gindex: Gindex;
    }    `,
  TreeOffsetProofInput: `
    export interface TreeOffsetProofInput {
        type: ProofType.treeOffset;
        gindices: Gindex[];
    }    `,
  ProofInput: `
    export type ProofInput = SingleProofInput | TreeOffsetProofInput;
    `,
  createSingleProof: `
    
    export function createSingleProof(rootNode: Node, index: Gindex): [Uint8Array, Uint8Array[]] {
      const witnesses: Uint8Array[] = [];
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
    }`,
  nodeToTreeOffsetProof: `
    
    export function nodeToTreeOffsetProof(
        node: Node,
        gindex: GindexBitstring,
        proofGindices: GindexBitstring[]
        ): [number[], Uint8Array[]] {
            if (!proofGindices.length || !proofGindices[0].startsWith(gindex)) {
          // there are no proof indices left OR the current subtree contains no remaining proof indices
          return [[], []];
        } else if (gindex === proofGindices[0]) {
          // the current node is at the next proof index
          proofGindices.shift();
          return [[], [node.root]];
        } else {
          // recursively compute offsets, leaves for the left and right subtree
          const [leftOffsets, leftLeaves] = nodeToTreeOffsetProof(node.left, gindex + "0", proofGindices);
          const [rightOffsets, rightLeaves] = nodeToTreeOffsetProof(node.right, gindex + "1", proofGindices);
          // the offset prepended to the list is # of leaves in the left subtree
          const pivot = leftLeaves.length;
          return [[pivot].concat(leftOffsets, rightOffsets), leftLeaves.concat(rightLeaves)];
        }
    }`,
  treeOffsetProofToNode: `
    
    export function treeOffsetProofToNode(offsets: number[], leaves: Uint8Array[]): Node {
    if (!leaves.length) {
        throw new Error("Proof must contain gt 0 leaves");
      } else if (leaves.length === 1) {
        return new LeafNode(leaves[0]);
      } else {
        // the offset popped from the list is the # of leaves in the left subtree
        const pivot = offsets[0];
        return new BranchNode(
          treeOffsetProofToNode(offsets.slice(1, pivot), leaves.slice(0, pivot)),
          treeOffsetProofToNode(offsets.slice(pivot), leaves.slice(pivot))
        );
      }
    }`,
  createNodeFromSingleProof: `
    export function createNodeFromSingleProof(gindex: Gindex, leaf: Uint8Array, witnesses: Uint8Array[]): Node {
      let node: Node = new LeafNode(leaf);
      const w = witnesses.reverse();
      while (gindex > 1) {
          const sibling = new LeafNode(w.pop() as Uint8Array);
        if (gindex % BigInt(2) === BigInt(0)) {
          node = new BranchNode(node, sibling);
        } else {
          node = new BranchNode(sibling, node);
        }
        gindex = gindex / BigInt(2);
    }
      return node;
    }
    `,
  createNodeFromTreeOffsetProof: `
    export function createNodeFromTreeOffsetProof(offsets: number[], leaves: Uint8Array[]): Node {
        // TODO validation
        return treeOffsetProofToNode(offsets, leaves);
      }
        `,
  computeTreeOffsetProofSerializedLength: `
    export function computeTreeOffsetProofSerializedLength(offsets: number[], leaves: Uint8Array[]): number {
        // add 1 for # of leaves
        return (offsets.length + 1) * 2 + leaves.length * 32;
      }   `,
  serializeTreeOffsetProof: `
    export function serializeTreeOffsetProof(
        output: Uint8Array,
        byteOffset: number,
        offsets: number[],
        leaves: Uint8Array[]
      ): void {
        const writer = new DataView(output.buffer, output.byteOffset, output.byteLength);
        // set # of leaves
        writer.setUint16(byteOffset, leaves.length, true);
        // set offsets
        const offsetsStartIndex = byteOffset + 2;
        for (let i = 0; i < offsets.length; i++) {
          writer.setUint16(i * 2 + offsetsStartIndex, offsets[i], true);
        }
        // set leaves
        const leavesStartIndex = offsetsStartIndex + offsets.length * 2;
        for (let i = 0; i < leaves.length; i++) {
          output.set(leaves[i], i * 32 + leavesStartIndex);
        }
      }  `,
  deserializeTreeOffsetProof: `
    
    export function deserializeTreeOffsetProof(data: Uint8Array, byteOffset: number): [number[], Uint8Array[]] {
      const reader = new DataView(data.buffer, data.byteOffset, data.byteLength);
      // get # of leaves
      const leafCount = reader.getUint16(byteOffset, true);
      if (data.length < (leafCount - 1) * 2 + leafCount * 32) {
        throw new Error("Unable to deserialize tree offset proof: not enough bytes");
      }
      // get offsets
      const offsetsStartIndex = byteOffset + 2;
      const offsets = Array.from({length: leafCount - 1}, (_, i) => reader.getUint16(i * 2 + offsetsStartIndex, true));
      // get leaves
      const leavesStartIndex = offsetsStartIndex + offsets.length * 2;
      const leaves = Array.from({length: leafCount}, (_, i) =>
        data.subarray(i * 32 + leavesStartIndex, (i + 1) * 32 + leavesStartIndex)
      );
      return [offsets, leaves];
    }`,
};

export default proofInterfaces