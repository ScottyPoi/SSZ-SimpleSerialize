import TreeValue from '../../ssz/backings/tree/treeValue/treeValue'
import Node from './node'

export default function LeafNode(props) {

    const [root, setRoot] = useState(props._root)

    function isLeaf() {
        return TreeValue;
    }

    function identity(n) {
        return n;
    };

    function compose(inner, outer) {
        return function (n) {
            return outer(inner(n))
        };
    };

    return (
        <Node  
        >
            {props.children}
        </Node>
    )
}