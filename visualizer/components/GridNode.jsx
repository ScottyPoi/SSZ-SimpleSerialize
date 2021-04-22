import React, {useEffect, useState} from 'react';
import styles from  '../styles/GridNode.module.css';

export default function GridNode({ ...props }) {
    const [on, setOn] = useState(false);
    const [visited, setVisited] = useState(false)

    let nodevalue = props.nodevalue;
    let mousePressed = props.mousePressed;

    const addEdge = (node) => {
        edges[node] = true;
    }
    
    const extraClassName = visited
        ? styles.visited
        : on 
        ? styles.on
        : styles.off
    return (
        <div 
        className={`${styles.gridnode} ${extraClassName} text-center`}
        id={'0'}
        onMouseEnter={() => !mousePressed 
                            ? setOn(true)
                            : mousePressed && !visited && !deleter
                            ? setVisited(true)
                            : mousePressed && visited && deleter
                            ? setVisited(false)
                            : setOn(true) }
        onMouseLeave={() => setOn(false)}
        onMouseDown={() => !visited ? setVisited(true) : setVisited(false)}
        nodevalue={nodevalue}
        ><h4 className='text-center'>{nodevalue}</h4>
        </div>
    )

}
