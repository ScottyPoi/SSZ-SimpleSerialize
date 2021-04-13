import React from 'react';
import LeftNav from './LeftNav';
import pages from '../data/specs-pages.json';

export default {
    title: 'LeftNav',
    component: LeftNav,
};

const Template = (args) => <LeftNav {...args} />;

export const LeftNavStory = Template.bind({});
LeftNavStory.args = {
    pages
};