/* eslint-disable */
import React from 'react';
import { IBFiltersProps, FilterItem } from './filters.types';

const Filters = ({ items = [] }: IBFiltersProps) => {
  const handleRenderFilters = (filters: FilterItem[]) => {
    return filters.map(({ id, name, label, type }: FilterItem) => {
      switch (type) {
        case 0:
          return <div key={id}>0</div>;

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
  return <div id="filters-wrapper">{handleRenderFilters(items)}</div>;
};

export default Filters;
