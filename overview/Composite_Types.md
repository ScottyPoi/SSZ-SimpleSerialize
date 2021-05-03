---
title: Complsite Types
section: Types
toc: ['Composite Types', 'Vectors', 'Lists', 'Containers', 'Unions']
---

<div id='Composite%20Types' align='center'>


# Composite Types

<br/>


**Composite Types** are types that can hold multiple values at the same time, with usage similar to that of a `struct` in popular programming languages.

<br/>
</div>
<div align='start'>

The SSZ specs describe 4 **composite types**:

- ###### **[Vectors](#Vectors)**
  - `"Fixed Length" sequence of elements of same` **Type**
  - `Homogeneous`
- ###### **[Lists](#Lists)**
  - `"Variable Length" sequence of elements of the same` **Type** 
  - `Homogenous`
- ###### **[Containers](#Containers)**
  - `Ordered collection of elements`
  - `Hetrogeneous`
- ###### **[Union]($Unions)**
  - `A "Union Type" containing SSZ Types`

<br />

</div>
<div align='center'>

##### These types are distinguised by their **size** (`fixed` or `variable`)

##### And whether their contents are `homogeneous` or `heterogeneous` 

<br/>

</div>
<div algin=start'>

###### A composite object is considered `fixed size` if:

- all of the contained elements are `fixed size`
- `type` has a `fixed element count` (e.g. `Lists` cannot be `fixed size`)

<br/>


###### A composite object is `homogeneous` if 

- its contents are all of one **type** 
 
###### A composite object is `heterogeneous` if 
 
- it contains multiple **types**.

<br/>
<br/>
</div>
<div id='Vectors' align='center'>
<br/>

## Vectors

<br/>

#### A **Vector** is a sequence of elements, all of the same type `T`, and of fixed length `N`.

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

- ###### Serialization:
  - Serialized and deserialized like a [Sequence](../overview/composite_objects.md) of the `values`, all of type `T`.

- ###### Merkleization
  - `root = merkle_subtree(chunkify(values))`, see [`merkle_subtree`](../merkleization/subtree_merkleization.md) and [`chunkify`](../merkleization/chunking.md)

<br/>
</div>
<div align='center' id='Lists'>

<br/>

## Lists

<br/>

#### A List is a sequence of elements, all of the same type `T`, and can be any length from `0` to `N` (inclusive).

</div>
<div align='start'>

- ###### Type: 
  - `List[T, N]`

- ###### Default value: 
  - `[]`, i.e. empty list.

- ###### List Limits
  - The maximum list length is preset as `N` and called the "list limit".
  - This limit is preset for two primary reasons:
    1. Stable merkleization: there are no variable numbers in the hash-tree-root definition.
    2. Strong guarantees on inputs: lists should never contain more elements than their limit states it was designed for.

- ###### Serialization
  - Serialized and deserialized like a [Sequence](../representation/sequences.md) of the `values`, all of type `T`.
  - The limit of the list should be enforced, to ensure that no more than `N` elements are serialized or deserialized.
  - A list is by definition variable-size, but this does not necessarily mean that its *elements* are.

- ###### Merkleization
  - The contents subtree (not including the length mix-in) is padded to fit the limit of the bitlist.
  - `root = mix_in_num(merkle_subtree(chunkify(values), limit=chunk_count(List[T, N])), length)`,
  - see [`merkle_subtree`](../merkleization/subtree_merkleization.md),
  - [`chunkify, chunk_count`](../merkleization/chunkify.md) and [`mix_in_num`](../merkleization/mixin.md).

</div>
<div align='center' id='Containers'>
<br/>

## Containers

<br/>

#### Containers are ordered sequences of values of any type

</div>
<div align='start'>

- ###### Type: 
  - `Container[(<K_i>: <T_i>)]`
  - A Container is a predefined sequence of fields, each field can be defined as any type `T_i` independently from the other fields, and is identified by a unique (relative to the other fields) name `K_i`.

- ###### Default value: 
  - `Container[(<K_i>: <T_i>)](default(T_i)...)`, i.e. all fields set to their default value.

- ###### Empty Container:
  - An empty container, i.e. 0 fields, is an illegal type. Fixed-length types cannot have a 0 length serialized representation.

- ###### Serialization
  - Serialized and deserialized like a [Sequence](../representation/sequences.md) of the `fields`, each of their own type `T_i`.

- ###### Merkleization (container)
  - `root = merkle_subtree(chunkify(fields))`,
  - see [`merkle_subtree`](../merkleization/subtree_merkleization.md), [`chunkify`](../merkleization/chunkify.md).

</div>
<div align='center' id='Unions'>
<br/>

## Unions

<br/>

#### **[`Unions`](https://en.wikipedia.org/wiki/Union_type)** provide the ability to represent a set of predetermined types in the same tree and serialization position.
  
<br/>

</div>
<div align='start'>

- ###### Type:
  - `Union[type_0, type_1, ...]`
  - e.g. `union[null, uint64]`
- ###### Default Value:
  - Default value of `type_0`
- ###### `Null` Types:
  - A special `null` type may be used as first type parameter to emulate an `Option`, any other type parameter than the first MUST not be `null`.
  - A `null` as a standalone type is illegal.
- ###### Size:
  - A Union is considered to have a `dynamic` encoding-size, even if all the selectable options have the same type or happen to have the same serialized byte length.
- ###### Serialization
  -  `uint32` for the type index
  -  Followed by the serialization of the selected option.
  - `null` is represented as an empty byte sequence 
- ###### Merkleization
  -  `mix_in_num(x, i)` 
     -  where `x` is the root of the selected option with index `i` 
     -  Right-padded to 32 bytes, effectively a `uint256`