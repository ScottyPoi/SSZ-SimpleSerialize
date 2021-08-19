import BooleanDemo from "./BooleanDemo";
import BuildTree from "../../simulator/trees/BuildTree";
import BuildContainerTree from "../../simulator/trees/BuildVectorTree";
import { useState } from "react";
import { useEffect } from "react";
import DemoListControls from "../../simulator/controls/DemoListControls";
import WalkVectorControls from "../../simulator/controls/WalkVectorControls";
import DemoVectorControls from "../../simulator/controls/DemoVectorControls";
import UintBox from "./UintBox";
import WalkListControls from "../../simulator/controls/WalkListControls";
import WalkContainerControls from "../../simulator/controls/WalkContainerControls";

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

const simpleText = `
All simple types (boolean / uintN) undergo simple byte conversion.  
A merkle tree leaf with one simple value is padded with zero bits to create a 32 Byte value.  
Below, the green bits represent the stored value, and the red zeros are the padding.
Change the byte size to demonstrate how each UintN size becomes a 32 Byte root.

`;

const vectorText = `
Vector types are fixed-length lists.  
Elements are packed tightly into 32 Byte leaves, with an additional '1' bit added after the last value.  
This way, the length of the vector becomes part of the object itself.  
If the total number of values PLUS THE LENGTH BIT does not evenly divide into 32 byte chunks, the last leaf is padded with zeros, after the length bit.  
If the total number of chunks does not equal a power of two, additional empty leaves fill the merkle tree.
Change the type and length parameters below to visualize how vectors are "chunked" into 32 Byte leaves.


`;
const listText = `
List are like vectors, but the FIXED_LENGTH is more like a LIMIT, and the actual length is VARIABLE.
The LIMIT is a number of full chunks.
The values and "1" bit representing the VARIABLE_LENGTH serialize like a vector.
The final hash_tree_root of a List is the hash_tree_root of a merkle tree whose leaves are the hash_tree_root of the values, and a leaf storing a Uint256 of the fixed-length LIMIT.
The fixed-length LIMIT is stored as an additional leaf.
Below: Change the TYPE, LIMIT, and LENGTH parameters to visualize how lists are "chunked" into 32 Byte leaves.
`;
const containerText = `
  Container types will have a Merkle Tree leaf for each field, some of which may be the 'Root' of a nested Merkle Tree.  
  If the number of fields does not equal a power-of-two, the merkle tree is padded with zero nodes to achieve a perfect binary tree.
  Below, change the number of fields to visualize how container fields fill the leaves of a merkle-tree.
  

  
`;

const compositeText =  `
Simple Types combine into Vectors, Lists, and Containers.  These types are serialized by serializing the simple objects inside, then packing
those serialized bits into 32 Byte "chunks".
`
export default function SerializationVisual(props) {
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

  const simpleTree = () => {
    return (
      <div className="row">
        <div className="col-6">
          <div className="row">
            <BooleanDemo />
          </div>
          <div className="row">
            <p className="text-center">Boolean</p>{" "}
          </div>
        </div>
        <div className="col-6">
          <UintBox />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="row">
        <h3 className="text-center">Serialization</h3>
        <h6 className="text-center fst-italic">
          the process of translating a data structure or object into a string of
          bytes
        </h6>
      </div>
      <div className="row pt-3">
        <h4 className="text-center">Simple Types</h4>
        <h5 className="text-center">{simpleText}</h5>
      </div>
      <div className="row border-bottom py-4">{simpleTree()}</div>
      <div className="row pt-3 text-center">
        <h4 className="text-center">COMPOSITE TYPES</h4>
      </div>
      <div className="row">
        <h5 className="text-center">{compositeText}</h5>
      </div>
      <div className="row pt-3 text-center">
        <h4 className="text-center">VECTORS</h4>
      </div>
      <div className="row">
        <h5 className="text-center">{vectorText}</h5>
      </div>
      <div className="row py-4 border-bottom">
        <WalkVectorControls />
      </div>
      <div className="row pt-3 text-center">
        <h4 className="text-center">LISTS</h4>
      </div>
      <div className="row py-4 text-center">
        <h5>{listText}</h5>
      </div>
      <div className="border-bottom row py-4">
        <WalkListControls />
      </div>
      <div className="row pt-3 text-center">
        <h4 className="text-center">CONTAINERS</h4>
      </div>
      <div className="row py-4 text-center">
        <h5>{containerText}</h5>
      </div>
      <div className="border-bottom row py-4">
        <WalkContainerControls />
      </div>
    </div>
  );
}
