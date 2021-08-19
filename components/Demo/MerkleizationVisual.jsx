import ReactMarkdown from "react-markdown";
import BuildVectorTree from "../../simulator/trees/BuildDemoVectorTree";
import BuildWalkTree from "../../simulator/trees/BuildWalkTree";
import BuildDemoTree from "../../simulator/trees/BuildDemoTree";
import BuildMerkleTree from "../../simulator/trees/BuildMerkleTree";
import BuildMultiMerkle from "../../simulator/trees/BuildMultiMerkle";
import BuildDeepTree from "../../simulator/trees/BuildDeepTree";
import BuildHashTree from "../../simulator/trees/BuildHashTree";
import TreeTypes from "./TreeTypes";
import MerkleBuildDeepTree from "../../simulator/trees/MerkleBuildDeepTree";

const examples = `
### Examples

The numbers used in below examples are [generalized indices](../navigation/generalized_indices.md), not values.
Note that the ordering of witness data is an encoding choice, defined by the [proof backing](#proof-backings).

#### Classic single-leaf inclusion proofs

\`\`\`
                      1
          2                       3\'
    4\'          5           6           7
  8    9     10\'  11*    12   13     14   15
\`\`\`

Leaf: \`11\`
Witness data: \`10, 4, 3\`
Proof: \`H(H(4, H(10,11)), 3) == 1\`

#### Multiples leaves

Also called "multi-proofs".

\`\`\`
                      1
          2                       3
    4\'          5           6           7\'
  8    9     10*  11*    12\'  13*    14   15
\`\`\`

Leaves: \`10,11,13\`
Witness data: \`4, 12, 7\`
Proof: \`H(H(4, H(10,11)), H(H(12,13), 7)) == 1\`

#### Unbalanced trees

\`\`\`
              1
       2              3
    4    5\'        6       7\'
  8\' 9*        12     13\'
            24\'   25
                50  51
           100\'101* 102*103*
\`\`\`

Leaves: \`9,101,102,103\`
Witness data: \`8,524,100,13,7\`
Proof: \`H(H(H(8,9), 5), H(H( H(24, H(H(100,101), H(102, 103))), 13), 7)) == 1\`

`;

export default function MerkleizationVisual(props) {
  return (
    <div className="row">
      <div className="col-6 border-end">
        <div className="row">
          <BuildWalkTree NUMBER_OF_VALUES={4} />
        </div>
        <div className="row">
          <ReactMarkdown>{props.text}</ReactMarkdown>
        </div>
        <div className="row">
          <MerkleBuildDeepTree NUMBER_OF_VALUES={8} />
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <TreeTypes />
        </div>
      </div>
    </div>
  );
}
