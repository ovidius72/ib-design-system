/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { IBFiltersProps, FilterItem } from './filters.types';
import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';
import { TextField } from '@fluentui/react/lib/TextField';
import { IBBox } from '../Box/Box';

// CURRENCY INPUT example
// https://github.com/cchanxzy/react-currency-input-field/blob/master/src/examples/Example1.tsx

const Filters = ({ setFilterState, items = [] }: IBFiltersProps) => {
  const searchBoxStyles = { root: { width: 200 } };
  const textBoxStyles = { root: { width: 200 } };

  const [state, setState] = useState<any>({});

  useEffect(() => {
    setFilterState(state);
  }, [state])

  const preHandleSetState = (fieldName: string, updatedValue: string | number | undefined) => {
    return setState({ ...state, [fieldName]: { value: updatedValue, fieldError: '' } });
  }

  const preHandleSetStateCurrency = (fieldName: string, updatedValue: string | number | undefined) => {

    if (!updatedValue) {
      setState({ ...state, [fieldName]: { value: '', fieldError: '' } });
      return;
    }

    if (Number.isNaN(Number(updatedValue))) {
      setState({ ...state, [fieldName]: { value: updatedValue, fieldError: 'Invalid input' } });
      return;
    }

    return setState({ ...state, [fieldName]: { value: updatedValue, fieldError: '' } });
  }

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
              onChange={(_, newValue) => {
                console.log('SearchBox onChange fired: ' + newValue);
                preHandleSetState(name, newValue);
              }}
              onSearch={newValue =>
                console.log('SearchBox onSearch fired: ' + newValue)
              }
            />
          );

        case 1:
          return (
            <TextField
              styles={textBoxStyles}
              key={id}
              name={name}
              placeholder={placeholder ?? 'Number'}
              // onChange={(e: any) => handleNumericInputChange(e.target.value)}
              onGetErrorMessage={() => state[name]?.error}
            />
          );

        case 2:
          return <div key={id}>2</div>;

        case 3:
          return (
            <TextField
              styles={textBoxStyles}
              key={id}
              name={name}
              placeholder={placeholder ?? 'Currency'}
              // onChange={(e: any) => handleCurrencyInputChange(e.target.value)}
              onChange={(e: any) => preHandleSetStateCurrency(name, e.target.value)}
              onGetErrorMessage={() => state[name]?.error}
            />
          );

        default:
          return <div key={id}>0</div>;
      }
    });
  };

  return (
    <IBBox mb={4}>
      {handleRenderFilters(items)}
    </IBBox>
  );
};

export default Filters;