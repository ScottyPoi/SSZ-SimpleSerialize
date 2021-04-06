import React, { useState } from 'react';
import './Node.module.css';
import PropTypes from 'prop-types';


export default function Node( {label, backgroundColor, ...props} ) {
    const [ on, setOn] = useState(false);
    let lit = on ? 'on' : 'off';
    
    const size = props.size == 'small' ? 'small' : 'large';
    return (
        <button
            {...props}
            className={`node node-${size} node-${lit}`}
            style={backgroundColor && {backgroundColor}}
            onClick={() => !on ? setOn(true) : setOn(false)}
        >
            {label}
        </button>
    )
}


Node.defaultProps = {
    label: "Foobarbaz",
    backgroundColor: null,
    size: 'small'
};

Node.propTypes = {
    /**
   * What does the Button say?
   */
    label: PropTypes.string,
    /**
   * What background color to use
   */
    backgroundColor: PropTypes.string,
    /**
   * Is the Button big or small?
   */
    size: PropTypes.oneOf(['small', 'large']),
};
