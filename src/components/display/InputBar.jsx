import { useEffect, useState } from "react";
import { toHexString } from "@chainsafe/ssz";

export default function InputBar(props) {
  const max = props.max;
  const set = props.set;
  const serialized = props.serialized

  const [input, setInput] = useState(props.input)

  useEffect(() => {
    set(input)
  }, [input])

  return (
    <div className="row">
      <label for="setInput2" className="form-label">
        Max: {max} Value: {input}
      </label>
{props.boolean ? (
  <div class="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={input == "true"} onMouseDown={input == "true" ? () => setInput("false") : () => setInput("true")} />
  <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
) : (<input
        type="range"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-range"
        min="0"
        max={max - 1}
        id="setInput2"
      ></input>)}
    </div>
  );
}
