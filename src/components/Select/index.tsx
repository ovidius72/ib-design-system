import React from 'react';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import {
  Dropdown,
  IDropdownStyles,
  IDropdownOption,
} from '@fluentui/react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const stackTokens: IStackTokens = { childrenGap: 20 };

type IBSelectProps = {
  options: any[] | undefined;
  label?: string;
  name: string;
  setParentState: (
    // eslint-disable-next-line no-unused-vars
    name: string,
    // eslint-disable-next-line no-unused-vars
    value: IDropdownOption<any> | undefined,
  ) => void;
};

const IBSelect = ({ setParentState, options = [], name }: IBSelectProps) => {
  return (
    <Stack tokens={stackTokens}>
      <Dropdown
        placeholder="Select an option"
        options={options}
        styles={dropdownStyles}
        onChange={(_, value) => setParentState(name, value)}
      />
    </Stack>
  );
};

export default IBSelect;
