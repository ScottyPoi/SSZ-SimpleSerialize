## Types

Data for SSZ Serialization are represented by one or a combination of these **Types:**

- ###### Basic Types: 
  - ###### **Unisigned Integer** -  `Uint8, Uint16, Uint32, Uint64, Uint128, Uint256`
  - ###### **Boolean** - `Bit, 0 or 1, True or False`
- ###### Composite Types
  - ###### **Vector**    - `"Fixed Length" sequence of elements of same **Type** (homogeneous)`
  - ###### **List**    - `"Variable Length" sequence of elements of the same **Type** (homogenous)`
  - ###### **Container**    - `Heterogeneous ordered collection of elements`
  - ###### **Union**    - `A "Union Type" containing SSZ Types`
  - ###### **Root**    - `A Uint256 that represents the `Bytes32 hash_tree_root` of a nested merkle tree`


**Different types *may* merkleize to the same root:**

-  Two values _of different types_ can merkleize to the same `root`
   - e.g. a `uint256(123)` and `uint8(123)` have the same root.  
   - Or more exceptionally, a `Container` with 4 `Bytes32` fields can have the same root as a `Vector[uint64, 16]`.


##### Default values



All SSZ Types have a default "zeroed" value



- `Uint`: 0
- `Boolean`: False
- `Vector`: Sequence of default values
- `List`: Empty List 
- `Container`: Default value for each type in container
- `Union`: Default value of "Type_0"
  



Default values are *recursive*; elements in composite types such as containers are initialized with their respective default initializations

#### `is_zero`

An SSZ object is called zeroed (and thus, `is_zero(object)` returns true) if it is equal to the default value for that type.

### Illegal types

- Empty vector types (`Vector[type, 0]`, `Bitvector[0]`) are illegal.
- Containers with no fields are illegal.
- The `null` type is only legal as the first type in a union subtype (i.e. with type index zero).