/* eslint-disable */
import React from 'react';
import { IBBox } from './components/Box/Box';
import Filters from './components/Filters';

export const App = () => {
  const mockedItems = [
    { id: 0, name: 'input_text', label: 'Search All', type: 0 },
    { id: 1, name: 'input_number', label: 'Filter by Number', type: 1 },
    { id: 2, name: 'input_select', label: 'Selection', type: 2 },
    { id: 3, name: 'input_currency', label: 'by Number (Currency)', type: 3 },
  ];

  return (
    <IBBox p={2}>
      <IBBox mb={4}>
        App.tsx: You can test your components here for a realistic experience
      </IBBox>
      <IBBox mb={4}>
        Component: <strong>Filters</strong>
      </IBBox>

      <Filters items={mockedItems} />
    </IBBox>
  );
};
export default App;
