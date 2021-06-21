import {Gindex} from "../gindex";
import {Node} from "../node";
import {createNodeFromSingleProof, createSingleProof} from "./single";
import {
  computeTreeOffsetProofSerializedLength,
  createNodeFromTreeOffsetProof,
  createTreeOffsetProof,
  deserializeTreeOffsetProof,
  serializeTreeOffsetProof,
} from "./treeOffset";

export const ProofType = {
  single: "single",
  treeOffset: "treeOffset",
}

/**
 * Serialized proofs are prepended with a single byte, denoting their type
 */
export const ProofTypeSerialized = [
  ProofType.single, // 0
  ProofType.treeOffset, // 1
];



export function createProof(rootNode, input) {
  switch (input.type) {
    case ProofType.single: {
      const [leaf, witnesses] = createSingleProof(rootNode, input.gindex);
      return {
        type: ProofType.single,
        gindex: input.gindex,
        leaf,
        witnesses,
      };
    }
    case ProofType.treeOffset: {
      const [offsets, leaves] = createTreeOffsetProof(rootNode, input.gindices);
      return {
        type: ProofType.treeOffset,
        offsets,
        leaves,
      };
    }
    default:
      throw new Error("Invalid proof type");
  }
}

export function createNodeFromProof(proof) {
  switch (proof.type) {
    case ProofType.single:
      return createNodeFromSingleProof(proof.gindex, proof.leaf, proof.witnesses);
    case ProofType.treeOffset:
      return createNodeFromTreeOffsetProof(proof.offsets, proof.leaves);
    default:
      throw new Error("Invalid proof type");
  }
}

export function serializeProof(proof) {
  switch (proof.type) {
    case ProofType.single:
      throw new Error("Not implemented");
    case ProofType.treeOffset: {
      const output = new Uint8Array(1 + computeTreeOffsetProofSerializedLength(proof.offsets, proof.leaves));
      output[0] = ProofTypeSerialized.indexOf(ProofType.treeOffset);
      serializeTreeOffsetProof(output, 1, proof.offsets, proof.leaves);
      return output;
    }
    default:
      throw new Error("Invalid proof type");
  }
}

export function deserializeProof(data) {
  const proofType = ProofTypeSerialized[data[0]];
  if (!proofType) {
    throw new Error("Invalid proof type");
  }
  switch (proofType) {
    case ProofType.single:
      throw new Error("Not implemented");
    case ProofType.treeOffset: {
      const [offsets, leaves] = deserializeTreeOffsetProof(data, 1);
      return {
        type: ProofType.treeOffset,
        offsets,
        leaves,
      };
    }
    default:
      throw new Error("Invalid proof type");
  }
}
