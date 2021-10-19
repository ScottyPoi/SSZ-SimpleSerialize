import { useState } from "react";
import OverviewSection from "./OverviewSection";
import OverviewVisual from "./OverviewVisual";
import OverVisual from "./overVisual";

const topics = [
"Overview",
  "Typing",
  "Serialize_Deserialize",
  "Deserialization",
  "Merkleization",
  "Merkle_Proofs",
];

export default function FullOverview(props) {
  const [section, setSection] = useState("Overview");
  const [text, setText] = useState(props.text[0].data);

  const texts = props.text

function menu() {
    return props.text.map((text, idx) => {
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
          })
  }

  return (
    <div className="container position-relative">
      <div className="row position-fixed mt-5 fixed-top">
        <div className='col'>
        <ul className="nav bg-light nav-tabs">
          {menu()}
        <li>
<h2>OVERVIEW</h2>
        </li>
        <li>
<p>
This overview is an explanation and visualization of the Simple-Serialize Merkle-Proof specs.
Most of the visualizations are interactive.</p>
        </li>
        </ul>

        </div>
        
      </div>

      <div className="row mt-4">

      </div>
      <div className="row mt-4">
        <div className="col mt-4 pt-4">
          <OverviewVisual topic={section} text={text} />
        </div>
      </div>
    </div>
  );
}
