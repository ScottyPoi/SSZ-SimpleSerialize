import { CodeBlock, dracula } from "react-code-blocks";
import { exampleDataList, exampleSchemaList } from "../../data/examples";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Image } from "react-bootstrap";

const AttestationDataExampleSchema = `AttestationData = {
    slot: Slot;
    index: CommitteeIndex;
    beaconBlockRoot: Root;
    source: Checkpoint;
    target: Checkpoint;
  }
  `;

const AttestationDataExample = `slot: '7'
index: '6'
beaconBlockRoot: '0x9043b5ffe225060827652970bad309c5dcef51f5f59ed6b80d785873e28252e1'
source:
  epoch: '7'
  root: '0xad6c15c9c0f7a6dab09bcd532e3a10c3994d11542bcc35b8fcb6e41c98001a96'
target:
  epoch: '6'
  root: '0x7e19692e30add2c89c29b95dd280717754f8aa308055d25d6e575adb7153a307'
`;

export default function AliasesVisual(props) {
  const [exampleIdx, setExampleIdx] = useState(2);

  const exampleSchema = exampleSchemaList[exampleIdx];
  const exampleData = exampleDataList[exampleIdx];

  return (
    <div className="container">
      <div className="row">
        {/* <h4 className='text-center'>Nested Aliases simplify complex data structures</h4> */}
      </div>
      <div className="row pt-4">
        <ReactMarkdown>{props.text}</ReactMarkdown>
      </div>
      <div className="row border border-3">
        <div className="col-6 border">
          <CodeBlock
            text={exampleSchema}
            language="yaml"
            showLineNumbers={false}
          />
          <h5>
            - The DepositEvent type is an alias for a Container with 3 fields. 
            <br/>- blockNumber and index are both aliases for simple types. 
            <br/>- They each occupy one RED leaf of the tree.
            <br/>- The RED leaf for depositData contains the hash_tree_root of a depositData type, which is an alias for a Container with 4 fields.
            <br/>- pubkey, withdrawalCredentials, amount, and signature are aliases for both simple and complex types.
            <br/>- Aliases can be endlessly nested in this way to maintain consistency and improve readibility.
          </h5>
        </div>
        <div className="col-6 border">
          <CodeBlock
            text={exampleData}
            language="yaml"
            showLineNumbers={false}
          />{" "}
        </div>
      </div>
      <div className="row">
        <h3 className='text-center'>Deposit Event Merkle Tree</h3>
        <img className='img-fluid' src="./depositevent.png" alt="deposit event tree" />
      </div>
    </div>
  );
}
