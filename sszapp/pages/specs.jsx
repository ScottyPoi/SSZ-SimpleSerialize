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
          <>
          <section id={topic} />
          <section id={topic}>
            <ReactMarkdown plugins={[slug, toc, gfm]} key={sections[i]} >{`${sections[i]}`}</ReactMarkdown>
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
                        <h1>Simple Serialize Specs</h1>
                        <div><p>from Ethereum 2.0</p></div>
                      </ReactBootStrap.Row>
                      <ReactBootStrap.Row>
                        {specsBody(sections)}
                      </ReactBootStrap.Row>
                      
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                    </ReactBootStrap.Col>
                  </ReactBootStrap.Row>
                    
                  <ReactBootStrap.Row >
                    <ReactBootStrap.Col lg={8}>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={4}>
                      {scrollspy}
                    </ReactBootStrap.Col>
                  </ReactBootStrap.Row>
                   
                </Layout>
            )
}