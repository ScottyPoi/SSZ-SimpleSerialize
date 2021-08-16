## Aliases


**Types** can be **aliased** to more specific types, good use of type aliasing can make a data-structure much clearer.  
E.g. 

`Gwei = Uint64`  
`BLSSignature` = `Vector[byte, 96]`  
`CommitteeBits` = `BitList[limit: MAX_VALIDATORS_PER_COMMITTEE]`  
`Epoch` = `Uint64`  
`Root` = `Uint256`  
`Checkpoint` = `Container[epoch: Epoch, root: Root]`  
`Bytes32 = Vector[byte, 32]`  
`Bytes48 = Vector[byte, 48]`  
`BLSPubkey = Bytes48;`  

**Aliased Types** can be reused to improve readability and consistancy.  
    
    Attestation = Container{
            sourceEpoch: Epoch,
            targetEpoch: Epoch,
            signingRoot: Root,
    }


