---
title: SSZ Object to Index
toc: []
---

# SSZ object to index

SSZ provides a set of functions, called PATHS to navigate the hash tree of SSZ objects.

#### Hash Tree:

We can describe the hash tree of any SSZ object, rooted in `hash_tree_root(object)`, as a **binary Merkle tree** whose depth may vary. 

For example, an object `{x: bytes32, y: List[uint64]}` would look as follows:

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

#### PATH:

A `PATH` is way of describing a function that takes as input an SSZ object and outputs some specific (possibly deeply nested) member. 
Paths are represented as `lists`.  

- The human-readable form is simply a `/`-separated list of path components, starting with the name of the root type.
  - Example: `MyType/some_field/abc_list/123/foobar`  
  - Languages may have different levels of expressiveness for these type of paths, and static languages may require templates or code-generation for this.  
- In "encoded form", they are lists of uint64 values


##### SSZVariableName

We define `SSZVariableName` as the member variable name string, i.e., a path is presented as a sequence of integers and `SSZVariableName`.

#### `PATH` functions:
- ##### `item_length`: 
  - <details><summary>See Pseudocode</summary><br/>
    
    ``` python
    def item_length(typ: SSZType) -> int:
    """
    Return the number of bytes in a basic type, or 32 (a full hash) for compound types.
    """
    if issubclass(typ, BasicValue):
        return typ.byte_len
    else:
            return 32
    ```
    </details>
    <br/>

  - Takes a SSZType as input
  - Returns the number of bytes in a basic type
  - Returns 32 (a full hash) for compound types.

- ##### `get_elem_type`
  - <details><summary>See Pseudocode</summary><br/>
    
    ```python
    def get_elem_type(typ: Union[BaseBytes, BaseList, Container],
                  index_or_variable_name: Union[int, SSZVariableName]) -> SSZType:
    """
    Return the type of the element of an object of the given type with the given index
    or member variable name (eg. `7` for `x[7]`, `"foo"` for `x.foo`)
    """
    return typ.get_fields()[index_or_variable_name] if issubclass(typ, Container) else typ.elem_type
    ```
    </details>
  - Return the type of the element of an object of the given type with the given index 
  - or Return member variable name (eg. `7` for `x[7]`, `"foo"` for `x.foo`)
  
- ##### `chunk_count`
  - <details><summary>See Pseudocode</summary><br/>

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
    </details>
  - Return the number of hashes needed to represent the top-level elements in the given type
    - (eg. `x.foo` or `x[7]` but not `x[7].bar` or `x.foo.baz`). 
  - In all cases except lists/vectors of basic types, this is simply the number of top-level elements, as each element gets one hash. 
  - For lists/vectors of basic types, it is often fewer because multiple basic elementscan be packed into one 32-byte chunk.
  - typ.length describes the limit for list types, or the length for vector types.

- ##### `get_item_position`
  - <details><summary>See Pseudocode</summary><br>

    
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
    </details>
  - Return three variables:
    - (i) the index of the chunk in which the given element of the item is represented;
    - (ii) the starting byte position within the chunk;
    - (iii) the ending byte position within the chunk.

- ##### `get_generalized_index`
  - <details><summary>See Pseudocode</summary><br>

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
    </details>
  - Converts a path 
    - (eg. `[7, "foo", 3]` for `x[7].foo[3]`, `[12, "bar", "__len__"]`) 
  - into the generalized index representing its position in the Merkle tree.
    - `len(x[12].bar)`






