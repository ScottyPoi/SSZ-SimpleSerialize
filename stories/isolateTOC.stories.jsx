import React from 'react';
import IsolateTOC from '../components/isolateTOC';
import SplitSpecs from '../components/splitspecs';






export default {
    title: 'isolateTOC',
    component: IsolateTOC,
};

const Template = (args) => <TOC {...args} />;


export const IsolatedSpecsTOC = Template.bind({});
IsolatedSpecsTOC.args = {
    
}