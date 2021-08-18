import { CodeBlock, dracula } from "react-code-blocks";
import { exampleDataList, exampleSchemaList } from "../../data/examples";
import { useState } from 'react'
import ReactMarkdown from "react-markdown";


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
`

export default function AliasesVisual(props) {

  const [exampleIdx, setExampleIdx] = useState(2)

  const exampleSchema = exampleSchemaList[exampleIdx]
  const exampleData = exampleDataList[exampleIdx]

  return (
    <div className="container">
        <div className='row'>

            {/* <h4 className='text-center'>Nested Aliases simplify complex data structures</h4> */}
        </div>
      <div className='row pt-4'>
<ReactMarkdown>{props.text}</ReactMarkdown>
    </div>
      <div className="row border border-3">
        <div className="col-6 border">
          <CodeBlock
            text={exampleSchema}
            language="yaml"
            showLineNumbers={false}
          />
          <h4>The DepositEvent object contains 3 fields.  blockNumber and index are both simple objects.  depositData is the ROOT of a merkleized depositData object.</h4>

        </div>
        <div className="col-6 border">
         <CodeBlock text={exampleData} language="yaml" showLineNumbers={false} />{" "}
        </div>
      </div>
    </div>
  );
}
