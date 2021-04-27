---
title: Deserialize Variable-Size Objects
section: Deserialization
toc: [Variable-Size Objects]
---

<div align='center' id='Variable-Size%20Objects'>

# Deserialization of Variable-Size Objects
<br/>

Deserialization can be implemented using a recursive algorithm. 

</div>
<div align='start'>
<br/>

##### The deserialization of basic objects is easy, and from there we can find a simple recursive algorithm for all fixed-size objects. For variable-size objects we have to do one of the following depending on what kind of object it is:

- ###### Vector/list of a variable-size object: 
  - The serialized data will start with offsets of all the serialized objects (BYTES_PER_LENGTH_OFFSET bytes each).
    - Using the first offset, we can compute the length of the list (divide by BYTES_PER_LENGTH_OFFSET), as it gives us the total number of bytes in the offset data.
    - The size of each object in the vector/list can be inferred from the difference of two offsets. To get the size of the last object, the total number of bytes has to be known (it is not generally possible to deserialize an SSZ object of unknown length)
- ###### Containers follow the same principles as vectors 
  - With the difference that there may be fixed-size objects in a container as well. 
  - This means the fixed_parts data will contain offsets as well as fixed-size objects.
- ###### Bitlists, 
  - The length in bits cannot be uniquely inferred from the number of bytes in the object. 
  - Because of this, they have a bit at the end that is always set. This bit has to be used to infer the size of the bitlist in bits.
