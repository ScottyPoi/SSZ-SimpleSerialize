## Merkle proofs


Merkle proofs enable users to efficiently prove specific details of some data-structure that is known by a given hash.

The efficiency is achieved with a tree structure of hashes, with the data in the leaves of the tree.
For a proof of a set of leaves, branches to other leaves do not have to be fully encoded or hashed,
the starts of each such branch, together with the values to proof, are sufficient to reconstruct the root of the tree.
Compare the reconstructed root with the trusted root the data is known by, and the proof is complete.

### Accumulator

Merkle trees are a type of cryptographic accumulator, and a root is a binding vector commitment to a set of contents.
I.e. the position of the contents is also committed, not just inclusion. Changing the position of any of the contents would change the Merkle root.

Membership of a leaf value, at a specific position, can be proven with witness data:
a set of hashes along the way to the root of the tree, taking `O(log(N))` space and computation for a proof, as opposed to `N` for providing the full data.

## Binary Merkle Tree

The tree structure itself affects the amount of nodes, and thus the amount of hash operations, and size of the proof.

One of the few opinionated choices made by SSZ for Eth2 is the choice for a **Binary Merkle Tree**, as oposed to Merkle Patricia Trees used in Eth1.

Binary trees provide simplicity and efficiency:

- No irregular branch structures
- Any data structure can be translated to a binary tree with minimal effort.
- Less proof witness data in favor of a few more hash operations
- High affinity with bitfields for navigation and description
- Enable a wide range of other binary-tree specific optimizations

## Verification

Claims for leaves of data can be verified by reconstructing the root from these leaves with the help of witness data:
sibling nodes of the branches leading back to the root.

### Multi-proof

A multi-proof is no different than a regular proof other than proving multiple leaf values at the same time.
Notice that leaf nodes that share the same subtrees also share more witness nodes, and are thus proven together more efficiently.
Sharing of witnesses in general is also more efficient than not sharing, as with individual leaf proofs.

## Proof backings

A "backing" is the concept of a specialized binary tree representation that implements the Merkle proof interface,
and optionally offer additional functionality like proof data lookups or modifications.

For an implementation, several choices can be made:

- Ordering of leaf nodes and witness data
- Ordering of operations to reconstruct the root, in case of multi-proofs.
- Inclusion of a description of the proof target leaves, or the complete proof structure.
- Optimizations for fast reading, verification or modifications to the proof.

SSZ is agnostic to this: Merkle proofs are an interface to these backings, not an enshrined choice for one approach.