---
title: Complex Types
section: Types
toc: ['Complex Types', 'Vectors', 'Lists', 'Containers', 'Unions']
---

<div id='Complex%20Types' align='center'>


# Complex types

<br/>


**Complex Types** are types that can hold multiple values at the same time, with usage similar to that of a `struct` in popular programming languages.

<br/>
</div>
<div align='start'>

The SSZ specs describe 4 **complex types**:

- ###### **[Vectors](#Vectors)**
  - `"Fixed Length" sequence of elements of same **Type**`
  - `(homogeneous)`
- ###### **[Lists](#Lists)**
  - `"Variable Length" sequence of elements of the same **Type** `
  - `(homogenous)`
- ###### **[Containers](#Containers)**
  - `Ordered collection of elements`
  - `Hetrogeneous`
- ###### **[Union]($Unions)**
  - `A "Union Type" containing SSZ Types`

##### These types are distinguised by their **size** (`fixed` or `variable`)  
##### And whether their contents are `homogeneous` or `heterogeneous`  
<br/>

###### A complex object is considered `fixed size` if:

- all of the contained elements are `fixed size`
- `type` has a `fixed element count` (e.g. `Lists` cannot be `fixed size`)

<br/>


###### A sequence is `homogeneous` if 

- its contents are all of one **type** 
 ##### A secquence is `heterogeneous` if 
 
- it contains multiple **types**.
<br/>


</div>
<div align='center'>

#### Complex types are all serialized as [Sequences](../overview/sequences.md).

<br/>
</div>
<div id='Vectors' align='center'>
<br/>

## Vectors

<br/>

</div>
<div align='start'>

- ###### Type: 
  - `Vector[T, N]`

- ###### Default value: 
  - `[default(T)] * N`
  - All elements set to their `default value`

- ###### Empty Vectors:
  - Empty vectors (`N = 0`) are `illegal types`, even if the element type `T` is `dynamic length`.
  - This is to avoid `fixed-length types` of `0 length`, which break various size assumptions in deserialization.

<br/>
</div>
<div align='center'>

### A **Vector** is a sequence of elements, all of the same type `T`, and of fixed length `N`.

<br/>



<br/>


### Representation

<br/>


Serialized and deserialized like a [Sequence](../overview/sequences.md) of the `values`, all of type `T`.

### Merkleization

<br/>


`root = merkle_subtree(chunkify(values))`, see [`merkle_subtree`](../merkleization/subtree_merkleization.md) and [`chunkify`](../merkleization/chunkify.md)

<div id='Lists'>

<br/>

## Lists

<br/>

    Type: `List[T, N]`

    Default value: `[]`, i.e. empty list.

A List is a sequence of elements, all of the same type `T`, and can be any length from `0` to `N` (inclusive).

Unlike `Vector` and `Container`, a list can have a `N = 0` limit, since it is dynamic length regardless,
and types containing the list can handle a 0 byte length representation of a dynamic length element.

<br/>

### List Limits

<br/>

The maximum list length is preset as `N` and called the "list limit".

This limit is preset for two primary reasons:

    Stable merkleization: there are no variable numbers in the hash-tree-root definition.

    Strong guarantees on inputs: lists should never contain more elements than their limit states it was designed for.

<br/>

### Allocation

<br/>

For small list limits, the limit type information may help to optimize for a single allocation of full list capacity.
However, list limits can be arbitrarily high as the cost for serialization and merkleization is `O(n)`:

    the limit is not padded to in serialization

    `O(log(N))` [zero-hashes](../merkleization/hashing.md#zero-hashes) may need to be merged during merkleization.

Hence, lists should not be allocated to their full limit for larger numbers.

<br/>

### Representation (list)

<br/>

Serialized and deserialized like a [Sequence](../representation/sequences.md) of the `values`, all of type `T`.
The limit of the list should be enforced, to ensure that no more than `N` elements are serialized or deserialized.

Note: A list is by definition variable-size, but this does not necessarily mean its elements are.

<br/>

### Merkleization (list)

<br/>

Note: the contents subtree (not including the length mix-in) is padded to fit the limit of the bitlist.

`root = mix_in_num(merkle_subtree(chunkify(values), limit=chunk_count(List[T, N])), length)`,
see [`merkle_subtree`](../merkleization/subtree_merkleization.md),
[`chunkify, chunk_count`](../merkleization/chunkify.md) and [`mix_in_num`](../merkleization/mixin.md).

<div id='Containers'>
<br/>

## Containers

<br/>

    Type: `Container[(<K_i>: <T_i>)+]`

    Default value: `Container[(<K_i>: <T_i>)+](default(T_i)...)`, i.e. all fields set to their default value.

A Container is a predefined sequence of fields, each field can be defined as any type `T_i` independently from the other fields, and is identified by a unique (relative to the other fields) name `K_i`.

Note that field names are not included in serialization or merkleization: a Container is not self-describing.

An empty container, i.e. 0 fields, is an illegal type. Fixed-length types cannot have a 0 length serialized representation.

<br/>

### Representation (container)

<br/>
Serialized and deserialized like a [Sequence](../representation/sequences.md) of the `fields`, each of their own type `T_i`.

<br/>
<br/>

### Merkleization (container)

<br/>
`root = merkle_subtree(chunkify(fields))`,
see [`merkle_subtree`](../merkleization/subtree_merkleization.md), [`chunkify`](../merkleization/chunkify.md).

<div id='Unions'>
<br/>

## Unions

<br/>
### `Union Type` containing one of the given `subtypes`
  
<br/>

`Union[type_0, type_1, ...]`

e.g. `union[null, uint64]`