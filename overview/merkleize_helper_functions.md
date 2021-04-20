---
title: 'Merkleize Helper Functions'
toc: ['merkleize_helper_function', 'size_of', 'chunk_count', 'pack', 'pack_bits', 'next_pow_of_two', 'merkleize', 'mix_in_length', 'mix_in_type']
---

# Merkelize Helper Functions:

  - [size_of](#size_of)
  - [chunk_count](#chunk_count)
  - [pack](#pack)
  - [pack_bits](#pack_bits)
  - [next_pow_of_two](#next_pow_of_two)
  - [merkleize](#merkleize)
  - [mix_in_length](#mix_in_length)
  - [mix_in_type](#mix_in_type)


<div id='merkleize_helper_function' >
</div>

<div id='size_of'>
</div>

## size_of

```
size_of(B), where B is a basic type: the length, in bytes, of the serialized form of the basic type.
```

As this function is only applicable to a basic type, the input must be a uintN or boolean. 

The output must be the length, in bytes, of the serialized form of the basic type. Thus the function must return a minimum of 1 byte (i.e. for boolean and uint8) and a maximum of 32 bytes (i.e. for a uint256). 1 <= size_of(B) <= 32 therefore represents a post-condition of the function.

<div id='chunk_count' >
</div>

## chunk_count


```
    chunk_count(type): calculate the amount of leafs for merkleization of the type.
```

- all basic types: 1
- Bitlist[N] and Bitvector[N]: (N + 255) // 256 (dividing by chunk size, rounding up)
- List[B, N] and Vector[B, N], where B is a basic type: (N * size_of(B) + 31) // 32 (dividing by chunk size, rounding up)
- List[C, N] and Vector[C, N], where C is a composite type: N
- containers: len(fields)

Intended to represent the amount of leaves for merkleization of the type.

The `chunk_count` function is related to both the `pack` and `pack`_bits functions. For basic types, or lists or vectors of basic types, the number of chunks returned by chunk_count should equal the number of chunks returned by the `pack` function. This includes for an empty list i.e. `list[B, N=0]`.

For bitvectors and bitlists, the number of chunks returned by chunk_count should equal the number of chunks returned by the `pack_bits` function, again this will be true even for an empty bitlist i.e. bitlist[N=0].

For these types, that `len(pack(value)) = chunk_count(type)` or `len(pack_bits(value)) = chunk_count(type)` can be seen as an additional post-condition to the chunk_count function or as a property relating the functions

<div id='pack' >
</div>

## pack


`pack(values)`: Given ordered objects of the same basic type: 

 1. Serialize `values` into bytes. 

 2. If not aligned to a multiple of `BYTES_PER_CHUNK` bytes, right-pad with zeroes to the next multiple. 

 3. Partition the bytes into `BYTES_PER_CHUNK`-byte chunks. 

 4. Return the chunks.


This function is designed to create the chunks required to merkleize a `value` that is either a basic type, a vector of basic objects or a list of basic objects. The scope of type for the `value` parameter represents a function pre-condition.

The `values` (i.e. the plural form includes the case of a single basic type, as well as the possibility of an empty sequence in the case of a list) are firstly serialized and then if the number of resulting bytes is not a multiple of 32 then the output is right padded with zero bytes to ensure a multiple of 32 bytes.

Note that if we are dealing with an empty list then its serialized form will be zero bytes. Because zero is a multiple of 32 in this case no padding is required and zero chunks will be returned by the `pack` function. This outcome is consistent with the intention discussed within the explanation of the chunk_count function.

The final step of the `pack` function is to partition the serialized and padded bytes into 32 byte chunks.

The output of the `pack` function is therefore a series of 32 byte chunks and we can observe the following post-conditions:

    0 <= len(pack(values))
    len(pack(values)) == chunk_count(type)


<div id='pack_bits' >
</div>

## pack_bits


```
pack_bits(bits): Given the bits of bitlist or bitvector, get bitfield_bytes by packing them in bytes and aligning to the start. The length-delimiting bit for bitlists is excluded. Then return pack(bitfield_bytes).
```
The `pack_bits` function is analogous to the `pack` function with the output being a series of 32 byte chunks that willget used in the merkleization process.

In this case the input comprises the bits of a `bitvector` or `bitlist`. It can be distinguished from the `pack` function because the bits get packed into bytes with no delimiting bit; noting that when a `bitlist` is serialized the bits are also packed into bytes but a delimitng bit is appended. It is therefore almost the same as the `pack` function but in the case of a `bitlist`, the serialization differs to exclude the use of a delimiting bit.

The bytes generated are referred to as `bitfield_bytes` and then this series of bytes (i.e. a series of `uint8`s) become the input of `pack` to complete the generation of the chunk output. Note that as the input to `pack` in this context is a series of uint8s, the first step of the `pack` function, which is to serialise the values, is redundant because serialisation of a series of uint8s will leave the bytes unchanged. The main purpose of returning `pack(bitfield_bytes)` is to ensure that a multiple of 32 bytes is generated, using padding if needed, and then that these bytes are partitioned into the 32 byte chunks that form the ultimate output.

The pre-condition of the `pack_bits` function is thus that the bits are the bits of a `bitvector` or `bitlist`.

The post-conditions of the `pack_bits` are the same as for the `pack` function:
```
0 <= len(pack(values))
len(pack(values)) == chunk_count(type)
```

<div id='next_pow_of_two' >
</div>

## next_pow_of_two

```
next_pow_of_two(i): get the next power of 2 of i, if not already a power of 2, with 0 mapping to 1. Examples: 0->1, 1->1, 2->2, 3->4, 4->4, 6->8, 9->16
```

The next_pow_of_two function is a helper function for the merkleize function and is used to ensure that the number of leaves being merkleised is a power of 2.

A relatively straight forward mathematical helper function it is important to make sure that an input of zero maps to an output of 1.

Hence the next_pow_of_two(i) function has the following pre-condition:

```
0 <= i
```

and the following post-conditions and properties:

```
1 <= next_pow_of_two(i)
next_pow_of_two(i) == next_pow_of_two(next_pow_of_two(i))
is_power2(next_pow_of_two(i)) == true
```

<div id='merkleize' >
</div>

## merkleize

```
merkleize(chunks, limit=None): Given ordered BYTES_PER_CHUNK-byte chunks, merkleize the chunks, and return the root:

    The merkleization depends on the effective input, which must be padded/limited:
        if no limit: pad the chunks with zeroed chunks to next_pow_of_two(len(chunks)) (virtually for memory efficiency).
        if limit >= len(chunks), pad the chunks with zeroed chunks to next_pow_of_two(limit) (virtually for memory efficiency).
        if limit < len(chunks): do not merkleize, input exceeds limit. Raise an error instead.
    Then, merkleize the chunks (empty input is padded to 1 zero chunk):
        If 1 chunk: the root is the chunk itself.
        If > 1 chunks: merkleize as binary tree.
```

The merkleize function takes a series of 32 byte chunks and a limit parameter.

The chunks are used to form the leaves of a binary merkle tree and the function returns the root of that tree. Note that len(chunks) >= 0 and hence as the chunks will form the leaves of the binary tree, chunk padding may need to be implemented to ensure that the number of leaves is a power of 2. Which power of 2 depends on the limit parameter. If there is no limit then we simply pad with zeroed chunks to next_pow_of_two(len(chunks)) (virtually for memory efficiency). If limit >= len(chunks) then we pad with zeroed chunks to next_pow_of_two(len(chunks)) (virtually for memory efficiency). And if neither of these cases apply then we have a situation where something has gone wrong and the limit < len(chunks); in which case an error should be raised.

The limit parameter has a default value of None but is generally set to chunk_count(type) where the value being processed is a variable length type such as a list or a bitlist. The use of something other than the default is to ensure that sufficient leaves are created to allow for the maximum length of that type, regardless of its current length. I say generally in the context of it being used for variable length types because limit=chunk_count(type) also appears for a bitvector; though in this case the use of the limit is redundant because a bitvector is a fixed length type and so that is no need for the provision of additional leaves; it can be seen that len(chunks) == chunk_count(type).

At this point in the processing the number of chunks, i.e. leaves, is a power of 2 and we are ready to create the binary merkle tree. Because of the chunk padding rule we should note that there will be a minimum of 1 chunk. For example, even if zero chunks were sent into the merkleize function (e.g. as in the case of a list[B,0]) because next_pow_of_two(0) == 1 we will have 1 chunk after padding. Hence it should be noted that the second step of this function, namely Then, merkleize the chunks (empty input is padded to 1 zero chunk) includes some redundancy as empty input can not occur at this stage in the processing.

This second step completes the processing: if we have 1 chunk then that is the root and can be returned, if we have more than 1 chunk then we implement merkelization as a binary tree.

<div id='mix_in_length' >
</div>

## mix_in_length


```
mix_in_length: Given a Merkle root root and a length length ("uint256" little-endian serialization) return hash(root + length).
```

This function is used for variable length types i.e. where the length of the value may be less than the maximum specified. The maximum is encoded into the binary merkle tree be the provision of sufficient leaves to store a value of this maximum length, however the actual length must also be represented and is done so through the mix_in_length function. The merkle root generated from the merkleize function is concatenated with the actual length (i.e. where length is represented as a uint256 using little-endian serialization) and then hashed.


<div id='mix_in_type' >
</div>

## mix_in_type


```
mix_in_type: Given a Merkle root root and a type_index type_index ("uint256" little-endian serialization) return hash(root + type_index).
```

This function is used for Union types