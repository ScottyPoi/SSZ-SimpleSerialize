import { css } from '@emotion/react';
import React from 'react';
import MenuButton from './MenuButton';


export default {
    title: 'MenuButton',
    component: MenuButton,
};

const Template = (args) => <MenuButton {...args} />;

export const SMap = Template.bind({});
SMap.args = {
    foo: 'bar',
    style: css`
    color: hotpink,
    border: solid black`
    }