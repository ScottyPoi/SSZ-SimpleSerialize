export default {
    python: `
    def get_helper_indices(indices: Sequence[GeneralizedIndex]) -> Sequence[GeneralizedIndex]:
        """
        Get the generalized indices of all "extra" chunks in the tree needed to prove the chunks with the given
        generalized indices. Note that the decreasing order is chosen deliberately to ensure equivalence to the
        order of hashes in a regular single-item Merkle proof in the single-item case.
        """
        all_helper_indices: Set[GeneralizedIndex] = set()
        all_path_indices: Set[GeneralizedIndex] = set()
        for index in indices:
            all_helper_indices = all_helper_indices.union(set(get_branch_indices(index)))
            all_path_indices = all_path_indices.union(set(get_path_indices(index)))

        return sorted(all_helper_indices.difference(all_path_indices), reverse=True)

    `,
    javascript: `TODO`,
    typescript: `TODO`,
}