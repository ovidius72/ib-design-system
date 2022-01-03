import React, { FC } from 'react';
import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';

export type IBFlexProps = FlexboxProps;

const IBFlexStyled = styled.div`
  display: flex;
  ${flexbox}
`;

const IBFlex: FC<IBFlexProps> = ({ children, ...rest }) => {
  return <IBFlexStyled {...rest}>{children}</IBFlexStyled>;
};

export { IBFlex };
