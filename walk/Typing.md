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

Every type deterministically describes the shape of the **Merkle Tree** representing the type

- No two different values _of the same type_ can merkleize to the same root
- No two roots can be derived for the same value _of the type used for the root_.


**Different types *may* merkleize to the same root:**

-  Two values _of different types_ can merkleize to the same `root`
   - e.g. a `uint256(123)` and `uint8(123)` have the same root.  
   - Or more exceptionally, a `Container` with 4 `Bytes32` fields can have the same root as a `Vector[uint64, 16]`.






