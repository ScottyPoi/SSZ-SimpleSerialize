import { Dispatch, useState } from "react";

interface SetLimitProps {
  setLimit: Dispatch<React.SetStateAction<number>>;
  curLimit: number;
  perChunk: number;
}

export function SetLimit(props: SetLimitProps) {
  const [newLimit, setNewLimit] = useState<number>(props.perChunk * 2);
  const powroftwo = new Array(32).fill(0);

  return (
    <div className="d-grid gap-2">
      <select
      className="form-select"
        defaultValue={props.curLimit}
        onChange={(e) => setNewLimit(Number(e.target.value))}
      >
        {powroftwo.map((v, i) => {
          return (
            <option key={v + i} value={2 ** i * props.perChunk}>
              {2 ** i * props.perChunk}
            </option>
          );
        })}
      </select>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => props.setLimit(newLimit)}
      >
        Change Limit
      </button>
    </div>
  );
}
