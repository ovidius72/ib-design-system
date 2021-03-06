/* eslint-disable */
enum InputType {
  'text' = 0,
  'number' = 1,
  'select' = 2,
  'currency' = 3,
}

export type FilterItem = {
  id: number;
  name: string;
  label: string;
  type: InputType;
  placeholder?: string;
  prefix?: string;
}

export type IBFiltersProps = {
  setFilterState: any; // TODO remove any
  items?: FilterItem[];
}