import { CopyBlock, monoBlue } from "react-code-blocks";
import * as ssz from "@chainsafe/ssz";
export default function ShowFunction(props) {

    const func = props.func

  return (
    <div className="container">
      <CopyBlock
        language={"typescript"}
        text={ssz[func] != "[object Object]" ? ssz[func] : `const TreeProxyHandler: ProxyHandler<TreeValue<CompositeValue>> = { \n  ${Object.values(ssz[func]).toString()} \n}`}
        showLineNumbers={false}
        theme={monoBlue}
        wrapLines={true}
        codeBlock
      />
    </div>
  );
}
