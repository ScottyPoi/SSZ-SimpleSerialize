import { useState } from "react";
import Listform from "./Listform";
import Basicform from './BasicForm';
import BitfieldsForm from "./BitfieldsForm";
export default function Serializer() {
  const [value, setValue] = useState(0);
  const [type, setType] = useState("basic");
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
              <option value="bitfields">Bitfields</option>
            </select>
          </label>
        </form>
        {type === "basic" ? <Basicform /> : type === "bitfields" ? <BitfieldsForm /> : null }
      </div>
    </div>
  );
}
