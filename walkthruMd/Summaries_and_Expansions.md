## Summaries and expansions

Let `A` be an object derived from another object `B` by replacing some of the (possibly nested) values of `B` by their `hash_tree_root`. We say `A` is a "summary" of `B`, and that `B` is an "expansion" of `A`. Notice `hash_tree_root(A) == hash_tree_root(B)`.

We similarly define "summary types" and "expansion types". For example, [`BeaconBlock`](../specs/phase0/beacon-chain.md#beaconblock) is an expansion type of [`BeaconBlockHeader`](../specs/phase0/beacon-chain.md#beaconblockheader). Notice that objects expand to at most one object of a given expansion type. For example, `BeaconBlockHeader` objects uniquely expand to `BeaconBlock` objects.