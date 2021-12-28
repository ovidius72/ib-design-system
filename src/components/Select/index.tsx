import * as React from 'react';
import { IStackTokens, Stack } from '@fluentui/react/lib/Stack';
import { Dropdown, IDropdownStyles } from '@fluentui/react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const stackTokens: IStackTokens = { childrenGap: 20 };

const IBSelect = ({ options }: any) => {
  // TODO props interface
  return (
    <Stack tokens={stackTokens}>
      <Dropdown
        placeholder="Select an option"
        options={options}
        styles={dropdownStyles}
      />
    </Stack>
  );
};

export default IBSelect;
