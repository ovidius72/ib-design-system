import React, { FC } from 'react';
import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';

export type IBFlexProps = FlexboxProps;

const Flex = styled.div`
  display: flex;
  ${flexbox}
`;

const IBFlex: FC<IBFlexProps> = ({ children, ...rest }) => {
  return <Flex {...rest}>{children}</Flex>;
};

export { IBFlex };
