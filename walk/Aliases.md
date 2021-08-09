## Aliases


**Types** can be **aliased** to more specific types, good use of type aliasing can make a data-structure much clearer.  
E.g. 

`Epoch` = `Uint64`

`Root` = `Uint256`

`BLSSignature` = `Vector[byte, 96]`

`Checkpoint` = `Container[epoch: Epoch, root: Root]`

`CommitteeBits` = `BitList[limit: MAX_VALIDATORS_PER_COMMITTEE]`



