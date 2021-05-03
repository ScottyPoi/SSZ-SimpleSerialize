---
title: Basic Types
section: Types
toc: ['Basic Types', 'Unsigned Integers', 'Booleans']
prev: Typing
next: Composite_Types
---
<div align='center'id='Basic%20Types'>

# Basic Types
<br/>

#### SSZ support two **Basic Types**:
<br/>

</div>
<div align='start'>

1. #### `Unisigned Integer`
2. #### `Boolean`

</div>
<div align='center' id='Unsigned%20Integers'>

## Unsigned Integers

</div>
<div align='start'>

- Type: 
  - `uintN`, where `N` can be: `8, 16, 32, 64, 128, 256`.

- Aliases: 
  - `uint8 <-> byte`
  - `uint256 <-> root`
  
- Default value: 
  - `0`

- Size: 
  - `size_of(uintN): N / 8`

</div>
<div align='center'>

#### Serialization

</div>
<div align='start'>

The `serialized` form on any unsined integer is the `Bytes` representation of that integer.

The `serialization` of `uintN` is defined using the Python version of `int.to_bytes`, little-endian.

</div>
<div align='center'>

#### Merkleization

</div>
<div align='start'>

The integers, represented as bytes, are padded on the right side with zeroed bytes to a total of 32 bytes for merkleization.
Note:

 - Some complex types pack smaller integers together into 32 bytes, to reduce the merkleization cost.
 - Because of the little-endianness and right-padding, equal integers of different bit-sizes all map to the same 32 bytes value.



</div>
<div align='center' id='Booleans'>

## Booleans

</div>
<div align='start'>

- Type: `boolean`

- Alias: `bit`

- Default value: `False`

- Size: `1` 

</div>
<div align='center'>

#### Serialization

</div>
<div align='start'>

Booleans have two possible values: `True` or `False`

The Boolean value `false` is serialized into a `byte` of value `0`  

The Boolean value `true` is serialized into a `byte` of value `1`  

</div>
<div align='center'>

#### Merkleization

</div>
<div align='start'>

The boolean represented as byte is merkleized exactly like `byte`, including the ability to pack (but only to `byte` precision, refer to [bitfields](/overview/bitvectors) for more efficient packing).

</div>
