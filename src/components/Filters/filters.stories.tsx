import React from 'react';
import { Meta, Story } from '@storybook/react';
import IBFilters from './';
import { IBFiltersProps } from './filters.types';

export default {
  title: 'Atoms/Filters',
  component: IBFilters,
  argTypes: {},
} as Meta<IBFiltersProps>;

const Template: Story<IBFiltersProps> = args => <IBFilters {...args} />;

export const DefaultFilters: Story<IBFiltersProps> = Template.bind({});

DefaultFilters.args = {
  setFilterState: () => console.log('setFilterState'),
  items: [
    {
      id: 0,
      name: 'companyName',
      label: 'Search Company',
      type: 0,
      placeholder: 'Type here',
    },
    {
      id: 1,
      name: 'searchByNumber',
      label: 'Search By Number',
      type: 1,
      placeholder: 'Type any number',
    },
    { id: 2, name: 'input_select', label: 'Selection', type: 2 },
    {
      id: 3,
      name: 'searchByCapital',
      label: 'Search By Capital',
      placeholder: 'Input in euros',
      type: 3,
      prefix: '€',
    },
  ],
};
