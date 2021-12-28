/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { IBFiltersProps, FilterItem } from './filters.types';
import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';
import { TextField } from '@fluentui/react/lib/TextField';
import { IBBox } from '../Box/Box';

const Filters = ({ setFilterState, items = [] }: IBFiltersProps) => {
  const searchBoxStyles = { root: { width: 200 } };
  const textBoxStyles = { root: { width: 200 } };

  const [state, setState] = useState<any>({});

  useEffect(() => {
    setFilterState(state);
  }, [state]);

  // search input

  const preHandleSetStateSearchText = (
    fieldName: string,
    updatedValue: string | number | undefined,
  ) => {
    return setState({
      ...state,
      [fieldName]: { value: updatedValue, fieldError: '' },
    });
  };

  // numeric inputs [numbers and currencies]
  
  const preHandleSetStateNumeric = ( fieldName: string, value: string | undefined ) => {

    // cleanup when empty
    if (!value) {
      console.log('empty!')
      return setState({ ...state, [fieldName]: { value: '', fieldError: '' } })
    };

    // commas from client not allowed
    while (value?.includes(',')) {
      value = value.replace(',', '');
    }

    // error if not a valid number
    if (Number.isNaN(Number(value))) {
      console.log('invalid!')
      return setState({ ...state, [fieldName]: { value: '', fieldError: 'Invalid input' } })
    };

    // remove zeros upfront
    while (value[0] === '0') {
      value = value.substring(1);
    }

    // if decimal, controls for two digits max.
    const decimals = value.split('.')[1];
    if (decimals && decimals.length > 2) return;

    // set parsed string
    return setState({ ...state, [fieldName]: { value: value, fieldError: '' } });

  };

  // output currency

  const renderInputCurrency = (str: string) => {
    return str.replace(/^\d+(?=.|$)/, (int) => int.replace(/(?=(?:\d{3})+$)(?!^)/g, ","));
  }

  // rendering logic

  const handleRenderFilters = (filters: FilterItem[]) => {
    return filters.map(({ id, name, label, type, placeholder, prefix }: FilterItem) => {
      switch (type) {
        case 0: // search/text input
          return (
            <SearchBox
              key={id}
              styles={searchBoxStyles}
              placeholder={placeholder ?? 'Search'}
              onChange={(_, newValue) => preHandleSetStateSearchText(name, newValue)}
            />
          );

        case 1: // numeric input
          return (
            <TextField
              styles={textBoxStyles}
              key={id}
              name={name}
              placeholder={placeholder ?? 'Number'}
              onChange={(_, newValue) => preHandleSetStateNumeric(name, newValue)}
              onGetErrorMessage={() => state[name]?.fieldError}
              value={state[name]?.value}
            />
          );

        case 2: // select input
          return <div key={id}>2</div>;

        case 3: // currency input
          return (
            <TextField
              styles={textBoxStyles}
              key={id}
              name={name}
              placeholder={placeholder ?? 'Currency'}
              prefix={prefix ?? '€'}
              onChange={(e: any) =>
                preHandleSetStateNumeric(name, e.target.value)
              }
              onGetErrorMessage={() => state[name]?.fieldError}
              value={renderInputCurrency(state[name]?.value ?? '')}
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
