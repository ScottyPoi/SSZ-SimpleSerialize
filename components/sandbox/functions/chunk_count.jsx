export default {
    python: `
    def chunk_count(typ: SSZType) -> int:
        """
        Return the number of hashes needed to represent the top-level elements in the given type
        (eg. 'x.foo' or 'x[7]' but not 'x[7].bar' or 'x.foo.baz'). In all cases except lists/vectors
        of basic types, this is simply the number of top-level elements, as each element gets one
        hash. For lists/vectors of basic types, it is often fewer because multiple basic elements
        can be packed into one 32-byte chunk.
        """
        # typ.length describes the limit for list types, or the length for vector types.
        if issubclass(typ, BasicValue):
            return 1
        elif issubclass(typ, Bits):
            return (typ.length + 255) // 256
        elif issubclass(typ, Elements):
            return (typ.length * item_length(typ.elem_type) + 31) // 32
        elif issubclass(typ, Container):
            return len(typ.get_fields())
        else:
            raise Exception(f"Type not supported: {typ}")
    `,
    javascript: `TODO`,
    typescript: `TODO`,
}