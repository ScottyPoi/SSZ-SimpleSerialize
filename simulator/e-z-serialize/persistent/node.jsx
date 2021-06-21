import {hash} from "./hash";
import { ProofTypeSerialized } from "./proof";

const ERR_INVALID_TREE = "Invalid tree";
const ERR_NOT_IMPLEMENTED = "Not implemented";

export default function Node(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

