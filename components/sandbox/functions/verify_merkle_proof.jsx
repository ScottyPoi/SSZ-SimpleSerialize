export default {
    python: `
    def verify_merkle_proof(leaf: Bytes32, proof: Sequence[Bytes32], index: GeneralizedIndex, root: Root) -> bool:
    return calculate_merkle_root(leaf, proof, index) == root
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}

