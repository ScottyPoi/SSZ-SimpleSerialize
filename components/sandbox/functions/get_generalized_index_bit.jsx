export default {
    python: `
    def get_generalized_index_bit(index: GeneralizedIndex, position: int) -> bool:
        """
        Return the given bit of a generalized index.
        """
        return (index & (1 << position)) > 0
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}