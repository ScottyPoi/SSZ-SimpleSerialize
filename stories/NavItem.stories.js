import React from 'react';
import { NavItem } from './NavItem';

export default {
    title: 'NavItem',
    component: NavItem,
};

const Template = (args) => <NavItem {...args} />;

export const NavItemOne = Template.bind({});
NavItemOne.args = {
    title: "Foo",
    link: '/'
};