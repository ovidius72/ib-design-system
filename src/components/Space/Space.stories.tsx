import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import React from 'react';
import { IBBox } from '../Box/Box';
import { IBSpace, IBSpaceProps } from './Space';

export default {
  title: 'Atoms/IBSpace',
  component: IBSpace,
  // argTypes: {
  //   size: {
  //     options: ['small', 'medium', 'large', 'xLarge'],
  //     control: 'select',
  //     table: {
  //       category: 'Sizes',
  //     },
  //   },
  // },
} as ComponentMeta<typeof IBSpace>;

const Template: ComponentStory<typeof IBSpace> = args => (
  <IBBox width={200} height={200} backgroundColor="violet">
    <IBSpace {...args}>
      <IBBox p={12} backgroundColor="yellow">
        Header
      </IBBox>
      <IBBox p={12} backgroundColor="magenta">
        <p>content</p>
      </IBBox>
    </IBSpace>
  </IBBox>
);
export const VerticalSmallSpace: Story<IBSpaceProps> = Template.bind({});
VerticalSmallSpace.args = {
  style: { background: 'red' },
  customSize: undefined,
};
