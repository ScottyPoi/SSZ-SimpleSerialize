import OverviewSection from "./OverviewSection";
import OverviewVisual from "./OverviewVisual";

const topics = [
  "Introduction",
  "Typing",
  "Serialization",
  "Deserialization",
  "Merkleization",
  "Merkle_Proofs",
];

export default function FullOverview(props) {
  return (
    <div className="accordion" id="overviewAccordion">
      {props.text.map((text, idx) => {
        return (
          <div className="accordion-item">
            <h2 className="accordion-header" id={`${text.topic}heading`}>
              <button
                className="accordion-button collpsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${text.topic}`}
                aria-expanded="false"
                aria-controls={text.topic}
              >
                {text.topic}
              </button>
            </h2>
            <div
              id={text.topic}
              className={`accordion-collapse collapse ${
                text.topic == "Introduction" && "show"
              }`}
              // className={`accordion-collapse collapse show`}
              // aria-labeledby={`${text.topic}heading`}
              // data-bs-parent="#overviewAccordion"
            >
              <div className="accordion-body">
                <div className="row">
                  <div className="col">
                    <OverviewSection
                      prop="fee"
                      topic={text.topic}
                      idx={idx}
                      text={text.data}
                    />
                  </div>
                  <div className="col">
                    <OverviewVisual topic={text.topic} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
