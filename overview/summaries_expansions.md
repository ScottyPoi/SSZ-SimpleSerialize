---
title: Summaries & Expansions
section: Navigation
toc: []
---

## Summaries & Expansions

Let `A` be an object derived from another object `B` by replacing some of the (possibly nested) values of `B` by their `hash_tree_root`.
Because of this substitution, `hash_tree_root(A) == hash_tree_root(B)`.

We say `A` is a **"summary"** of `B`, and that `B` is an **"expansion"** of `A`. The replaced values are the **"details"** of `B` with respect to `A`.

Summary instances expand to at most one instance of a given expansion:
the detail of the summary is a strict subset of that of the expansion and the difference cannot be altered without changing the summary root.


#### As types

A summary `type` can be defined by taking the expansion and substituting the types of the elements to summarize with `Bytes32` to reflect their `hash_tree_root`.
Or vice versa an expansion can be defined based on a summary type.


