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
  }, [state]);

  const preHandleSetState = (
    fieldName: string,
    updatedValue: string | number | undefined,
  ) => {
    return setState({
      ...state,
      [fieldName]: { value: updatedValue, fieldError: '' },
    });
  };
  
  const preHandleSetStateCurrency = ( fieldName: string, value: string | undefined ) => {
    
    if (!value) {
      return setState({ ...state, [fieldName]: { value: '', fieldError: '' } })
    };

    if (Number.isNaN(Number(value))) {
      return setState({ ...state, [fieldName]: { value: '', fieldError: 'Invalid input' } })
    };

    while (value[0] === '0') {
      value = value.substring(1);
    }

    const decimals = value.split('.')[1];

    if (decimals && decimals.length > 2) return;

    return setState({ ...state, [fieldName]: { value: value, fieldError: '' } });

  };

  const handleRenderFilters = (filters: FilterItem[]) => {
    return filters.map(({ id, name, label, type, placeholder, prefix }: FilterItem) => {
      switch (type) {
        case 0:
          return (
            <SearchBox
              key={id}
              styles={searchBoxStyles}
              placeholder={placeholder ?? 'Search'}
              onChange={(_, newValue) => preHandleSetState(name, newValue)}
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
              prefix={prefix ?? '€'}
              onChange={(e: any) =>
                preHandleSetStateCurrency(name, e.target.value)
              }
              onGetErrorMessage={() => state[name]?.fieldError}
              value={state[name]?.value ?? ''}
            />
          );

        default:
          return <div key={id}>0</div>;
      }
    });
  };

  return <IBBox mb={4}>{handleRenderFilters(items)}</IBBox>;
};

export default Filters;
