import { Meta, Story } from '@storybook/react';
import React from 'react';
import { IBButton, IBButtonProps } from './Button';

export default {
  title: 'Atoms/Button',
  component: IBButton,
  argTypes: {},
} as Meta<IBButtonProps>;

const Template: Story<IBButtonProps> = args => (
  <IBButton {...args}>Test</IBButton>
);
export const Button: Story<IBButtonProps> = Template.bind({});
Button.args = {
  text: 'Default',
  variant: 'primary',
};
