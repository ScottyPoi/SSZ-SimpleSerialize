import React from 'react';
import TopHeader from '../components/TopHeader';
import pages from '../data/site-pages.json';

export default {
    title: 'TopHeader',
    component: TopHeader,
};

const Template = (args) => <TopHeader {...args} />;


export const MainPage = Template.bind({});
MainPage.args = {
    pages
}