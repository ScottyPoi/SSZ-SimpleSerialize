import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import { renderToString } from 'react-dom/server';

import SSZ from '../eth2.0-specs/ssz/simple-serialize.md';


export default function Specifications({...props}) {
    return (
        <div>
            <MDXProvider>
                <SSZ />
            </MDXProvider>
        </div>
        
    )
}

    