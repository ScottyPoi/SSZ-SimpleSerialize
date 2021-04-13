import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import slug from 'remark-slug';
import toc from 'remark-toc';

export default function Specs( { ...props } ) {


    return (
        <ReactMarkdown plugins={[gfm, slug, toc]} children={props.children} />
    )
}