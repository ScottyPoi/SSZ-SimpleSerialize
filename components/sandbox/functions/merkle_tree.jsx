export default {
    python: `
    def merkle_tree(leaves: Sequence[Bytes32]) -> Sequence[Bytes32]:
    """
    Return an array representing the tree nodes by generalized index:
    [0, 1, 2, 3, 4, 5, 6, 7], where each layer is a power of 2. The 0 index is ignored. The 1 index is the root.
    The result will be twice the size as the padded bottom layer for the input leaves.
    """
    bottom_length = get_power_of_two_ceil(len(leaves))
    o = [Bytes32()] * bottom_length + list(leaves) + [Bytes32()] * (bottom_length - len(leaves))
    for i in range(bottom_length - 1, 0, -1):
        o[i] = hash(o[i * 2] + o[i * 2 + 1])
    return o
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}