---
title: Fixed Variable Size
section: Representation
toc: [Fixed Size and Variable Size]
---

<div align='center'>
<div id='Fixed%20Size%20and%20Variable%20Size'>

# Fixed-size and variable-size

SSZ makes a difference between **fixed-size** and **dynamic-size** objects, based on a recursive definition to check if the byte-length is variable or not.

An object is considered **fixed-size** if it is:

<div align='start'>

- a basic-type
- a fixed composition of fixed-size types

</div>

This fixed-size property breaks when e.g. there is a variable amount of elements,
or the exact type of its serialization cannot be determined without reading data.

## An object is considered **variable-size** if and only if it is not fixed-size
