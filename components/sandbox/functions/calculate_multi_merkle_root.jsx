export default {
    python: `
    def calculate_merkle_root(leaf: Bytes32, proof: Sequence[Bytes32], index: GeneralizedIndex) -> Root:
        assert len(proof) == get_generalized_index_length(index)
        for i, h in enumerate(proof):
            if get_generalized_index_bit(index, i):
                leaf = hash(h + leaf)
            else:
                leaf = hash(leaf + h)
        return leaf
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}