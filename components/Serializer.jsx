import { useState } from "react";
import Basicform from './VisualizerForms/BasicForm';
export default function Serializer() {
  const [value, setValue] = useState(0);
  const [type, setType] = useState("uint8");
  const [asBytes, setAsBytes] = useState("0x00");
  const [padded, setPadded] = useState("0x00000000000000000000000000000000");
  const [asHash, setAsHash] = useState("sha256")

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const changeType = (event) => {
    setType(event.target.value);
  };

  return (
    <div className='row'>
      <div className="col">
        <p>Type:</p>
        <form>
          <label>
            <select value={type} onChange={changeType}>
              <option value="basic">Basic</option>
              <option value="list">List</option>
            </select>
          </label>
        </form>
        {type == "basic" ? <Basicform /> : null}
      </div>
    </div>
  );
}
