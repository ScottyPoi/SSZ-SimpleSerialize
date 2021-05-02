import DisplayNode from "./DisplayNode";

export default function NodeInfo({ ...props }) {
  return (
    <div className="row">
      <div className="col">
        <DisplayNode type={"root"} nodevalue={"example"}>
          Root
        </DisplayNode>
        <DisplayNode type={"parent"} nodevalue={"example"} />
        <DisplayNode type={"hash"} nodevalue={"example"} />
        <DisplayNode type={"serial"} nodevalue={"example"} />
        <DisplayNode type={"value"} nodevalue={"example"} />
      </div>
      <div className="col">
        <div className="inline-block" style={{ height: 40 }}>
          Root
        </div>
        <div className="inline-block" style={{ height: 40 }}>
          Tree
        </div>
        <div className="inline-block" style={{ height: 40 }}>
          Hash
        </div>
        <div className="inline-block" style={{ height: 40 }}>
          Serial
        </div>
        <div className="inline-block" style={{ height: 40 }}>
          Value
        </div>
      </div>
    </div>
  );
}
