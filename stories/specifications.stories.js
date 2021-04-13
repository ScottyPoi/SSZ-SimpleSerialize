import React from 'react';
import Specifications from './specifications';


export default {
    title: 'Specifications',
    component: Specifications,
};

const Template = (args) => <Specifications {...args} />;

export const page = Template.bind({});
page.args = {
};