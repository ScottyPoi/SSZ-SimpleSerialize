export default {
    python: `
    def concat_generalized_indices(*indices: GeneralizedIndex) -> GeneralizedIndex:
        """
        Given generalized indices i1 for A -> B, i2 for B -> C .... i_n for Y -> Z, returns
        the generalized index for A -> Z.
        """
        o = GeneralizedIndex(1)
        for i in indices:
            o = GeneralizedIndex(o * get_power_of_two_floor(i) + (i - get_power_of_two_floor(i)))
        return o
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}