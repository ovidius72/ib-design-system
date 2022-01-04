import React from 'react';
import { Toggle } from '@fluentui/react';

type IBToggleProps = {
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onText?: string;
  offText?: string;
};

const toggleStyles = {
  root: {
    border: '1px solid grey',
  },
};

const IBToggle: React.FC<IBToggleProps> = ({
  label,
  checked,
  disabled,
  offText,
  onText,
}) => {
  return (
    <Toggle
      styles={onText || offText ? toggleStyles : {}}
      label={label}
      checked={checked}
      disabled={disabled}
      onText={onText}
      offText={offText}
    />
  );
};

export default IBToggle;
