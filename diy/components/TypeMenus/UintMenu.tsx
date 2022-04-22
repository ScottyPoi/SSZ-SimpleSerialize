import { useEffect, useState } from "react";

type UintProps = {
    setString: Function
}
export function UintMenu(props: UintProps) {
    const [n, setN] = useState("N")

    useEffect(() => {
      props.setString(`${n}`)
    })

    return (
        <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg SSZ Type"
        onChange={(e) => setN(e.target.value)}
        size={7}
      >
        <option value="N" selected>Select uintN</option>
        <option value="8">uint8</option>
        <option value="16">uint16</option>
        <option value="32">uint32</option>
        <option value="64">uint64</option>
        <option value="128">uint128</option>
        <option value="128">uint256</option>
      </select>    )
}