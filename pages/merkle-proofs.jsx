import React from 'react';
import fs from 'fs';
import SplitSpecs from '../components/splitspecs';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import toc from 'remark-toc';
import slug from 'remark-slug';
import IsolateTOC from '../components/isolateTOC';
import SeparateSections from '../components/SeparateSections';
import TOCscroll from '../components/TOCscroll';

export async function getStaticProps() {
  const MerkleProofsData = fs.readFileSync('./data/merkle-proofs.md', 'utf8')
  return {
    props: {
      MerkleProofsData
    }
  }
}


export default function Specs({ MerkleProofsData }) {
    const [body, TOC] = SplitSpecs(MerkleProofsData);
    const topicToLevel = IsolateTOC(TOC);
    const sections = SeparateSections(body);
    const topics = Object.keys(topicToLevel);
    const scrollspy = TOCscroll(topics, topicToLevel);
    const MerkleProofsBody = (sections) => {
      let content = [];
      for (let i=0; i<sections.length; i++) {
        const sect = sections[i];
        const topic = topics[i];
        content.push(
          <div key={sect}>
          <section id={topic} />
          <section id={topic}>
            <ReactMarkdown plugins={[gfm, toc, slug]}>{`${sect}`}</ReactMarkdown>
          </section>
          </div>
        )}
      return content 
    };



    return (
      <div className='position-relative'>
        <div className='row position-fixed top-0 start-0'>
          <div className='col-7'>
            <div className='row'>
              <h1>Merkle Proofs</h1>
              <div><p>from Ethereum 2.0</p></div>
            </div>
            <div className='row'>
              {MerkleProofsBody(sections)}
            </div>
            
          </div>
          <div className='col-5'>
          </div>
        </div>
          
        <div className='row position-fixed top-0 start-50'>
          <div className='col-9'>
          </div>
          <div className='col-3'>
            {scrollspy}
          </div>
        </div>
        </div>
    )
}