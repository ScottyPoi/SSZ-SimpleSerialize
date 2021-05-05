---
title: Merkleize
section: Merkleization
toc: [Merkleize]
---

<div id='Merkelize' align='center'>

# Merkleize

The function `merkleize(value)` builds a ***Merkle Tree***  
and returns the `Bytes32`  ***Hash Tree Root***

</div>
<div align='start'>


### `merkleize(value)` provides `hash_tree_root` for

- `Basic types` i.e. `unsigned integers` of `N bytes`, known as `uintN`s, as well as `Booleans`
- `List` and `vectors` of `bits`, known as `BitLists` and `BitVectors`
- `Lists` and `vectors` of `Serializable` i.e. either basic or composite types
- `Containers` with `Serializable` fields
- `Unions` 
  

### To implement `hash_tree_root` a number of helper functions are required, including

- `size_of`
- `chunk_count`
- `pack`
- `pack_bits`
- `next_pow_of_two`
- `merkleize`
- `mix_in_length`
- `mix_in_type`
