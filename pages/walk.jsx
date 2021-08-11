import FullOverview from "../components/FullOverview";
import fs from "fs";
export async function getStaticProps() {
  const markdowns = Object.keys(topics).map((topic, idx) => {
    const data = fs.readFileSync(`./walk/${topic}.md`, "utf8");
    return { data: data, topic: topic };
  });

  return {
    props: {
      markdowns,
    },
  };
}

const topics = {
  // Introduction: "inro",
  Typing: "typo",
  Aliases: "Alio",
  Serialize_Deserialize: "serio",
  Merkleization: "merklo",
  Merkle_Proofs: "merklo proofo",
  Summaries_and_Expansions: "Summaro"

};

export default function walk({ markdowns }) {
  return (
    <div className="container">
      <FullOverview text={markdowns} />
    </div>
  );
}
