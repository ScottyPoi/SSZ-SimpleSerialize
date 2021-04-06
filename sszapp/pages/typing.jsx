import React from 'react';
import fs from 'fs';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import toc from 'remark-toc';
import slug from 'remark-slug';
import Layout from '../components/layout'

export async function getStaticProps() {
    const doc = fs.readFileSync('./eth2.0-ssz/specs/types/general.md', 'utf8')
    return {
      props: {
        doc
      }
    }
  }

export default function Typing({ doc }) {
    
    const Types = doc.split("# Types")[1];
    
    return (
        <Layout>
          <div>
            <div className="row justify-content-center position-relative">
              <div className='col-3 position-sticky'>
               <h1>Types</h1>
                </div>
            </div>
            <div className='row'>
              <ReactMarkdown plugins={[gfm, toc, slug]}>{Types}</ReactMarkdown>)
            </div>
          </div>
        </Layout>
    )

    
}
