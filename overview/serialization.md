---
title: SSZ Object Serialization
section: Serialization
toc: []
---
<div align='center'>

# Serialization

<br />

### **The simpleserialize method for serialization follows simple byte conversion, making it effective and efficient for encoding and decoding**

- **The decoding requires knowledge of the data type and the order of the serialization**


- **When performing decoding on an entire serialized string, it also requires knowledge of what order the objects have been serialized in**


<br />

## Type Serializable

An object that can be serialized is of `type Serializable` in SSZ (`Serializable` can be thought of as a `trait`.) Given a `type T`, we write `T <: Serializable` if `T` extends (or "inherits" or "is a") `Serializable`.

### Each type `T <: Serialiable` should offer the two functionalities described above:

```
serialize<T> : T --> seq<bytes> 
```

### a total function that returns a sequence of bytes when applied to an object of `type T`, and:

    
    deserialize<T> : seq<bytes> ~-> T

### a partial function that returns an object of `type T` *when it is possible* to deserialize a sequence of bytes in an object of `type T`

<br />
<br />

## Expected Properties of Serialize/Deserialize

### Given two objects `O1:T`, `O2:T` (read "Oi of type T") where `T <: Serializable`, the pair of functions (`serialize<T>, deserialize<T>`) should be:

<div align='start'>

- **Involutive**: `deserialize<T>( serialize<T>(O1) ) = O1`
- **Injective**: `serialize<T>(O1) = serialize<T>(O2)` implies that `O1 = O2`

</div>

## SSZ Types

### In the Eth2.0 specifications, SSZ provides serialization and deserialization for
<br />
<div align='start'>

- **Basic types** i.e. integers, Booleans,
- **List** and *vectors of bits*, known as **BitLists** and **BitVectors**,
- **Lists** and **Vectors** of *Serializable*,
- **Containers** with *Serializable fieds*,
- **Unions** of *Serializable Types*

</div>