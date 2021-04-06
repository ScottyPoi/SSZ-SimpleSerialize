import React from 'react';
import fs from 'fs';
import SplitSpecs from '../components/splitspecs';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import toc from 'remark-toc';
import slug from 'remark-slug';
import Layout from '../components/layout';
import * as ReactBootStrap from 'react-bootstrap';
import IsolateTOC from '../components/isolateTOC';
import SeparateSections from '../components/SeparateSections';
import TOCscroll from '../components/TOCscroll';

export async function getStaticProps() {
  const MerkleProofsData = fs.readFileSync('./eth2.0-specs/ssz/merkle-proofs.md', 'utf8')
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
          <>
          <section id={topic} />
          <section id={topic}>
            <ReactMarkdown key={sect} plugins={[gfm, toc, slug]}>{`${sect}`}</ReactMarkdown>
          </section>
          </>
        )}
      return content 
    };



    return (
                <Layout>
                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col lg={8}>
                      <ReactBootStrap.Row>
                        <h1>Merkle Proofs</h1>
                        <div><p>from Ethereum 2.0</p></div>
                      </ReactBootStrap.Row>
                      <ReactBootStrap.Row>
                        {MerkleProofsBody(sections)}
                      </ReactBootStrap.Row>
                      
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                    </ReactBootStrap.Col>
                  </ReactBootStrap.Row>
                    
                  <ReactBootStrap.Row className='fixed-top' >
                    <ReactBootStrap.Col lg={8}>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                      {scrollspy}
                    </ReactBootStrap.Col>
                  </ReactBootStrap.Row>
                   
                </Layout>
            )
}