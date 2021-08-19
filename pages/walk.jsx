import FullOverview from "../components/Demo/FullOverview";
import fs from "fs";
export async function getStaticProps() {
  const markdowns = Object.keys(topics).map((topic, idx) => {
    const data = fs.readFileSync(`./walkthruMd/${topic}.md`, "utf8");
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
  Serialization: "serio",
  Merkle_Trees: "merklo",
  Merkle_Proofs: "proofo",
  Helper_Functions: "helpo"

};

export default function walk({ markdowns }) {
  return (
    <div className="container">
      <FullOverview text={markdowns} />
    </div>
  );
}
