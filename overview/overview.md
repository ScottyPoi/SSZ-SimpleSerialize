---
title: Overview
section: Overview
toc: ['SSZ Overview', 'Table of Contents']
---
<div align='center' id='SSZ%20Overview'>

# SSZ Overview

<br/>
<br/>

### This is an overview of the SSZ Specifications
#### The raw specs can be found [here](#/specs).

<br/>

### What is SSZ?

<br/>
</div>
<div align='start'>


##### SSZ was created to standardize serialization for data for Eth2  

##### It improves upon older formats by including `Merkleization` functionality resulting in smaller, more succint proofs.  

##### The main use-case of SSZ is to provide a consistent encoding and merkleization framework for the core of the Eth2 protocol.  

##### However, use outside of the core protocol, such as in smart contracts or layer-2 solutions, is also considered and factored into the design.  

</div>
<div align='center'>
<br/>

### How does SSZ work?

<br/>

### 1. Serialization

</div>
<div align='start'>

<br />

#### SSZ provides a serialization scheme based on simply byte conversion of integers.  

- ##### Simple values can be stored as **booleans** (1 bit) or **UintN**: unisigned N-bit integers from **Uint8** (1 byte) to **Uint256** (32 bytes).

- ##### Arrays of simple values can be stored as fixed-sie **Vectors** or fixed-limit **Lists**.

- ##### "Key-Value" pairs can be stored as **Containers**

- ##### SSZ also provides a serialization scheme for **Union Types**

##### **ALL** Simple types undergo basic byte serialization to fill one 32 byte ***chunk***.

- ##### These chunks become the *leaves* of a *merkle-tree*, and undergo a binary hashing process known as ***Merkleization*** to yield a single 32-Byte *hash tree root*.

##### The values within complex types are serialized, and packed tightly together into 32-Byte chunks.

- ##### Objects that fill more than one 32-Byte chunk undergo ***Merkleization*** to yield one 32-Byte *hash-tree-root*.  
- ##### This chunked is *Merkleized* with an additional 32-byte chunk containing the serialized length of the array, to yield a 32-byte *hash-tree-root* that will represent that object in the broader *merkle-tree*

</div>
<div align='center'>
<br/>

### 2. Merkleization

</div>
<div align='start'>
<br/>

##### SSZ employs the power of a ***Binary Merkle Tree*** to create a single 32-byte hash representing the state of your data.  

TODO: VISUALIZE MERKLE TREE IN ACTION


<br/>
</div>
<div align='center'>
<br/>

### 3. Proofs, Partial-proofs, Multi-proofs

</div>
<div align='start'>
<br/>

##### SSZ provides a complete set of universal functions to generate efficient proofs from the merkle-tree.  These proofs are small, efficient, and simple, yet provide powerful validation and look-up functionality.


<br/>

---

###### This is NOT official documentation for SSZ-SimpleSerialize. This is an interpretation and expansion on the official specifications. The content here is a living, open-source, collaborative resource, built upon the orginial inspiration for SSZ, as well as the experience of the community of developers implementing SSZ in their work

<br/>
<br/>
</div>
<div align='center'>
<br/>

Clarifications? Corrections? Insight to offer? Please collaborate on this project at our [GitHub](#https://www.github.com/scottypoi/ssz-simpleserialize) repository

