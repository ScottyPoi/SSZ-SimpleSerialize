---
title: SSZ Object Serialization
section: Serialization
toc: []
---

# Serialization

An object that can be serialized is of type Serializable in SSZ (Serializable can be thought of as a trait.) Given a type T, we write T <: Serializable if T extends (or "inherits" or "is a") Serializable.

Each type T <: Serialiable should offer the two functionalities described above:

    serialize<T> : T --> seq<bytes>, a total function that returns a sequence of bytes when applied to an object of type T,

and 
    
    deserialize<T> : seq<bytes> ~-> T, a partial function that returns an object of type T when it is possible to deserialize a sequence of bytes in an object of type T. Indeed, deserialize<T> may not be defined for some sequences xs (see below for concrete cases.)

## Expected Properties of Serialize/Deserialize

Given two objects O1:T, O2:T (read "Oi of type T") where T <: Serializable, the pair of functions (serialize<T>, deserialize<T>) should be:

    Involutive: deserialize<T>( serialize<T>(O1) ) = O1,
    Injective: serialize<T>(O1) = serialize<T>(O2) implies that O1 = O2.

## SSZ types

In the Eth2.0 specifications, SSZ provides serialization and deserialization for

- Basic types i.e. integers, Booleans,
- List and vectors of bits, known as BitLists and BitVectors,
- Lists and vectors of Serializable,
- Containers with Serializable fieds,
- Unions oh Serializable Types
