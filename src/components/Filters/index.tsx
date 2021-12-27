/* eslint-disable */
import React from 'react';
import { IBFiltersProps, FilterItem } from './filters.types';
import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';
import { IBBox } from '../Box/Box';

const Filters = ({ items = [] }: IBFiltersProps) => {
  const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 200 } };

  const handleRenderFilters = (filters: FilterItem[]) => {
    return filters.map(({ id, name, label, type, placeholder }: FilterItem) => {
      switch (type) {
        case 0:
          return (
            <SearchBox
              key={id}
              styles={searchBoxStyles}
              placeholder={placeholder ?? 'Search'}
              onEscape={ev => {
                console.log('Custom onEscape Called');
              }}
              onClear={ev => {
                console.log('Custom onClear Called');
              }}
              onChange={(_, newValue) =>
                console.log('SearchBox onChange fired: ' + newValue)
              }
              onSearch={newValue =>
                console.log('SearchBox onSearch fired: ' + newValue)
              }
            />
          );

        case 1:
          return <div key={id}>1</div>;

        case 2:
          return <div key={id}>2</div>;

        case 3:
          return <div key={id}>3</div>;

        default:
          return <div key={id}>0</div>;
      }
    });
  };
  return <IBBox mb={4}>{handleRenderFilters(items)}</IBBox>;
};

export default Filters;
