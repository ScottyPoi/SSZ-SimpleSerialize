import React from 'react';
import SpecsBody from './SpecsBody';
import { SpecsStory } from './SpecsBody.stories';
import TOC from './TOC';
import { SpecsTOC } from './TOC.stories';
import * as ReactBootStrap from 'react-bootstrap';
import TopHeader from '../components/TopHeader';
import { MainPage } from '../stories/TopHeader.stories';

export default function SpecsFile ({ ...props }) {
    return ( <div>
        <ReactBootStrap.Row style={{height: 100}}></ReactBootStrap.Row>
        <ReactBootStrap.Row>
        <ReactBootStrap.Col className md={3}></ReactBootStrap.Col>
        <ReactBootStrap.Col   md={6}><SpecsBody  {...SpecsStory.args}></SpecsBody></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row>
        <TopHeader  {...MainPage.args} />
        <ReactBootStrap.Col className={"fixed-top"} md={{span: 3, offset: 9}}><TOC {...SpecsTOC.args}></TOC></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        </div>
    )
} 