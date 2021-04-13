import React from 'react';
import SiteMap from './SiteMap';
import pages from '../data/site-pages.json';

export default {
    title: 'SiteMap',
    component: SiteMap,
};

const Template = (args) => <SiteMap {...args} />;

export const Home = Template.bind({});
Home.args = {
    pages
}