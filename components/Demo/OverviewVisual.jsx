import TypingVisual from "./TypingVisual";
import AliasesVisual from "./AliasesVisual";
import DefaultValuesVisual from "./DefaultValuesVisual";
import SerializationVisual from "./SerializationVisual";
import DeserializationVisual from "./DeserializationVisual";
import MerkleizationVisual from "./MerkleizationVisual";
import MerkleProofsVisual from "./MerkleProofsVisual";
import SummariesExpansionsVisual from "./SummariesExpansionsVisual";

export default function OverviewVisual(props) {
  const section =
    props.topic == "Typing" ? (
      <TypingVisual />
    ) : props.topic == "Aliases" ? (
      <AliasesVisual text={props.text} />
    ) : props.topic == "Default_Values" ? (
      <DefaultValuesVisual />
    ) : props.topic == "Serialize_Deserialize" ? (
      <SerializationVisual />
    ) : props.topic == "Merkleization" ? (
      <MerkleizationVisual text={props.text}/>
    ) : props.topic == "Merkle_Proofs" ? (
      <MerkleProofsVisual />
    ) : props.topic == "Summaries_and_Expansions" ? (
      <SummariesExpansionsVisual />
    ) : (
        <TypingVisual />
    );

  return section;
}
