import { useState, useEffect } from 'react';
import BitSet from 'bitset';
export default function BitvectorFiller(vectorSize) {


    const size = vectorSize
    const array = [];
    for (let i=0; i<size; i++) {
        let rand = Math.floor(Math.random() * 2)
        while (rand === 2) {
            rand = Math.floor(Math.random() * 2)
        }
        array.push(rand)
    }
    const str = array.toString()
    const char = Array.from(str)
    return array
}

{/* <div>
Size: {size}
<br/>
Bits: {char.map((bit) => {
    return (
        <div>
            {bit}
            <br/>
            </div>
    )
})}
</div> */}