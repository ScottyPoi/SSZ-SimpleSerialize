---
title: merkleization overview
section: merkleization
toc: [Merkleization]
---

<div align='center'>
<div id='Merkleization'>

# Merkleization

**SSZ Merkeleization** aims to provide the following functionality:

<br/>

## `hash_tree_root`
**`merkleize`** an SSZ object to yield the root.

<br/>

Given an object `value`, its hash tree root, `hash_tree_root(value)`, is a `BYTES_PER_CHUNK` byte sequence.

<br/>

`BYTES_PER_CHUNK`, 32, is a defined `constant` to represent the number of bytes per chunk. Hence it is equivalent to refer to the output of `hash_tree_root(O)` as being a single chunk.