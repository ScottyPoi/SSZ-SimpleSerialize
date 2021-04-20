---
title: Basic Types
section: Types
toc: ['Basic Types', 'Unsigned Integers', 'Booleans']
---

# Basic Types

<div id='Basic%20Types'>

### SSZ support two basic Types:
- `Unisigned Integer`
- `Boolean`

The basic types all strictly follow the basic-type principles:

- 1 to 32 bytes long, for merkleization purposes.
- A power of 2 bytes long, for packing/alignment purposes. See [chunkification](../overview/chunkify.md).
- [Fixed length](../overview/fixed_variable_size.md)

</div>
<div id='Unsigned%20Integers'>

## Unsinged Integers

Type: `uintN`, where `N` can be: `8, 16, 32, 64, 128, 256`.

Alias: `uint8 <-> byte`

Default value: `0`

A `N`-bit unsigned integer.

- ### Representation

The integers have a little-endian representation, and represented in their respective byte sizes.

The `serialization` of `uintN` is defined using the Python version of `int.to_bytes`, little-endian.



- ### Merkleization

The integers, represented as bytes, are padded on the right side with zeroed bytes to a total of 32 bytes for merkleization.
Note:

    - Some complex types pack smaller integers together into 32 bytes, to reduce the merkleization cost.
    - Because of the little-endianness and right-padding, equal integers of different bit-sizes all map to the same 32 bytes value.

- ### Size

`size_of(uintN): N / 8`

</div>
<div id='Booleans'>

## Booleans

Type: `boolean`

Alias: `bit`

Default value: `False`

- ### Representation (Boolean)

Booleans are the simplest Type to serialise and deserialise. The Boolean value true (resp. false) is serialized into a byte of value 1 (resp. 0). Note that this implies that the co-domain of serialize<Booleans> is the set of bytes {0,1}. As a result the domain of deserialize<Booleans> must be {0,1}.

    A single byte: 1 (i.e. `0b00000001`) for `True`, and 0 (i.e. `0b00000000`) for `False`.

To have a one-to-one correspondence from value to serialized byte, the non-utilized bits of the byte MUST all be zero bits.

- ### Merkleization (Boolean)

The boolean represented as byte is merkleized exactly like `byte`, including the ability to pack (but only to `byte` precision, refer to bitfields for more efficient packing).

- ### Size (Boolean)

`size_of(bool): 1`

</div>