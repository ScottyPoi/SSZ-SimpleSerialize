import React from 'react'
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import Specs from './specs';
import { SpecsStory } from './specs.stories';

const markdown = () => {
    return (
      <Specs {...SpecsStory.args} />
    )
};

const content = unified()
    .use(parse)
    .use(remark2react)
    .processSync(markdown).result;

export default async function Spec() {
  return content.toString()
};
