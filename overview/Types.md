---
title: Types
section: Types
toc: ['Types', 'Aliases', 'Default Values','Merkle Proofs', 'Representation']
---
<div align='center'>

<div id='Types'>

# Types


<br/>
<br/>

<div align='start'>

- ## All SSZ Objects represent data of one of these **Types**:
  
  - ### Unisigned Integer
    - Uint8, Uint16, Uint32, Uint64, Uint128, Uint256
  - ### Boolean
    - Bit, 0 or 1, True or False
  - ### Vector
    - "Fixed Length" sequence of elements of same **Type** (homogeneous)
  - ### List
    - "Variable Length" sequence of elements of the same **Type** (homogenous)
  - ### Container
    - Heterogeneous ordered collection of elements
  - ### Union
    - A "Union Type" containing SSZ Types
  - ### Root
    - A Uint256 that represents the `Bytes32 hash_tree_root` of a nested merkle tree

</div>
<br/>
<div>
<div id='Aliases'>
<br/>

## Aliases
<br/>

**Types** can be **aliased** to more specific types, good use of type aliasing can make a data-structure much clearer.

E.g. `BLSSignature` instead of `Vector[byte, 96]`.

<br/>
</div>
<div id='Default%20Values'>

## Default values

<br/>

All SSZ Types have a default "zeroed" value

<div align='start'>

- Uint: 0
- Bool: False
- Vector: Sequence of default values
- List: Empty List 
- Container: Default value for each type in container
- Union: Default value of "Type_0"
  
</div>
<br/>
Default values are *recursive*; elements in composite types such as containers are initialized with their respective default initializations

<br/>
</div>
<div id='Merkle%20Proofs'>
<br/>

## Merkle proofs

<br/>

### Every type deterministically describes the shape of the **Merkle Tree** representing the type


Most types do so statically: the shape can be constructed on compile time, and navigation is stable (See [generalized indices](../navigation/generalized_indices.md)).


<br/>

### Mapping a valid (to the **type**) merkle tree to that same **type** is *bijective*:
<br/>

<div align='start'>

  - No two different values _of the same type_ can merkleize to the same root
  - No two roots can be derived for the same value _of the type used for the root_.
</div>
<br/>

### **Different types *may* merkleize to the same root:**
<br/>

<div align='start'>

- **Intentionally**: see [summaries and expansions](../navigation/summaries_expansions.md).


- **Different types have the same structure:**
  
<br/>

Two values _of different types_ can merkleize to the same root, e.g. a `uint256(123)` and `uint8(123)` have the same root.

Or more exceptionally, a `Container` with 4 `Bytes32` fields can have the same root as a `Vector[uint64, 16]`.
  
Hence, typing is essential to consuming a proof for data, and should not be chosen arbitrarily by another actor (if a different type has any meaning to the application of the proof).

<br />

</div>
<div id='Representation'>
<br />

## Representation

<br />
<div align='start'>

### Mapping _valid_ instances of the same type to a byte sequence is *bijective*:

<br />

- **Serialization:** Any two different values _of the same type_ cannot have the same representation.
- **Deserialization:** Any _valid_ representation _of a given type_ cannot be interpreted as two different values _of that same type_.

<br />

### Mapping _any_ instance of a type to any byte sequence is _injective and non-surjective_:

<br />

- **Serialization:** All type instantiations can be serialized to a unique (to the type) value.
- **Deserialization:** not all byte sequences are a valid representation for a given type, because of constraints such as:



  - representation length (See [fixed length](../overview/fixed_variable_size.md))
  - element count (See [list limits](./overview/complex.md#list-limits))
  - [element offsets](../overview/sequences.md#offsets)
  - delimiters (See [bitlists](./overview/bitfields.md#bitlist))
  - selectors (See [union](./overview/union.md))
  - more, this is not an exhaustive list.

</div>
</div>
</div>