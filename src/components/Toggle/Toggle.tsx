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
    border: '1px solid black',
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
      styles={toggleStyles}
      label={label}
      checked={checked}
      disabled={disabled}
      onText={onText}
      offText={offText}
    />
  );
};

export default IBToggle;
