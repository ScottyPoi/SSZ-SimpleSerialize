import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import toc from 'remark-toc';
import slug from 'remark-slug';



export default function ShowTOC(props) {
    return (
    <div className='row p-0'>
        <div className='col p-0'>
        <ReactMarkdown plugins={[slug, toc, gfm]}>{props.table}</ReactMarkdown>
        </div>
        </div>
)
}
