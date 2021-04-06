import React from 'react';
import TOC from './TOC';
import specs from '../data/specs.json';

export default {
    title: 'TOC',
    component: TOC,
};

const Template = (args) => <TOC {...args} />;


export const SpecsTOC = Template.bind({});
SpecsTOC.args = {
    specs

}