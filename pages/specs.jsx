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
import styles from '../styles/specs.module.css';

export async function getStaticProps() {
  const SpecsData = fs.readFileSync('./eth2sszspecs/simple-serialize.md', 'utf8')
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
    let topics = Object.keys(topicToLevel);
    topics = topics.map((topic) => {return topic.replace(/\r/, "")})
    console.log(topics)
    const scrollspy = TOCscroll(topics, topicToLevel);
    const specsBody = (sections) => {
      let content = [];
      for (let i=0; i<sections.length; i++) {
        const sect = sections[i];
        const topic = topics[i];
        content.push(
          <div key={sect}>
          <section id={topic}>
            <ReactMarkdown plugins={[slug, toc, gfm]}>{`${sect}`}</ReactMarkdown>
          </section>
          </div>
        )}
      return content 
    };

    console.log(topicToLevel)

    return (
      <div className='row '>
      <div className='col'>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-10 '>
            <div className='row'>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">SimpleSerialize.md</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/merkle-proofs">Merkle-Proofs.md</a>
              </li>
            </ul>
            </div>              
              <br />
              <br />
              <br />
            <div className='row'>

              <h1>Simple Serialize Specs</h1>
              <div><p>from Ethereum 2.0</p></div>
            </div>
            <div className='row position-relative'>
              {specsBody(sections)}
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