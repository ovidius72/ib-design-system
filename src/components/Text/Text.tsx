import React, { FC, HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  typography,
  TypographyProps,
} from 'styled-system';

const StyledText = styled.p`
  ${color};
  ${layout};
  ${typography}
`;

export type IBTextProps = HtmlHTMLAttributes<HTMLParagraphElement> &
  ColorProps &
  TypographyProps &
  LayoutProps;

const IBText: FC<IBTextProps> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export { IBText };
