import { CopyBlock, monoBlue } from "react-code-blocks";
export default function ShowFunction(props) {

  const ssz = props.mod

    const func = props.func

  return (
    <div className="container">
      <CopyBlock
        language={"typescript"}
        text={ssz[func] != "[object Object]" ? ssz[func] : `const ${func} = { \n  ${Object.values(ssz[func]).toString()} \n}`}
        showLineNumbers={false}
        theme={monoBlue}
        wrapLines={true}
        codeBlock
      />
      {props.lodesReturns}
    </div>
  );
}
