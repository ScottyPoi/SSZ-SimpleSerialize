
def verify_branch(root, index, proof, output_as_int=False):
# index = get_index_in_permuted(index, 2**len(proof) // 2)
index += 2**len(proof)
v = proof[0]
for p in proof[1:]:
    if index % 2:
        v = blake(p + v)
    else:
        v = blake(v + p)
    index //= 2
assert v == root
return int.from_bytes(proof[0], 'big') if output_as_int else proof[0]

# Make a compressed proof for multiple indices
def mk_multi_branch(tree, indices):
# Branches we are outputting
output = []
# Elements in the tree we can get from the branches themselves
calculable_indices = {}
for i in indices:
    new_branch = mk_branch(tree, i)
    index = len(tree) // 2 + i
    calculable_indices[index] = True
    for j in range(1, len(new_branch)):
        calculable_indices[index ^ 1] = True
        index //= 2
    output.append(new_branch)
# Fill in the calculable list: if we can get or calculate both children, we can calculate the parent
complete = False
while not complete:
    complete = True
    keys = sorted([x//2 for x in calculable_indices])[::-1]
    for k in keys:
        if k*2 in calculable_indices and (k*2)+1 in calculable_indices and k not in calculable_indices:
            calculable_indices[k] = True
            complete = False
# If for any branch node both children are calculable, or the node overlaps with a leaf, or the node
# overlaps with a previously calculated one, elide it
scanned = {}
for i, b in zip(indices, output):
    index = len(tree) // 2 + i
    scanned[index] = True
    for j in range(1, len(b)):
        if ((index^1)*2 in calculable_indices and (index^1)*2+1 in calculable_indices) or ((index^1)-len(tree)//2 in indices) or (index^1) in scanned:
            b[j] = b''
        scanned[index^1] = True
        index //= 2
return output