import { CopyBlock, monoBlue } from "react-code-blocks";
export default function ShowFunction(props) {

  const ssz = props.mod
  const proof: Boolean = props.proof
  const proofText = props.proofText;

    const func = props.func

  return proof ? 
  
    <div className="d-flex-box border overflow-auto"
    style={{height: '50%'}}>
      <CopyBlock
        language={"typescript"}
        text={proofText}
        showLineNumbers={false}
        theme={monoBlue}
        wrapLines={true}
        codeBlock
      />
      {props.lodesReturns}
    </div>
   : (
    <div className="d-flex-box border overflow-auto"
    style={{height: '50%'}}>
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
