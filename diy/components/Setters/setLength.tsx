import { useState } from "react";

interface setLengthProps {
  setVectorLen: React.Dispatch<React.SetStateAction<number>>;
  currentLen: number;
}

export default function SetLength(props: setLengthProps) {
  const [newVectorLen, setNewVectorLen] = useState<number>(props.currentLen);
  const setVectorLen = props.setVectorLen;
  return (
    <div className="d-grid gap-2">
      <input
        type="number"
        className="form-control"
        id="setLength"
        placeholder={props.currentLen.toString()}
        min={1}
        onChange={(e) => setNewVectorLen(Number(e.target.value))}
      />
      <button
        type="button"
        className="btn btn-sm btn-primary"
        onClick={() => setVectorLen(newVectorLen)}
      >
        Set Vector Length
      </button>
    </div>
  );
}
