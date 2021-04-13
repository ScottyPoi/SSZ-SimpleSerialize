import React from 'react';
import SpecsBody from './SpecsBody';
import SSZ from '../eth2.0-specs/ssz/simple-serialize.md';

export default {
    title: 'SpecsBody',
    component: SpecsBody,
};

const Template = (args) => <SpecsBody {...args} />;

export const SpecsStory = Template.bind({});
SpecsStory.args = {
    SSZ
};