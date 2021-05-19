export default {
    python: `
    def get_power_of_two_floor(x: int) -> int:
        """
        Get the power of 2 for given input, or the closest lower power of 2 if the input is not a power of 2.
        The zero case is a placeholder and not used for math with generalized indices.
        Commonly used for "what power of two makes up the root bit of the generalized index?"
        Example: 0->1, 1->1, 2->2, 3->2, 4->4, 5->4, 6->4, 7->4, 8->8, 9->8
        """
        if x <= 1:
            return 1
        if x == 2:
            return x
        else:
            return 2 * get_power_of_two_floor(x // 2)
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}