import { useEffect, useState } from "react";

export default function InputBar(props) {
  const max = props.max;
  const set = props.set;

  const [input, setInput] = useState(props.input)

  useEffect(() => {
    set(input)
  }, [input])

  return (
    <div className="row">
      <label for="setInput2" className="form-label">
        Max: {max} Value: {input}
      </label>
      <input
        type="range"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form-range"
        min="0"
        max={max - 1}
        id="setInput2"
      ></input>
    </div>
  );
}
