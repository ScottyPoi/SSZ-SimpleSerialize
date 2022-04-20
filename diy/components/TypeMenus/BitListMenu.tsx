import { useEffect, useState } from "react";

type BitListProps = {
  setString: Function;
};

export default function BitListMenu(props: BitListProps) {
  const [limit, setLimit] = useState(1);
  useEffect(() => {
    props.setString(`<elementType: boolean, limit: ${limit}>`);
  });
  return (
    <div className="row ps-2 ms-2">
      <div className="col">
        <div className="row p-2">
          Set Limit: {limit}
          <input
            type="range"
            className="form-range"
            min="0"
            max="32"
            id="customRange3"
            onChange={(e) => setLimit(2 ** Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
