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
    <div className="container">
      <div className="row">
        <ul className="nav nav-tabs">
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
        <div className="row pt-4">
          <div className="col-6">
            <OverviewSection prop="fee" topic={section} idx={1} text={text} />
          </div>
          <div className="col-6">
            <OverviewVisual topic={section} />
          </div>
        </div>
      </div>
    </div>
  );
}
