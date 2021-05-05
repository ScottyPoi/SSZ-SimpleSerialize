---
title: Hashing
section: Merkleization
toc: [Hashing]
---

<div id='Hashing' align='center'>

# Hashing

SSZ utilizes the `SHA-256` hash function.

The standard specification for SHA-256 can be found in [FIPS 180-4](https://csrc.nist.gov/publications/detail/fips/180/4/final).


</div>
<div align='start'>
<br/>

##### Hashing primitive for binary trees:

`H(a: bytes32, b: bytes32) -> SHA_256(a ++ b)`

- Where `++` is concatenation, i.e. tightly packing `a` and `b` into 64 bytes.
- And `SHA_256` is run on the standard unmodified pre-state, and returns the digest after writing and processing the above 64 bytes.
