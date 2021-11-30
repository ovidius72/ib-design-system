import { Alignment, IStackTokens, Stack } from '@fluentui/react';
import React, { FC } from 'react';
import { SizeType } from 'src/theme/type';

export type IBSpaceProps = {
  vertical?: boolean;
  size?: SizeType | number;
  align?: Alignment;
  fullWidthChildren?: boolean;
};

const gapSize = {
  small: 2,
  medium: 5,
  large: 9,
  xLarge: 12,
  default: 1,
};
const IBSpace: FC<IBSpaceProps> = ({
  size,
  children,
  align = 'start',
  vertical = false,
}) => {
  const sizeIsNumber = typeof size === 'number';
  const gap = sizeIsNumber ? size : gapSize[size || 'default'];
  const stackTokens: IStackTokens = {
    childrenGap: gap,
  };
  return (
    <Stack
      grow={false}
      horizontalAlign={align || 'start'}
      tokens={stackTokens}
      horizontal={!vertical}
    >
      {children}
    </Stack>
  );
};

export { IBSpace };
