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
}

export type IBFiltersProps = {
  items?: FilterItem[];
}