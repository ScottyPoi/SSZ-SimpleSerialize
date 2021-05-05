---
title: hash_tree_root
toc: [hash_tree_root, Basic Objects, BitVectors, List(Basic), Bitlist, Vector, List(Composite), Union]
prev: merkleize_helper_functions
next: merkle_proofs
---

<div align='center'>

# hash_tree_root

The `hash_tree_root` function is based on the construction of a binary merkle tree in which the serialized form of the value becomes the leaves of the tree.

However, the derivation of the final 32 bytes root hash does also depend on the type of a value and for some cases additional information relating to the type or length of a value is incorporated.

</div>
<div align='start'>

#### `hash_tree_root(value)` of an object:

- Basic Object or Vector of Basic Objects
    - `merkleize(pack(value))` 
- Bitvector
    - `merkleize(pack_bits(value), limit=chunk_count(type))` 
- List of Basic objects
    - `mix_in_length(merkleize(pack(value), limit=chunk_count(type)), len(value))` 
- Bitlist
    - `mix_in_length(merkleize(pack_bits(value), limit=chunk_count(type)), len(value))` 
- Vector of Composite objects or Container
    - `merkleize([hash_tree_root(element) for element in value])` 
- List of composite objects
    - `mix_in_length(merkleize([hash_tree_root(element) for element in value], limit=chunk_count(type)), len(value))` 
- Union type.
    - `mix_in_type(merkleize(value.value), value.type_index)` 


<br/>

It is important to note that whether a value is of a fixed or variable length type will impact upon the specification of its `hash_tree_root`

The `merkleize(chunks, limit=None)` helper function takes as input a series of 32-byte chunks that represent the value being processed and hence become the leaves of the binary merkle tree formed by merkleization.


### Basic object or vector of basic objects (fixed length types)

`hash_tree_root(value) = merkleize(pack(value))`

In this case the process is relatively simple as the value being merkleised will be either a uintN, boolean, vector of uintNs, or vector of booleans, and hence will be of a fixed length.

The pack function takes the value, serializes it into bytes and right pads with zeros to create a multiple of `BYTES_PER_CHUNK`-byte chunks. These chunks are then merkleized as a binary tree and the root is returned.

The `hash_tree_root` is therefore just the root of the binary merkle tree in which the leaves are created from the serialized form of the value (with zero padding as necessary).

### Bitvector (fixed length type)

`hash_tree_root(value) = merkleize(pack_bits(value)`
`limit=chunk_count(type))`

<br/>

The `value` is processed by `pack_bits` rather than `pack`. 

`pack_bits` is a specialized form of `pack` in which the bits of the bitvector are packed into bytes directly, rather than say trying to serialize each bit individually

This difference is important as generally when working with a series of bits (fixed length) a bitvector would be the preferred structure due to the storage efficiencies gained from being able to pack 32 bits into each chunk. This can be contrast to using a vector of booleans which would require one byte for each bit, and thus a series of 32 bites would require 32 * 8 = 256 bytes = 8 chunks

The other noticable difference is the inclusion of the limit parameter, here set to `chunk_count(type)`. This parameter is generally used for variable length types to ensure that a buffer is included so as to allow for the maximum length of the type. As such in this instance for bitvectors, as a fixed length type, it is redundant. `merkleize(pack_bits(value))` produces an equivalent result. Again further explanation of the use of the limit parameter for the merkleize function will be provided below.

### List of basic objects

`hash_tree_root(value) = mix_in_length(merkleize(pac(value), limit=chunk_count(type)), len(value))`

<br/>



The value being merkleized will be either a list of `uintN`s, or `list` of `booleans`. Note that a `list` of `booleans` is distinct from a `bitlist`

If we focus initially on the `merkleize(pack(value), limit=chunk_count(type))` part we can see that the value gets packed into chunks and we also have the limit parameter.

`Lists` are a variable length type and so in this case the `limit` represents an upper bound on the length; the number of chunks that would be required to represent a `value` of maximum length. In particular, the inclusion of this upper bound means that the packed `value` will be padded with zero chunks up to the limit during merkleisation, to ensure that the number of leaves being included is that for a maximum length `value` of that type.

To generate the `hash_tree_root(value)` the root that results from the merkleization function is then hashed with the actual length of the value within the `mix_in_length` function to yield the final hash tree root.


### Bitlist (variable length type)

`hash_tree_root(value) = mix_in_length(merkleize(pack_bits(value), limit=chunk_count(type)), len(value))`

<br/>

Bitlist is similar to the list case in that to generate the `hash_tree_root(value)` the root that results from the merkleisation function is then hashed with the actual length of the value within the mix_in_length function to yield the final hash tree root. i.e. `mix_in_length`(merkleization root, length).

The primary difference to the list case is therefore in this case we are dealing with bits and hence the chunks required as the first input parameter to the `merkleize` function are generated using the pack_bits function rather than the pack function. As mentioned previously in the context of bitvectors, `pack_bits` is a specialized form of `pack` in which the bits of the bitlist are packed into bytes directly, rather than say trying to serialize each bit individually.

This difference is important as generally when working with a series of bits (variable length) a bitlist would be the preferred structure due to the storage efficiencies gained from being able to pack 32 bits into each chunk. This can be contrast to using a list of booleans which would require one byte for each bit, and thus a series of 32 bites would require 32 * 8 = 256 bytes = 8 chunks.

The inclusion of the `limit` parameter, here set to `chunk_count(type)` is also similar to the case of lists. While further details regarding the helper function `chunk_count` will be provided below, it is useful to note here that this parameter is generally used for variable length types to ensure that a buffer is included so as to allow for the maximum length of the type.

### Vector of composite objects or a container

`hash_tree_root(value) = merkleize([hash_tree_root(element) for element in value])`

<br/>

Firslty, consider the application to vectors of composite objects and thus each element in value will be of the same type.

To generate the chunks required as input to the merkleize function, each element itself becomes input to the hash_tree_root function yielding a recursive process. For example if we have a vector of uint64 lists then we have a fixed number of the uint64 lists and each of these uint64 lists would be processed by the hash_tree_root(value) = mix_in_length(merkleize(pack(value), limit=chunk_count(type)), len(value)) function. The processing of each element, i.e. each list, would yield a 32-byte hash tree root and this series of 32-byte hash tree roots then become the chunks for input to the merkleize function.

As a vector is a fixed length type the limit parameter for the merkleize function is not required, as well there is no use of the mix_in_length functionality.

If we now look at the application to a container; a container will have fields and so each field becomes an element to be processed by hash_tree_root; thus generating a series of 32-byte hash tree roots that become the chunks for input to the merkleize function.

Again, as a container is a fixed length type the limit parameter for the merkleize function is not required, as well there is no use of the mix_in_length functionality.

### List of composite objects

`hash_tree_root(value) = mix_in_length(merkleize([hash_tree_root(element) for element in value], limit=chunk_count(type)), len(value))`

<br/>

Similar to the processing of a vector of composite objects (and containers), a 32-byte hash tree root is generated for each element of the list thus forming the chunks to be input to the merkleize function; however, unlike the case for a vector of composite objects, the merkleize function does in this case require the limit parameter to ensure that the number of leaves being included is that for a maximum length value of that type. The actual length, as given by len(value) is then incorporated using the mix_in_length function to yield the final hash tree root for the list of composite objects.

### Union

`mix_in_type(merkleize(value.value), value.type_index)` 
