import { useState } from "react";
import OverviewSection from "./OverviewSection";
import OverviewVisual from "./OverviewVisual";

const topics = [
  "Introduction",
  "Typing",
  "Serialize_Deserialize",
  "Deserialization",
  "Merkleization",
  "Merkle_Proofs",
];

export default function FullOverview(props) {
  const [section, setSection] = useState("Typing");
  const [text, setText] = useState(props.text[0].data);

  return (
    <div className="container position-relative">
      <div className="row position-fixed mt-5 fixed-top">
        <ul className="nav bg-light nav-tabs">
          {props.text.map((text, idx) => {
            return (
              <li className={`nav-item `} key={idx}>
                <button
                  className={`nav-link ${text.topic == section && "active"}`}
                  onClick={() => setSection(text.topic)}
                  onMouseUp={() => setText(text.data)}
                >
                  {text.topic}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="row mt-4">
        <div className="col">
          <OverviewVisual topic={section} text={text} />
        </div>
      </div>
    </div>
  );
}
