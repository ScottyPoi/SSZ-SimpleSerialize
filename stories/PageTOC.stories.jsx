import React from 'react';
import PageTOC from '../components/PageTOC';
import pages from '../data/site-pages.json';

export default {
    title: 'SiteMap',
    component: SiteMap,
};

const Template = (args) => <PageTOC {...args} />;

export const Home = Template.bind({});
Home.args = {
    pages
}