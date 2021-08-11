


# Merkleization


## The Merkle Tree


### A **Merkle Tree** is a binary hash tree

- The values of the **Leaves** of the Merkle Tree are each a `Bytes32` result of a `hash function` applied to the serialized objects stored in the tree
- The value of any **parent** node in the Merkle Tree is the result of the same `hash function` applied to a concatenation of the values of its two **child** nodes.
- The value of the **Root** node is the culmination of the process of hashing pairs of child nodes to reach a single node.
  - Referred to in SSZ as `hash_tree_root`


**SSZ Merkeleization** aims to provide the following functionality:


## `hash_tree_root`
**`merkleize`** an SSZ object to yield the root.


Given an object `value`, its hash tree root, `hash_tree_root(value)`, is a `BYTES_PER_CHUNK` byte sequence.


`BYTES_PER_CHUNK`, 32, is a defined `constant` to represent the number of bytes per chunk. Hence it is equivalent to refer to the output of `hash_tree_root(O)` as being a single chunk.