import React from 'react';
import SplitSpecs from '../components/splitspecs';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import toc from 'remark-toc';
import slug from 'remark-slug';
export default function Test({ ...props }) {
    const body = SplitSpecs(props.SSZ);
    return (<div>
                <div>
                    {<ReactMarkdown plugins={[gfm, toc, slug]}>{body}</ReactMarkdown>}
                </div>
            </div>)
    }