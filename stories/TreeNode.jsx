import React from 'react';
import { useState } from 'react';


export default function TreeNode(props) {

    const [on, setOn] = useState(false);

    let value = props.value;
    const index = props.index;
    const extraClassName = on
        ? 'tree-node-on'
        : 'tree-node-off'

    return (
        <div 
        className={`tree-node ${extraClassName}`}
        id={`tree-node-${index}`}
        onMouseDown={() => !on ? setOn(true) : setOn(false)}
        value={value}>
            {value}
        </div>
    )
}