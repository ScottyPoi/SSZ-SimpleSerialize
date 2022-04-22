import { useEffect, useState } from "react";

type BitVectorProps = {
  setString: Function;
};

export default function BitVectorMenu(props: BitVectorProps) {
  const [length, setLength] = useState(1);

  useEffect(() => {
    props.setString(`<elementType: boolean, length: ${length}>`);
  });

  return (
    <div className="row ps-2 ms-2">
      <div className="col">
        <div className="row justify-content-start py-2">
          Set BitVector Length:
          <input
            type="number"
            value={length}
            min={1}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
