---
title: Composite Objects
section: Serialization
toc: [Fixed Size and Variable Size]
---

<div align='center' id='Fixed%and%Variable%Size'>

# Serialize Composite Objects
<br/>
</div>
<div align='start'

##### For composite objects, the individual elements in the sequence are recursively serialized and packed together, separated by an offset of `4 bytes`, into `32 Byte` chunks, with the `length` (and `type` for Unions) "mixed-in".  The final serialized object is a concatenation of the fixed parts and the variable parts.
<br/>
<br/>

</div>
<div align='center'>

### Fixed-size and variable-size
<br/>

</div>
<div align='start'>

##### An object is considered **fixed-size** if it is:

- a basic-type
- a fixed composition of fixed-size types

##### An object is considered **variable-size** if it is not fixed-size

<br/>
</div>
<div align='center' id='Serialize%20and%20Deserialize'>

### Serialize and Deserialize

Representation of sequences can be thought of as two parts: the `fixed` part, and the `variable` part.

`Fixed-size` types do not have a `variable` part.

<br/>
</div>
<div align='start'>

- #### Fixed part
  - ##### For each of the elements in order, if the element type is:
    - ###### `fixed-size`:
      - Serialize the element and append it to the fixed-size part.
        - Lists of fixed-size elements effectively concatenate all elements,
          the naming of the fixed-size part as whole does not apply to the list, but to element-type.
    - ###### `variable-size`:
      - Append an offset to the fixed-size part, pointing to the start of the element data in the variable-size part.
      - Serialize the element and append it to the variable size part.
- #### Variable part
    - For variable-size elements, the elements are serialized, tightly packed, then appended in order to the variable-size part.
- #### Offsets
  - Within the fixed-size part offsets may be encoded to locate elements in the variable-size part.
  - Offsets are 4 bytes each, typed as `uint32`, and can range from `[bytelen(fixed_part), bytelen(fixed_part) + bytelen(variable_part)]`. I.e. the fixed-part byte length is included as part of the offset.
  - Each offset is pointing to the start of the serialized data, the index of the first byte of the element.
  - For each offset, it MUST hold that `offsets[i-1] <= offsets[i] <= offsets[i+1]`, so that elements can be read from the byte stream following the offsets in order.
  - It also MUST hold that the first offset aligns correctly:
  - In a List this means that the first offset MUST be an exact multiple of the offset size, i.e. a multiple of 4.
  - In a Container, this means that the first offset equals the fixed-size part of the container.