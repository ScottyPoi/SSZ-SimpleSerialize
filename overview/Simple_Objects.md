---
title: Serialize Simple Objects
section: Serialization
toc: [Simple Objects]
prev: serialization
next: Composite_Objects
---

<div align='center' id='Simple%Objects'>

# Serialize Simple Objects

## Basic Types

The serialized form of all `Basic Types` can fit inside one `Bytes32` chunk for merkleization

</div>
<div align='start' id='Basic%20Types'>

A `uint256` integer will occupy the entire `Bytes32` chunk.  

Smaller unisigned integers and booleans are serialized, then packed with zeroes to fill the `chunk`

- ##### uintN
    - assert N in [8, 16, 32, 64, 128, 256]
    - return value.to_bytes(N // BITS_PER_BYTE, "little")

- ##### boolean
    - assert value in (True, False)
    - return b"\x01" if value is True else b"\x00"

</div>


