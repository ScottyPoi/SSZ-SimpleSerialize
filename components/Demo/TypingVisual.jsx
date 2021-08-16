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
  
a.defaultValue = false  
b.defaultValue = 0  
c.defaultValue = 0  
d.defaultValue = 0000  
`;

const text = `
## Types

Data for SSZ Serialization are represented by one or a combination of these **Types:**

- ###### Basic Types: 
  - ###### **Unisigned Integer** -  \`Uint8, Uint16, Uint32, Uint64, Uint128, Uint256\`
  - ###### **Boolean** - \`Bit, 0 or 1, True or False\`
- ###### Composite Types
  - ###### **Vector**    - \`"Fixed Length" sequence of elements of same **Type** (homogeneous)\`
  - ###### **List**    - \`"Variable Length" sequence of elements of the same **Type** (homogenous)\`
  - ###### **Container**    - \`Heterogeneous ordered collection of elements\`
  - ###### **Union**    - \`A "Union Type" containing SSZ Types\`
  - ###### **Root**    - \`A Uint256 that represents the \`Bytes32 hash_tree_root\` of a nested merkle tree\`


##### Default values

All SSZ Types have a default "zeroed" value

- Uint: 0
- Boolean: False
- Vector: Sequence of default values
- List: Empty List 
- Container: Default value for each type in container
- Union: Default value of "Type_0"
  
Default values are *recursive*; elements in composite types such as containers are initialized with their respective default initializations

#### is_zero

An SSZ object is called zeroed (and thus, is_zero(object) returns true) if it is equal to the default value for that type.

### Illegal types

- Empty vector types (Vector[type, 0], Bitvector[0]) are illegal.
- Containers with no fields are illegal.
- The \`null\` type is only legal as the first type in a union subtype (i.e. with type index zero).
`

export default function TypingVisual(props) {
  const [type, setType] = useState("boolean");
  const [tree, setTree] = useState(<BuildTree NUMBER_OF_VALUES={1} />);




  return (
    <div>
      <div className="row py-4"><ReactMarkdown>{text}</ReactMarkdown></div>
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
