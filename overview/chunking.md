---
title: Chunkify
section: Merkleization
toc: ['Chunking', 'Chunk_count']
---

<div align='center' id='Chunking'>

# Chunking

<br/>

`chunks` are `Bytes32` intermediate merkle values, used for e.g. [subtree merkleization](./overview/subtree_merkleization.md) leafs.

<br/>

</div>
<div align='start'>

### Pack
- ### Basic sequences / bitfields
  - To convert a homogeneously typed sequence of basic values or bits into chunks, the values are packed.
- ### Complex sequences
  - Sequences that are not homogeneously typed, or not of basic values or bits, are not packed.
  - Instead, the `chunks` are the `hash_tree_root`s for each of the values.

<br/>

### Chunk

Chunking of `elements` of a sequence type `T` is defined as following:

<br/>

- #### For basic elements
  - Given ordered `elements` of the same basic type:
    - Partition the elements into chunks: split the elements in groups of consecutive `32 / size_of(B)` elements.
      - The last partition may not be full.
  - Serialize the elements in each partition, and tightly pack the partition into a chunk (no padding between elements).
    - If the last-partition is not full, it is right-padded with zero bytes.
- #### For bitfields
  - Serialize the Bitlist or bitvector.
  - The length-delimiting bit for bitlists is excluded: bitlists mix-in the bit-length and do not need the delimiting bit.
  - Right-pad the serialized bytes to a multiple of 32.
  - Partition into chunks: split the bytes into groups of consecutive `32` bytes

<br/>

