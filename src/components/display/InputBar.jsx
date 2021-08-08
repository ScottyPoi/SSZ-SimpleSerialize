import { useEffect, useState } from "react";
import { toHexString } from "@chainsafe/ssz";
import {
  serializeOutputTypes,
  deserializeOutputTypes,
} from "../../util/output_types";
import { Type } from "@chainsafe/ssz";

export default function InputBar(props) {
  const max = props.max;
  const set = props.set;
  const serialized = props.serialized;
  const deserialized = props.deserialized;
  const sszType = props.sszType;
  const sszTypeName = props.sszTypeName;
  const hashTreeRoot = props.hashTreeRoot;
  const [input, setInput] = useState(props.input);

  function parseHex(hex) {
    for (let i=0; i<=hex.length; i+=2) {
      
    }
  }

  useEffect(() => {
    set(input);
  }, [input]);

  let serializedStr, hashTreeRootStr;
  let deserializedStr = "";
  const deserializedOuput = deserializeOutputTypes["hex"];
  const serializedOutput = serializeOutputTypes["hex"];
  serializedStr = (serialized && serializedOutput) ? serializedOutput.dump(serialized) : "";
  hashTreeRootStr = (hashTreeRoot && serializedOutput) ? serializedOutput.dump(hashTreeRoot) : "";
  deserializedStr =
  deserialized !== undefined && deserializedOuput
      ? deserializedOuput.dump(deserialized, sszType)
      : "";



  return (
    <div className="row">
      <label for="setInput2" className="form-label">
        Max: {max} <br/> Value: {input} <br/>  serializedStr: {serializedStr} <br/>  toString: {Number(input).toString(16)}
      </label>
      
      {props.boolean ? (
        <div class="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            checked={input == "true"}
            onMouseDown={
              input == "true" ? () => setInput("false") : () => setInput("true")
            }
          />
          <label className="form-check-label" for="flexSwitchCheckChecked">
            Checked switch checkbox input
          </label>
        </div>
      ) : (
        <input
          type="range"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-range"
          min="0"
          max={max - 1}
          id="setInput2"
        ></input>
      )}
    </div>
  );
}
