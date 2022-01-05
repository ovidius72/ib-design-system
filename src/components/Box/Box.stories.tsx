import { Meta, Story } from '@storybook/react';
import React from 'react';
import { IBBox, IBBoxProps } from './Box';

export default {
  title: 'Atoms/IBBox',
  component: IBBox,
  argTypes: {},
} as Meta<IBBoxProps>;

const Template: Story<IBBoxProps> = args => (
  <IBBox {...args}>
    <h4>IBBox is a container component.</h4>
    <p>
      It accepts all props for <i>Layout</i>, <i>Flexbox</i>, <i>Space</i>,{' '}
      <i>Colors</i>, and <i>Borders</i> as expalined{' '}
      <a
        href="https://styled-system.com/guides/build-a-box"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
    </p>
  </IBBox>
);
export const Box: Story<IBBoxProps> = Template.bind({});
Box.args = {
  /* margin */
  m: 10,
  p: 22,
};
