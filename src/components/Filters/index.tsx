/* eslint-disable */
import React from "react";
import { IBFiltersProps, FilterItem } from './filters.types';

const Filters = ({
  items = [],
}: IBFiltersProps) => {
  return (
    <div id="filters-wrapper">
      {items.map(({ id, name, label, type }: FilterItem) => {
        switch (type) {
          case 0:
            return <div>0</div>

          case 1:
            return <div>1</div>

          case 2:
            return <div>2</div>

          case 3:
            return <div>3</div>
        
          default:
            return <div>0</div>
        }
      })}
    </div>
  );
};

export default Filters;