---
title: Merkle Multiproofs
toc: []
prev:
next:
---

<div align='center' id='Merkle%Multiproofs'>

# Merkle Multiproofs

We define a **`Merkle Multiproof`** as:

</div>
<div align='start'>

The minimal subset of nodes in a Merkle tree needed to fully authenticate that a set of nodes actually are:

- Part of a Merkle tree
  - With some specified root,
  - At a particular set of generalized indices.

</div>
<div align='center'>

**_TODO: VISUALIZE MERKLE MULTIPROOF_**

### Functions to compute the generalized indices of the auxiliary tree nodes that a proof of a given set of generalized indices will require:

</div>
<div align='start'>

- #### get_branch_indices

    <details><summary>See Pseudocode</summary><br>

    ```python
    def get_branch_indices(tree_index: GeneralizedIndex) -> Sequence[GeneralizedIndex]:
        """
        Get the generalized indices of the sister chunks along the path from the chunk with the
        given tree index to the root.
        """
        o = [generalized_index_sibling(tree_index)]
        while o[-1] > 1:
            o.append(generalized_index_sibling(generalized_index_parent(o[-1])))
        return o[:-1]
    ```
    </details>
<br/>

- #### get_path_indices

    <details><summary>See Pseudocode</summary><br>

    ```python
    def get_path_indices(tree_index: GeneralizedIndex) -> Sequence[GeneralizedIndex]:
        """
        Get the generalized indices of the chunks along the path from the chunk with the
        given tree index to the root.
        """
        o = [tree_index]
        while o[-1] > 1:
            o.append(generalized_index_parent(o[-1]))
        return o[:-1]
    ```
    </details>  
<br/>

- #### get_helper_indices

    <details><summary>See Pseudocode</summary><br>

    ```python
    def get_helper_indices(indices: Sequence[GeneralizedIndex]) -> Sequence[GeneralizedIndex]:
        """
        Get the generalized indices of all "extra" chunks in the tree needed to prove the chunks with the given
        generalized indices. Note that the decreasing order is chosen deliberately to ensure equivalence to the
        order of hashes in a regular single-item Merkle proof in the single-item case.
        """
        all_helper_indices: Set[GeneralizedIndex] = set()
        all_path_indices: Set[GeneralizedIndex] = set()
        for index in indices:
            all_helper_indices = all_helper_indices.union(set(get_branch_indices(index)))
            all_path_indices = all_path_indices.union(set(get_path_indices(index)))

        return sorted(all_helper_indices.difference(all_path_indices), reverse=True)
    ```
    </details>
<br/>

</div>
<div align='center'>

## Merkle Proof Verification Functions

### For single item proofs:

</div>
<div align='start'>

- #### calculate_merkle_root
    <details><summary>See Pseudocode</summary><br>

    ```python
    def calculate_merkle_root(leaf: Bytes32, proof: Sequence[Bytes32], index: GeneralizedIndex) -> Root:
        assert len(proof) == get_generalized_index_length(index)
        for i, h in enumerate(proof):
            if get_generalized_index_bit(index, i):
                leaf = hash(h + leaf)
            else:
                leaf = hash(leaf + h)
        return leaf
    ```
    </details>  
<br/>

- #### verify_merkle_proof
    <details><summary>See Pseudocode</summary><br>

    ```python
    def verify_merkle_proof(leaf: Bytes32, proof: Sequence[Bytes32], index: GeneralizedIndex, root: Root) -> bool:
        return calculate_merkle_root(leaf, proof, index) == root
    ```
    </details>  
<br/>

</div>
<div align='center'>

### For Multi-item Proofs:

</div>
<div align='start'>

- #### calculate_multi_merkle_root
    <details><summary>See Pseudocode</summary><br>

    ```python
    def calculate_multi_merkle_root(leaves: Sequence[Bytes32],
                                    proof: Sequence[Bytes32],
                                    indices: Sequence[GeneralizedIndex]) -> Root:
        assert len(leaves) == len(indices)
        helper_indices = get_helper_indices(indices)
        assert len(proof) == len(helper_indices)
        objects = {
            **{index: node for index, node in zip(indices, leaves)},
            **{index: node for index, node in zip(helper_indices, proof)}
        }
        keys = sorted(objects.keys(), reverse=True)
        pos = 0
        while pos < len(keys):
            k = keys[pos]
            if k in objects and k ^ 1 in objects and k // 2 not in objects:
                objects[GeneralizedIndex(k // 2)] = hash(
                    objects[GeneralizedIndex((k | 1) ^ 1)] +
                    objects[GeneralizedIndex(k | 1)]
                )
                keys.append(GeneralizedIndex(k // 2))
            pos += 1
        return objects[GeneralizedIndex(1)]
    ```
    </details>  
<br/>

- #### verify_merkle_multiproof
    <details><summary>See Pseudocode</summary><br>

    ```python
    def verify_merkle_multiproof(leaves: Sequence[Bytes32],
                                proof: Sequence[Bytes32],
                                indices: Sequence[GeneralizedIndex],
                                root: Root) -> bool:
        return calculate_multi_merkle_root(leaves, proof, indices) == root
    ```
    </details>  
<br/>
</div>
<div align='center'>

Note that the single-item proof is a special case of a multi-item proof; a valid single-item proof verifies correctly when put into the multi-item verification function (making the natural trivial changes to input arguments, index -> [index] and leaf -> [leaf]). 

Note also that calculate_merkle_root and calculate_multi_merkle_root can be used independently to compute the new Merkle root of a proof with leaves updated.

