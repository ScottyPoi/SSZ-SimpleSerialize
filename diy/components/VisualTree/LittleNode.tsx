import { CompositeType, toHexString } from "@chainsafe/ssz";

interface LittleNodeProps {
    treeType: CompositeType<any>
    deserialized: any
    idx: number | bigint
}

export default function LittleNode(props: LittleNodeProps) {
    const index = typeof props.idx === 'number' ? BigInt(props.idx) : props.idx
    const tree = props.treeType.struct_convertToTree(props.deserialized);
    const root = tree.getRoot(index)
    const leavesIdx = props.treeType.tree_getLeafGindices(tree)
    const propNames = props.treeType.tree_getPropertyNames(tree)
    const proof = tree.getSingleProof(leavesIdx[0])
    
    return (
        <div className="container">
            <div className="row">{
                index
            }</div>
            <div className="row">{
proof.map((p) => {
    return (
        <div className="col">
            {toHexString(p)}
            </div>
    )
})
            }</div>
            <div className="row">{
toHexString(root)
            }</div>
            <div className="row">{
leavesIdx.toString()
            }</div>
            <div className="row">{
propNames.toString()
            }</div>
        </div>
    )
}