import { CopyBlock, monoBlue } from "react-code-blocks";
import * as ssz from "@chainsafe/ssz";
export default function ShowFunction(props) {

    const func = props.func

  return (
    <div className="container">
      <CopyBlock
        language={"typescript"}
        text={ssz[func].toString()}
        showLineNumbers={false}
        theme={monoBlue}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
