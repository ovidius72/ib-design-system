/* eslint-disable */
import React, { useState } from 'react';
import { IBBox } from './components/Box/Box';
import IBFilters from './components/Filters';

export const App = () => {
  const [filterState, setFilterState] = useState(undefined);

  const handleSetFilterState = (state: any) => setFilterState(state);

  const mockedItems = [
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
    {
      id: 2,
      name: 'selectedType',
      label: 'Selection',
      type: 2,
      options: [
        {
          key: 'fruitsHeader',
          text: 'Fruits',
          itemType: 2,
        },
        { key: 'apple', text: 'Apple' },
        { key: 'banana', text: 'Banana' },
        { key: 'orange', text: 'Orange', disabled: true },
        { key: 'grape', text: 'Grape' },
        {
          key: 'vegetablesHeader',
          text: 'Vegetables',
          itemType: 2,
        },
        { key: 'broccoli', text: 'Broccoli' },
        { key: 'carrot', text: 'Carrot' },
        { key: 'lettuce', text: 'Lettuce' },
      ],
    },
    {
      id: 3,
      name: 'searchByCapital',
      label: 'Search By Capital',
      placeholder: 'Input in euros',
      type: 3,
      prefix: '€',
    },
  ];

  return (
    <IBBox p={2}>
      <IBBox mb={4}>
        App.tsx: You can test your components here for a realistic experience
      </IBBox>
      <IBBox mb={4}>
        Component: <strong>Filters</strong>
      </IBBox>
      <IBBox mb={4}>
        {' '}
        Filters state: {filterState && JSON.stringify(filterState)}
      </IBBox>

      <IBFilters setFilterState={handleSetFilterState} items={mockedItems} />
    </IBBox>
  );
};
export default App;
