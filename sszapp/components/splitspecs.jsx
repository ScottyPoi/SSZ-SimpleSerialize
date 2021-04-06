import React from 'react';


export default function SplitSpecs(doc) {
    
    const document = doc;
    
    const split = document.split("<!-- /TOC -->")
    
    const TOC = split[0];
    const specs = split[1];

    // console.log(TOC);

    return [specs, TOC]

}