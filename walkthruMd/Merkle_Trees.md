


# Merkleization


## The Merkle Tree


### A **Merkle Tree** is a binary hash tree

- The values of the **Leaves** of the Merkle Tree are each a `Bytes32` result of a `hash function` applied to the serialized objects stored in the tree
- The value of any **parent** node in the Merkle Tree is the result of the same `hash function` applied to a concatenation of the values of its two **child** nodes.
- The value of the **Root** node is the culmination of the process of hashing pairs of child nodes to reach a single node.
  - Referred to in SSZ as `hash_tree_root`


Every type deterministically describes the shape of the Merkle tree representing the type:
Reasoning about the shape of a proof is abstracted away by the typing layer.
Most types do so statically: the shape can be constructed on compile time, and navigation is stable 
Some types (e.g. those based on Sparse Merkle Trees) are not static, but are deterministic based the contents of the proof.


## Vector

Vector types are fixed-length lists.  
Elements are packed tightly into 32 Byte leaves, the final leaf padded with zeros if necessary.
A Merkle Tree for a vector with N chunks will have next_power_of_two(N) leaves.

## List

The Merkle Tree for a serialized List looks like a Vector tree, with one additional level added at the top.  The hash_tree_root of the value tree is itself Hashed with a serialized Uint256 of the LIMIT of the list.

### Container

Containers have a leaf for each key/value pair in the container.  The Merkle Tree will expand to a power_of_two number of leaves.  

### Nested Subtrees

If the value of a container field is a Composite Object, the leaf will in fact be the hash_tree_root of that object.  This becomes very useful as Containers can next inside Containers inside Containers Ad Infinitum.  The Merkle Proof for a value deeply nested inside one of these subtrees is not necessarily much larger than for any other value.  Because they share proof nodes with values further up, a multi-proof containing a deeply nested object is just as concise.