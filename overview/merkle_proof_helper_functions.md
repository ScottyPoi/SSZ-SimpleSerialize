---
title: hash_tree_root helper functions
toc: [get_power_of_two_ceil, get_power_of_two_floor]
---

<div align='center' id='helper%20functions'>

# hash_tree_root helper functions

</div>
<div align='start' id='get_power_of_two_ceil'>

## Helper functions


### `get_power_of_two_ceil(x: int) -> int:`

Get the power of 2 for given input, or the closest higher power of 2 if the input is not a power of 2.
Commonly used for "how many nodes do I need for a bottom tree layer fitting x elements?"   

Example: 0->1, 1->1, 2->2, 3->4, 4->4, 5->8, 6->8, 7->8, 8->8, 9->16.  


```
if x <= 1:
    return 1
elif x == 2:
    return 2
else:
    return 2 * get_power_of_two_ceil((x + 1) // 2)
```

</div>
<div id='get_power_of_two_floor'>

### `get_power_of_two_floor(x: int) -> int:`

Get the power of 2 for given input, or the closest lower power of 2 if the input is not a power of 2.
The zero case is a placeholder and not used for math with generalized indices.
Commonly used for "what power of two makes up the root bit of the generalized index?"

Example: 0->1, 1->1, 2->2, 3->2, 4->4, 5->4, 6->4, 7->4, 8->8, 9->8

```
if x <= 1:
    return 1
if x == 2:
    return x
else:
    return 2 * get_power_of_two_floor(x // 2)
```