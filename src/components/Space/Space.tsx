import { Alignment } from '@fluentui/react';
import React, { FC } from 'react';
import { IBSizeType } from '../../theme/types';
import styled from 'styled-components';

export type IBSpaceProps = {
  /** Whether render as a column or not*/
  vertical?: boolean;
  /** The elements horizontal alignment */
  hAlign?: Alignment;
  /** The elements vertical alignment */
  vAlign?: Alignment;
  /** If true covers the available space */
  fluid?: boolean;
  /** Optional css styles */
  style?: React.CSSProperties;

  /**
   * The space size.
   */
  size?: IBSizeType;

  customSize?: number;
};

const SpaceContainer = styled.div<IBSpaceProps & { gap: number }>`
  display: ${p => (p.fluid ? 'flex' : 'inline-flex')};
  flex-direction: ${p => (p.vertical ? 'column' : 'row')};
  justify-content: ${p => (p.vertical ? p.vAlign : p.hAlign)};
  align-items: ${p => (p.vertical ? p.hAlign : p.vAlign)};
  gap: ${p => `${p.gap}px`};
  height: ${p => (p.fluid ? '100%' : 'unset')};
`;

const gapSize = {
  small: 2,
  medium: 6,
  large: 12,
  xLarge: 18,
  none: 0,
};
const IBSpace: FC<IBSpaceProps> = ({
  size,
  customSize,
  children,
  fluid = false,
  hAlign: align = 'start',
  vAlign: justify = 'start',
  vertical = false,
  style,
}) => {
  const sizeIsNumber = typeof size === 'number';
  const gap = sizeIsNumber ? size : gapSize[size || 'none'];
  console.log('gap', gap);
  console.log('customSize', customSize);

  const items = React.Children.toArray(children).map(c => {
    return c;
  });

  return (
    <SpaceContainer
      className="ib-space"
      gap={customSize ?? gap}
      size={size}
      hAlign={align}
      vAlign={justify}
      vertical={vertical}
      style={style}
      fluid={fluid}
    >
      {items}
    </SpaceContainer>
  );
};

export { IBSpace };
