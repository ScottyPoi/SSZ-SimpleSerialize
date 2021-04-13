import React from 'react';
import  SpecsFile  from './specsfile';

export default {
    title: 'SpecsFile',
    component: SpecsFile,
};

const Template = (args) => <SpecsFile {...args} />;

export const page = Template.bind({});
page.args = {
};