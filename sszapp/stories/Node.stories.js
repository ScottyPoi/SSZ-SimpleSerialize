import React from 'react';

import  Node  from './Node';

export default {
  title: 'Node',
  component: Node,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
};

const Template = (args) => <Node {...args} />;

export const FirstStory = Template.bind({});
FirstStory.args = {
    label: 'baz',
    size: 'large',
};

