export default {
    python: `
    def get_elem_type(typ: Union[BaseBytes, BaseList, Container],
        index_or_variable_name: Union[int, SSZVariableName]) -> SSZType:
        """
        Return the type of the element of an object of the given type with the given index
        or member variable name (eg. '7' for 'x[7]', "foo" for 'x.foo')
        """
        return typ.get_fields()[index_or_variable_name] if issubclass(typ, Container) else typ.elem_type
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}