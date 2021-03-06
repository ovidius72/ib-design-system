import { Meta, Story } from '@storybook/react';
import React from 'react';
import { IBButton, IBButtonProps } from './Button';

export default {
  title: 'Atoms/IBButton',
  component: IBButton,
  argTypes: {},
} as Meta<IBButtonProps>;

const Template: Story<IBButtonProps> = args => (
  <IBButton {...args}>Test</IBButton>
);
export const DefaultButton: Story<IBButtonProps> = Template.bind({});
DefaultButton.args = {
  text: 'Default',
  variant: 'default',
};

export const PrimaryButton: Story<IBButtonProps> = Template.bind({});
PrimaryButton.args = {
  text: 'Primary',
  variant: 'primary',
};

export const LoadingButton: Story<IBButtonProps> = Template.bind({});
LoadingButton.args = {
  text: 'Loading',
  variant: 'primary',
  loading: true,
};
