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
  const SpecsData = fs.readFileSync('./eth2.0-specs/ssz/simple-serialize.md', 'utf8')
  return {
    props: {
      SpecsData
    }
  }
}


export default function Specs({ SpecsData }) {
    const [body, TOC] = SplitSpecs(SpecsData);
    const topicToLevel = IsolateTOC(TOC);
    const sections = SeparateSections(body);
    const topics = Object.keys(topicToLevel);
    const scrollspy = TOCscroll(topics, topicToLevel);
    const specsBody = (sections) => {
      let content = [];
      for (let i=0; i<sections.length; i++) {
        const sect = sections[i];
        const topic = topics[i];
        content.push(
          <div key={sect}>
          <section id={topic} />
          <section id={topic}>
            <ReactMarkdown plugins={[slug, toc, gfm]}>{`${sect}`}</ReactMarkdown>
          </section>
          </div>
        )}
      return content 
    };



    return (
      <div className='position-relative'>
        <div className='row position-absolute top-0 start-0'>
          <div className='col-8'>
            <div className='row'>
              <h1>Simple Serialize Specs</h1>
              <div><p>from Ethereum 2.0</p></div>
            </div>
            <div className='row'>
              {specsBody(sections)}
            </div>
            
          </div>
          <div className='col-4'>
          </div>
        </div>
          
        <div className='row position-fixed start-50'>
          <div className='col-10'>
          </div>
          <div className='col-2'>
            {scrollspy}
          </div>
        </div>
        </div>
    )
}