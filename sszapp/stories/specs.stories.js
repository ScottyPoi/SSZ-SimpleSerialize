import React from 'react';
import  Specs  from './specs';
import file from '../eth2.0-specs/ssz/simple-serialize.md';

export default {
    title: 'Specs',
    component: Specs,
};

const Template = (args) => <Specs {...args} />;

export const SpecsStory = Template.bind({});
SpecsStory.args = {
    title: "Specs",
};