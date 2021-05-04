---
title: Helpers for generalized indices
toc: []
prev: 
next: 
---

# Helpers for `generalized_indices`

SSZ provides a set of helper functions to manipulate `generalized_indices`  

It comes with a **WARNING**

> Usage note: functions outside this section should manipulate generalized indices using only functions inside this section. This is to make it easier for developers to implement generalized indices with underlying representations other than bigints.

- ##### `concat_generalized_indices(*indices: GeneralizedIndex) -> GeneralizedIndex`:
  - Given `generalized indices` i1 for A -> B, i2 for B -> C .... i_n for Y -> Z, 
  - `returns` the `generalized index` for A -> Z.
  -     
        o = GeneralizedIndex(1)

        for i in indices:

        o = GeneralizedIndex(o * get_power_of_two_floor(i) + (i - get_power_of_two_floor(i)))

        return o

- ##### `get_generalized_index_length(index: GeneralizedIndex) -> int`:
  - `Return` the length of a path represented by a `generalized index`.
  -   
        return int(log2(index))



- ##### `get_generalized_index_bit(index: GeneralizedIndex, position: int) -> bool`:
  - `Return` the given bit of a generalized index.
  -    
        return (index & (1 << position)) > 0

- ##### `generalized_index_sibling(index: GeneralizedIndex) -> GeneralizedIndex`:
  - 
        return GeneralizedIndex(index ^ 1)

- ##### `generalized_index_child(index: GeneralizedIndex, right_side: bool) -> GeneralizedIndex`:
>> return GeneralizedIndex(index * 2 + right_side)

- ##### `generalized_index_parent(index: GeneralizedIndex) -> GeneralizedIndex`:
    > return GeneralizedIndex(index // 2)