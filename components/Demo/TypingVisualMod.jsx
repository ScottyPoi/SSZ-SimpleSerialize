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
import gfm from "remark-gfm";

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


const types = {
  Basic: {
    Unsigned_Integer: {
      notation: "Uint[N]",
      Definition: "Unsigned Integer of N Bytes.",
      Default_Value: "0",
      Illegal_Types: "",
    },
    Boolean: {
      notation: "boolean",
      Definition: "True or False, 0 or 1, etc.",
      Default_Value: "False",
      Illegal_Types: "",
    },
  },
  Composite: {
    Vector: {
      notation: "Vector[type, N]",
      Definition: "Fixed Length sequence of elements of same type.  Homogeneous collection of length N",
      Default_Value: "[default(type)] * N  -- A vector of default values of length N",
      Illegal_Types: "Empty Vectors -- Vector[type, 0]",
    },
    List: {
      notation: "List[type, N]",
      Definition: "Variable Length sequence of elements of same type.  Homogenous collection limited to N values",
      Default_Value: "Empty List: [ ]",
      Illegal_Types: "",
    },
    Container: {
      notation: "Container[var_a: type, var_b: type, ...]",
      Definition: "Heterogeneous collection of key-type pairs.",
      Default_Value: "default(type) for type in container. -- All fields zeroed to default values",
      Illegal_Types: "Container with no fields",
    },
    Union: {
      notation: "Union[type_0, type_1, ...]",
      Definition: "Union type containing SSZ types",
      Default_Value: "default(type_0).  the zeroed default value of type_0",
      Illegal_Types: "Union with null type at type_0. -- Union[null, ...]",
    },
  },
  Special: {
    BitVector: {
      notation: "BitVector[N]",
      Definition: "Vector of Boolean Values of length N.  Given special notation for efficiency",
      Default_Value: "False * N",
      Illegal_Types: "Empty BitVectors: BitVector[0]",
    },
    BitList: {
      notation: "BitList[N]",
      Definition: "List of Boolean Values with limit N.  Given special notation for efficiency.",
      Default_Value: "Empty List: [ ]",
      Illegal_Types: "",
    },
    Root: {
      notation: "hash_tree_root(type)",
      Definition: "The merkleized root of a composite SSZ type",
      Default_Value: "hash_tree_root(default(type))",
      Illegal_Types: "",
    },
  },
};

const variants = ["primray", "secondary", "success", "danger", "warning", "info", "light"]

export default function TypingVisualMod(props) {
  const [type, setType] = useState("boolean");
  const [tree, setTree] = useState(<BuildTree NUMBER_OF_VALUES={1} />);

  let acc = -1

  return (
    <div>
      <h2>Types</h2>
      <div className="row py-4">
        <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Notation</th>
                    <th scope="col">Definition</th>
                    <th scope="col">Default Value</th>
                    <th scope="col">Illegal Types</th>
                  </tr>
                </thead>
                <tbody>
        {Object.keys(types).map((category, idx_cat) => {
          return (
          <>
            <th scope="row">{category}</th>

          {Object.keys(types[category]).map((type) => {
            acc = (acc + 3) % 7;
            return (
          <>
              <tr className={`table-${variants[acc]} table-bordered`}>
              <td>{type}</td>
              <td>{types[category][type].notation}</td>
              <td>{types[category][type].Definition}</td>
              <td>{types[category][type].Default_Value}</td>
              <td>{types[category][type].Illegal_Types}</td>
            </tr>
            </>
            )
          })}
          </>
          )
        })}

          </tbody>
        </table>
      </div>
      {/* <div className="row py-4 border-top">
        <h4>Default Values E.g.</h4>
        <CodeBlock
          text={defaultText}
          language="typescript"
          showLineNumbers={false}
        />
      </div> */}
    </div>
  );
}
