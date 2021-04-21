import React, {useEffect, useState} from 'react';
import '../styles/GridNode.css';

export default function GridNode(props) {
    const [on, setOn] = useState(false);
    const [visited, setVisited] = useState(false)

    let value = props.value;
    const row = props.row;
    const col = props.col;
    let mousePressed = props.mousePressed;
    let edges = props.edges;

    const addEdge = (node) => {
        edges[node] = true;
    }
    
    const extraClassName = visited
        ? 'grid-node-visited'
        : on 
        ? 'grid-node-on' 
        : "grid-node-off"
    return (
        <div 
        className={`grid-node unselectable ${extraClassName}`}
        id={`grid-node-${row + 32*col}`}
        onMouseEnter={() => !mousePressed 
                            ? setOn(true)
                            : mousePressed && !visited && !deleter
                            ? setVisited(true)
                            : mousePressed && visited && deleter
                            ? setVisited(false)
                            : setOn(true) }
        onMouseLeave={() => setOn(false)}
        onMouseDown={() => !visited ? setVisited(true) : setVisited(false)}
        value={nodeValue}
        edges={edges}
        >{nodeValue}
        </div>
    )

}
