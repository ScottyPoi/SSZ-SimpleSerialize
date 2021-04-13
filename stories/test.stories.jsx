import React from 'react';

export default {
    title: 'Test',
    component: Test,
};

const Template = (args) => <Test {...args} />;

export const SpecsStory = Template.bind({});
SpecsStory.args = {
};