export default {
    python: `
    def get_generalized_index(typ: SSZType, path: Sequence[Union[int, SSZVariableName]]) -> GeneralizedIndex:
        """
        Converts a path (eg. '[7, "foo", 3]' for 'x[7].foo[3]', '[12, "bar", "__len__"]' for
        'len(x[12].bar)') into the generalized index representing its position in the Merkle tree.
        """
        root = GeneralizedIndex(1)
        for p in path:
            assert not issubclass(typ, BasicValue)  # If we descend to a basic type, the path cannot continue further
            if p == '__len__':
                typ = uint64
                assert issubclass(typ, (List, ByteList))
                root = GeneralizedIndex(root * 2 + 1)
            else:
                pos, _, _ = get_item_position(typ, p)
                base_index = (GeneralizedIndex(2) if issubclass(typ, (List, ByteList)) else GeneralizedIndex(1))
                root = GeneralizedIndex(root * base_index * get_power_of_two_ceil(chunk_count(typ)) + pos)
                typ = get_elem_type(typ, p)
        return root
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}