import BooleanDemo from "./BooleanDemo";
import { CodeBlock, dracula } from "react-code-blocks";
import BuildTree from "../../simulator/trees/BuildTree";
import BuildDemoVectorTree from "../../simulator/trees/BuildDemoVectorTree";
import BuildListTree from "../../simulator/trees/BuildVectorTree";
import BuildContainerTree from "../../simulator/trees/BuildVectorTree";
import BuildHashTree from "../../simulator/trees/BuildHashTree";
import { useState } from "react";
import { useEffect } from "react";
import DemoListControls from "../../simulator/controls/DemoListControls";
import ReactMarkdown from "react-markdown";
import DemoVectorControls from "../../simulator/controls/DemoVectorControls";
import UintBox from "./UintBox";

const defaultText = `
var a: Type<boolean>  
var b: Type<uint8>  
var c: Type<uint16>  
var d: Type<Vector<byte, 4>>  
  
a.defaultValue() = false  
a.defaultValue() = 0  
a.defaultValue() = 0  
a.defaultValue() = 0000  
`;

const simpleText = `All simple types (boolean / uintN) undergo simple byte conversion, resulting in a single leaf Merkle Tree`;

const vectorText =
  "Vector types are fixed-length lists.  Elements are packed into 32 Byte leaves, and are padded with zeros to fill a power-of-two number of Merkle Tree Leaves";
const listText =
  "List types have variable-length and a 'Limit'.  Empty chunks pad the leaves of the Merkle Tree to a power-of-two.  The hash_tree_root of the List data is merkleized with a Uint256 storing the Limit";
const containerText = `
  Container types will have a Merkle Tree leaf for each field, some of which may be the 'Root' of a nested Merkle Tree.  
  
  The number of leaves on the Merkle Tree is the next power_of_two above the number of fields.  
  
  Empty leaves are 'zero_nodes'.   
  
  Below: A Container type with 5 fields makes an 8 leaf Merkle Tree.  
`;
export default function TypingVisual(props) {
  const [type, setType] = useState("boolean");
  const [tree, setTree] = useState(<BuildTree NUMBER_OF_VALUES={1} />);
  const [text, setText] = useState(simpleText);
  useEffect(() => {
    type == "boolean"
      ? setTree(
          <div className="row">
            <div className="col-6">
              <div className="row">
                <BooleanDemo />
              </div>
              <div className="row">
                <h4 className="text-center">var{`<boolean>`} = TRUE</h4>
              </div>
            </div>
            <div className="col-6">
              <UintBox />
            </div>
          </div>
        )
      : type == "vector"
      ? setTree(<DemoVectorControls NUMBER_OF_VALUES={3} />)
      : type == "list"
      ? setTree(<DemoListControls />)
      : type == "container"
      ? setTree(<BuildContainerTree NUMBER_OF_VALUES={5} />)
      : setTree(<div>Hello</div>);
  }, [type]);

  useEffect(() => {
    type == "boolean"
      ? setText(simpleText)
      : type == "vector"
      ? setText(vectorText)
      : type == "list"
      ? setText(listText)
      : type == "container"
      ? setText(containerText)
      : setText(simpleText);
  }, [type]);



  return (
    <div>
      <div className="row">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className="nav-link active"
              aria-current="page"
              onClick={() => setType("boolean")}
            >
              Simple
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link active"
              aria-current="page"
              onClick={() => setType("vector")}
            >
              Vector{" "}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link active"
              aria-current="page"
              onClick={() => setType("list")}
            >
              List{" "}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link active"
              aria-current="page"
              onClick={() => setType("container")}
            >
              Container{" "}
            </button>
          </li>
        </ul>
      </div>
      <div className="row pt-4">
        <ReactMarkdown>
          ` Every type deterministically describes the shape of the **Merkle
          Tree** representing the type - No two different values _of the same
          type_ can merkleize to the same root - No two roots can be derived for
          the same value _of the type used for the root_.`
        </ReactMarkdown>
      </div>
      <div className="row">
        <h3 className="text-center">
          <ReactMarkdown>{text}</ReactMarkdown>
        </h3>
      </div>
      <div className="row py-4">{tree}</div>
      <div className="row py-4 border-top">
        <h4>Default Values E.g.</h4>
        <CodeBlock
          text={defaultText}
          language="typescript"
          showLineNumbers={false}
        />
      </div>
    </div>
  );
}
