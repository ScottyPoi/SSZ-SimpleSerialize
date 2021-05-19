export default {
    python: `
    def get_branch_indices(tree_index: GeneralizedIndex) -> Sequence[GeneralizedIndex]:
        """
        Get the generalized indices of the sister chunks along the path from the chunk with the
        given tree index to the root.
        """
        o = [generalized_index_sibling(tree_index)]
        while o[-1] > 1:
            o.append(generalized_index_sibling(generalized_index_parent(o[-1])))
        return o[:-1]
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}