

# Serialization


##### **`SimpleSerialize`** follows simple `byte` conversion, making it effective and efficient for encoding and decoding

##### `Serialization` encodes the data into `Bytes32` chunks for merkleization.



#### SSZ provides `serialize` and `deserialize` methods for


- **Basic types** i.e. integers, Booleans,
- **List** and *vectors of bits*, known as **BitLists** and **BitVectors**,
- **Lists** and **Vectors** of `type_serializable`,
- **Containers** with `type_serializable` *fieds*,
- **Unions** of `serializable` *types*


### "Type Serializable"


An object  ***that can be serialized***  is of `type_serializable`

`serializable` can be thought of as a `trait`

Given a `type T`, we write `T : Serializable` if `T` extends (or "inherits" or "is a") `Serializable`.

##### Each type `T:Serialiable` should offer two functionalities:

- ###### Serialize:
  - `serialize<T> : T -> seq<bytes>`
  - Returns a sequence of bytes when applied to an object of `type T`
- ###### Deserialize:
  - `deserialize<T> : seq<bytes> ~-> T`
  - Returns an object of `type T` *when it is possible* to deserialize a sequence of bytes in an object of `type T`




##### Given two objects `O1:T` and `O2:T` where `T <: Serializable`, the pair of functions (`serialize<T>, deserialize<T>`) should be:



- **Involutive**: `deserialize<T>( serialize<T>(O1) ) = O1`
- **Injective**: `serialize<T>(O1) = serialize<T>(O2)` implies that `O1 = O2`

