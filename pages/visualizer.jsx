import Controls from "../simulator/controls/Controls";

export default function Visualizer(props) {
  return (
    <div className="container" style={{ outline: "solid white" }}>
      {" "}
      <div
        className="d-flex flex-row justify-content-center"
        style={{ outline: "solid white" }}
      >
        <div className="d-flex flex-col p-1">
          <h2
            style={{
              outline: "solid #42426e",
              border: "solid white",
              padding: "5px",
            }}
          >
            {" "}
            SSZ VISUALIZER{" "}
          </h2>
        </div>
      </div>
      <div
        className="container"
        style={{
          backgroundColor: "darkgray",
          color: "black",
          outline: "solid white",
        }}
      >
        <div className="row">
          <Controls />
        </div>
      </div>
    </div>
  );
}
