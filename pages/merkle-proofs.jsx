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
import styles from '../styles/specs.module.css'

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
    let topics = Object.keys(topicToLevel);
    topics = topics.map((topic) => {return topic.replace(/\r/, "")})
    console.log(topics)
    const scrollspy = TOCscroll(topics, topicToLevel);
    const MerkleProofsBody = (sections) => {
      let content = [];
      for (let i=0; i<sections.length; i++) {
        const sect = sections[i];
        const topic = topics[i];
        content.push(
          <div key={sect}>
          <section id={topic}>
            <ReactMarkdown plugins={[gfm, toc, slug]}>{`${sect}`}</ReactMarkdown>
          </section>
          </div>
        )}
      return content 
    };



    return (
    <div className='row '>
      <div className='col'>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-10'>
            <div className='row'>
              <h1>Merkle Proofs</h1>
              <div><p>from Ethereum 2.0</p></div>
            </div>
            <div className='row position-relative'>
              {MerkleProofsBody(sections)}
            </div>

            </div>
          </div>

        <div className={`row justify-content-end fixed-top overflow-y-scroll ${styles.toc}`}>
          <div className={`col-3 d-none d-sm-block position-fixed ${styles.scroll}`}>         
            {scrollspy}
          </div>
        </div> 
    
      </div>
    </div>
    )
}