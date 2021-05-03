---
title: Deserialization
section: Deserialization
toc: [Deserialization]
---

<div align='center' id='Deserialization'>

# Deserialization
<br/>

Because serialization is an ***injective*** function 
(i.e. two distinct objects of the same `type` will **`serialize`** to different `values`) 
any `bytestring` has at most one object it could **`deserialize`** to. 

</div>
<div align='start'>
<br/>

- Note that deserialization requires hardening against invalid inputs. A non-exhaustive list:
  - Offsets: out of order, out of range, mismatching minimum element size.
  - Scope: Extra unused bytes, not aligned with element size.
  - More elements than a list limit allows. Part of enforcing consensus.