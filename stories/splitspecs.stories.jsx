import React from 'react';
import SplitSpecs  from '../components/splitspecs';
import markdown from '../eth2.0-specs/ssz/simple-serialize.md';

export default {
    title: 'SplitSpecs',
    component: SplitSpecs,
};

const Template = (args) => <SplitSpecs {...args} />;

export const SSZSpecs = Template.bind({});
SSZSpecs.args = {
    markdown
};

