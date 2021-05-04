## SSZ object to index

We can describe the hash tree of any SSZ object, rooted in `hash_tree_root(object)`, as a binary Merkle tree whose depth may vary. For example, an object `{x: bytes32, y: List[uint64]}` would look as follows:

```
     root
    /    \
   x    y_root
        /    \
y_data_root  len(y)
    / \
   /\ /\
  .......
```

We can now define a concept of a "path", a way of describing a function that takes as input an SSZ object and outputs some specific (possibly deeply nested) member. For example, `foo -> foo.x` is a path, as are `foo -> len(foo.y)` and `foo -> foo.y[5].w`. We'll describe paths as lists, which can have two representations. In "human-readable form", they are `["x"]`, `["y", "__len__"]` and `["y", 5, "w"]` respectively. In "encoded form", they are lists of `uint64` values, in these cases (assuming the fields of `foo` in order are `x` then `y`, and `w` is the first field of `y[i]`) `[0]`, `[1, 2**64-1]`, `[1, 5, 0]`. We define `SSZVariableName` as the member variable name string, i.e., a path is presented as a sequence of integers and `SSZVariableName`.

```python
def item_length(typ: SSZType) -> int:
    """
    Return the number of bytes in a basic type, or 32 (a full hash) for compound types.
    """
    if issubclass(typ, BasicValue):
        return typ.byte_len
    else:
        return 32
```

```python
def get_elem_type(typ: Union[BaseBytes, BaseList, Container],
                  index_or_variable_name: Union[int, SSZVariableName]) -> SSZType:
    """
    Return the type of the element of an object of the given type with the given index
    or member variable name (eg. `7` for `x[7]`, `"foo"` for `x.foo`)
    """
    return typ.get_fields()[index_or_variable_name] if issubclass(typ, Container) else typ.elem_type
```

```python
def chunk_count(typ: SSZType) -> int:
    """
    Return the number of hashes needed to represent the top-level elements in the given type
    (eg. `x.foo` or `x[7]` but not `x[7].bar` or `x.foo.baz`). In all cases except lists/vectors
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
```

```python
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
```

```python
def get_generalized_index(typ: SSZType, path: Sequence[Union[int, SSZVariableName]]) -> GeneralizedIndex:
    """
    Converts a path (eg. `[7, "foo", 3]` for `x[7].foo[3]`, `[12, "bar", "__len__"]` for
    `len(x[12].bar)`) into the generalized index representing its position in the Merkle tree.
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
```

### Helpers for generalized indices

_Usage note: functions outside this section should manipulate generalized indices using only functions inside this section. This is to make it easier for developers to implement generalized indices with underlying representations other than bigints._

#### `concat_generalized_indices`

```python
def concat_generalized_indices(*indices: GeneralizedIndex) -> GeneralizedIndex:
    """
    Given generalized indices i1 for A -> B, i2 for B -> C .... i_n for Y -> Z, returns
    the generalized index for A -> Z.
    """
    o = GeneralizedIndex(1)
    for i in indices:
        o = GeneralizedIndex(o * get_power_of_two_floor(i) + (i - get_power_of_two_floor(i)))
    return o
```

#### `get_generalized_index_length`

```python
def get_generalized_index_length(index: GeneralizedIndex) -> int:
    """
    Return the length of a path represented by a generalized index.
    """
    return int(log2(index))
```

#### `get_generalized_index_bit`

```python
def get_generalized_index_bit(index: GeneralizedIndex, position: int) -> bool:
    """
    Return the given bit of a generalized index.
    """
    return (index & (1 << position)) > 0
```

#### `generalized_index_sibling`

```python
def generalized_index_sibling(index: GeneralizedIndex) -> GeneralizedIndex:
    return GeneralizedIndex(index ^ 1)
```

#### `generalized_index_child`

```python
def generalized_index_child(index: GeneralizedIndex, right_side: bool) -> GeneralizedIndex:
    return GeneralizedIndex(index * 2 + right_side)
```

#### `generalized_index_parent`

```python
def generalized_index_parent(index: GeneralizedIndex) -> GeneralizedIndex:
    return GeneralizedIndex(index // 2)
```

