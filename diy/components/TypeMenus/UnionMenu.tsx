/* eslint-disable @typescript-eslint/no-unused-vars */
import { Type } from "@chainsafe/ssz"
import { useState } from "react"
import SelectElementType from "../SelectMenus/SelectElementType"

type UnionMenuProps = {
    aliasList: Record<string, Type<any>>
}

export default function UnionMenu(props: UnionMenuProps) {
    
    const [curType, setCurType] = useState("")
    
    return (
        <div className='row'>
            <SelectElementType aliasList={props.aliasList} types={[]} name="Union Types" setType={setCurType} />
        </div>
    )
}