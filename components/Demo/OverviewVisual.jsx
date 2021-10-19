import TypingVisual from "./TypingVisual";
import AliasesVisual from "./AliasesVisual";
import DefaultValuesVisual from "./DefaultValuesVisual";
import SerializationVisual from "./SerializationVisual";
import DeserializationVisual from "./DeserializationVisual";
import MerkleizationVisual from "./MerkleizationVisual";
import MerkleProofsVisual from "./MerkleProofsVisual";
import SummariesExpansionsVisual from "./SummariesExpansionsVisual";
import HelperFunctions from "./HelperFunctions";
import OverVisual from "./overVisual";
export default function OverviewVisual(props) {
  const section =(

<div className='row mt=4'>

{    props.topic == "Typing" ? (
      <TypingVisual />
      ) : props.topic == "Overview" ? (
        <OverVisual text={props.text} />
      ) : props.topic == "Aliases" ? (
        <AliasesVisual text={props.text} />
    ) : props.topic == "Serialization" ? (
      <SerializationVisual />
    ) : props.topic == "Merkle_Trees" ? (
      <MerkleizationVisual text={props.text} />
    ) : props.topic == "Merkle_Proofs" ? (
      <MerkleProofsVisual text={props.text} />
    ) : props.topic == "Helper_Functions" ? (
      <HelperFunctions text={props.text} />
    ) : (
      <TypingVisual />
    )}
</div>
    
    )

  return section;
}
