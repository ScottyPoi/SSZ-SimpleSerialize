export default {
    python: `
    def calculate_multi_merkle_root(leaves: Sequence[Bytes32], proof: Sequence[Bytes32], indices: Sequence[GeneralizedIndex]) -> Root:
        assert len(leaves) == len(indices)
        helper_indices = get_helper_indices(indices)
        assert len(proof) == len(helper_indices)
        objects = {
            **{index: node for index, node in zip(indices, leaves)},
            **{index: node for index, node in zip(helper_indices, proof)}
        }
        keys = sorted(objects.keys(), reverse=True)
        pos = 0
        while pos < len(keys):
            k = keys[pos]
            if k in objects and k ^ 1 in objects and k // 2 not in objects:
                objects[GeneralizedIndex(k // 2)] = hash(
                    objects[GeneralizedIndex((k | 1) ^ 1)] +
                    objects[GeneralizedIndex(k | 1)]
                )
                keys.append(GeneralizedIndex(k // 2))
            pos += 1
        return objects[GeneralizedIndex(1)]
        `,
    javascript: `TODO`,
    typescript: `TODO`,
}