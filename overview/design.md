---
title: SSZ Development
section: Overview
toc: [Purpose, Design, Properties]
prev: introduction
next: sszineth2
---

<div align='center' id='Functions'>

# Development of SSZ

Eth2 developers designed SSZ to improve the storage and retrieval of data in the blockchain

### Function

</div>
<div align='start'>

#### `Serialize`: 
- ##### `encode data structures as sequences of bytes`
    
#### `Deserialize`: 
- ##### `decode sequences of bytes to reconstruct a given data structure`

#### `Merkleize`:
- ##### `reduce data structure to merkle-root`

#### `Validate`:
- ##### `make proofs and multiproofs for elements in the data structure`

</div>
<div align='center' id='Design'>


### Design

</div>
<div align='start'>

- **Efficiency and Elegance** 
  - in proof structures with binary trees, and a design that separates opinionated sparse structures from merkleization, learning from issues in ETH 1.0.
- **Consistency** 
  - in a wide range of use-cases for minimal and efficient encoding and proofs in the core of ETH 2.0, as well as the layers being built on top.
- **Flexibility and Transparency** 
  - for tracing proofs through history, building shallow variants of types, or proofs to linked data such as between ETH 2.0 shards.
- **Stability of proof data** 
  - for stateless light clients and smart contracts. These can count on deterministic and stable locations of merkle tree leaves of interest.
- **Fast data reads** 
  - by making full deserialization optional, data can be retrieved with a very minimal amount of operations, largely pre-computable at compile time.

</div>
<div align='center' id='Properties'>

### Properties


</div>
<div align='start'>

- **Simple**

  - SSZ is meant to map well to common raw datatypes, and avoid twiddling with bits or nibbles in serialization.
    - It has common basic data types
    - It has fixed-length types to avoid unnecessary lengths/offsets
    - Types to describe the structure

- **Bijective**
  - No two different representations can exist for the same value of a single type.
  - No two different values of the same type can be have the same representation.
  - Different types may still have overlapping representations in merkleization or serialization.
    - Serialization example: 
      - `Vector[uint16, 4]`, `Vector[uint32, 2]`, `Vector[uint64, 1]`, `uint64` are all fixed-length and 8 bytes.
    - Merkleization example: 
      - A `Container` with a `Vector[uint32, 8]` and `uint64` field has the same merkleization structure as a `List[uint64, 4]`.

- **Compact**
  - Fixed Length Types
    - The elements are packed together, and do not result in any extra bytes when used as elements in dynamic types such as lists.
  - Dynamic types
    -  4-byte offsets were adopted as a way to enable fast random access of list elements, while keeping the size relatively low. Offsets are only used for dynamic-length element types, whose contents are often significantly bigger than 4 bytes.
  - Merkleization 
    - A binary tree backs every merkle structure. 
    - Since the branching factor is lower than the previously used Merkle Patricia Tree, less nodes are required to reach into a leaf of a merkle tree.
  - On the application level
    - An arbitrary key-value store is avoided, since a `List` can be packed together better, and have a smaller key depth, thus more efficiency in multi-proofs and avoiding the cost of unbalanced tree shapes.

- **Merkle-first**

  - The intention of having a custom type system is also to give anything that can be interpreted by the protocol a sound single generalized `merkle-root`.

  - And not *just* a `merkle-root`, but also features that: 
    - make proofs small,
    - avoid complexity in merkleization 
    - make it as flexible as possible to build and interpret proofs for a data-structure.


- **Efficient to traverse**

  - Efficient traversal is a feature that was later introduced into SSZ with the creation of [Simple Offset Serialization (SOS)](https://gist.github.com/karalabe/3a25832b1413ee98daad9f0c47be3632).
    - This guarantees a `O(log(N))` lookup speed for deeply nested structures. And offsets even enable `O(1)` random access in lists of dynamic-length elements.
  - The merkle tree is also efficient for lookups
    - [generalized indices](./overview/generalized_merkle_tree_indices.md) can statically describe the tree node location of any element path.
    - This allows any merkle-node lookup to be optimized to a `O(log(N))` operation where `N` is the abstract data size (SSZ does not force a uniform data-structure),and where `log(N)` matches the length of the generalized index. 
    - And the purely static parts of the path can even be computed at compile time, to improve lookup speeds without writing specialized verbose manual lookup routines.
