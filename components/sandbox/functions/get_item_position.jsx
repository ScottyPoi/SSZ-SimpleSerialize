export default {
    python: `
    def get_item_position(typ: SSZType, index_or_variable_name: Union[int, SSZVariableName]) -> Tuple[int, int, int]:
        """
        Return three variables:
            (i) the index of the chunk in which the given element of the item is represented;
            (ii) the starting byte position within the chunk;
            (iii) the ending byte position within the chunk.
        For example: for a 6-item list of uint64 values, index=2 will return (0, 16, 24), index=5 will return (1, 8, 16)
        """
        if issubclass(typ, Elements):
            index = int(index_or_variable_name)
            start = index * item_length(typ.elem_type)
            return start // 32, start % 32, start % 32 + item_length(typ.elem_type)
        elif issubclass(typ, Container):
            variable_name = index_or_variable_name
            return typ.get_field_names().index(variable_name), 0, item_length(get_elem_type(typ, variable_name))
        else:
            raise Exception("Only lists/vectors/containers supported")
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}