---
title: merkleization overview
section: merkleization
toc: []
---

SSZ Merkeleization aims to provide the following functionality:

- `hash_tree_root`
  - `merkleize` of an SSZ object to yield the root.

Given an object value, its hash tree root, `hash_tree_root(value)`, is a `BYTES_PER_CHUNK` byte sequence.

`BYTES_PER_CHUNK`, 32, is a defined `constant` to represent the number of bytes per chunk. Hence it is equivalent to refer to the output of `hash_tree_root(O)` as being a single chunk.