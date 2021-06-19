import Node from './node'

export default function BranchNode(props) {

    const [_root, set_root] = useState(null)
    const [_left, set_left] = useState(props._left);;
    const [_right, set_right] = useState(props._right)


    if (!props._left || !props._right) throw new Error(ERR_INVALID_TREE)

    function root() {
        if (!_root) {
          set_root(hash(left.root, right.root));
        }
        return _root;
      }
    
      function isLeaf() {
        return false;
      }
    
      function getLeft() {
        return left;
      }

      function getRight() {
        return right;
      }

    
      function rebindLeft(left) {
        return <BranchNode _left={left}
         _right={_right} />
      }
    
      function rebindRight(right) {
        return <BranchNode _left={_left} _right={right} />
      }

    return (
        <Node
        >
            {props.children}
        </Node>
    )
}