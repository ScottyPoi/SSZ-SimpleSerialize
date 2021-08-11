import { useState } from 'react';
export default function Listform() {
    const [length, setLength] = useState(0);
    const [value, setValue] = useState(0)
    
    const changeLength = (event) => {
        setLength(event.target.value)
    };

    const changeValue = (event) => {
        setValue(event.target.value)
    };


    return (
        <div
        value={value}>
      <p>Length:</p><input type="number" min={0} value={length} onChange={changeLength} />
      <p>Value:</p>
        <input value={value} onChange={changeValue} />
      </div>
    )
}