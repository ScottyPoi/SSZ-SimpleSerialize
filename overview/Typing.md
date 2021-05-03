---
title: Typing
section: Typing
toc: ['Types', 'Aliases', 'Default Values','Merkle Proofs', 'Representation']
prev: sszineth2
next: basic
---
<div align='center' id='Types'>

# Typing  
<br/>

## Types
<br/>

#### All SSZ Objects represent data of one of these **Types**:  
<br/>

</div>
<div align='start'>

  - ###### **Unisigned Integer**
    -  `Uint8, Uint16, Uint32, Uint64, Uint128, Uint256`
  - ###### **Boolean**
    - `Bit, 0 or 1, True or False`
  - ###### **Vector**
    - `"Fixed Length" sequence of elements of same **Type** (homogeneous)`
  - ###### **List**
    - `"Variable Length" sequence of elements of the same **Type** (homogenous)`
  - ###### **Container**
    - `Heterogeneous ordered collection of elements`
  - ###### **Union**
    - `A "Union Type" containing SSZ Types`
  - ###### **Root**
    - `A Uint256 that represents the `Bytes32 hash_tree_root` of a nested merkle tree`

<br/>

</div>
<div align='center' id='Aliases'>

<br/>

## Aliases
<br/>

**Types** can be **aliased** to more specific types, good use of type aliasing can make a data-structure much clearer.  
E.g. `BLSSignature` instead of `Vector[byte, 96]`.
<br/>

</div>
<div id='Default%20Values' align='center>

## Default values

<br/>

All SSZ Types have a default "zeroed" value

</div>
<div align='start'>

- `Uint`: 0
- `Boolean`: False
- `Vector`: Sequence of default values
- `List`: Empty List 
- `Container`: Default value for each type in container
- `Union`: Default value of "Type_0"
<br/>  

</div>
<div align='center'>

Default values are *recursive*; elements in composite types such as containers are initialized with their respective default initializations
<br/>

</div>
<div align='center' id='Merkle%20Proofs'>

<br/>

## Merkle proofs

<br/>

Every type deterministically describes the shape of the **Merkle Tree** representing the type

</div>
<div align='start'>

> Most types do so statically: the shape can be constructed on compile time, and navigation is stable (See [generalized indices](../navigation/generalized_indices.md)).
<br/>

</div>
<div align='center'>

#### Mapping a valid (to the **type**) merkle tree to that same **type** is *bijective*:
<br/>

</div>
<div align='start'>

- ##### No two different values _of the same type_ can merkleize to the same root
- ##### No two roots can be derived for the same value _of the type used for the root_.
<br/>

</div>
<div align='center'>

#### **Different types *may* merkleize to the same root:**
<br/>

</div>
<div align='start'>

##### **1. Intentionally**: see [summaries and expansions](../navigation/summaries_expansions.md).  
  
or  

##### **2. Because different types have the same structure**

-  Two values _of different types_ can merkleize to the same `root`
   - e.g. a `uint256(123)` and `uint8(123)` have the same root.  
   - Or more exceptionally, a `Container` with 4 `Bytes32` fields can have the same root as a `Vector[uint64, 16]`.

<br />

</div>
<div align='center' id='Representation'>
<br />

## Representation

<br />


#### Mapping _valid_ instances of the same type to a byte sequence is *bijective*:

</div>
<div align='start'>
<br />

- **Serialization:** Any two different values _of the same type_ cannot have the same representation.  

- **Deserialization:** Any _valid_ representation _of a given type_ cannot be interpreted as two different values _of that same type_:

<br />
</div>
<div align='center'>

#### Mapping _any_ instance of a type to any byte sequence is _injective and non-surjective_:

</div>
<div align='start'>
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