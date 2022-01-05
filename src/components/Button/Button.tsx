import { DefaultButton, IButtonProps, PrimaryButton } from '@fluentui/react';
import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { ButtonInner } from './ButtonInner';

export type IBButtonProps = {
  /** Show the loading spinner. */
  loading?: boolean;
  /** The text. */
  text: string;
  /** Variant type. */
  variant?: 'primary' | 'default';
  /** fill the available space */
  fluid?: boolean;
} & IButtonProps;

const StyledPrimaryButton = styled(PrimaryButton)`
  background: ${p => p.theme.palette.primaryButtonBackgroungGradiend};
  border: none;
  transition: all 0.4s ease-out;
  &:hover {
    transition: all 0.4s ease-in;
    background: ${p => p.theme.palette.primaryButtonBackgroungGradiendHovered};
    background-image: ${p =>
      p.theme.palette.primaryButtonBackgroungGradiendHovered};
    border: none;
  }
  &:focus {
    transition: all 0.4s ease-in;
    background: ${p => p.theme.palette.primaryButtonBackgroungGradiendFocuses};
    background-image: ${p =>
      p.theme.palette.primaryButtonBackgroungGradiendFocuses};
    border: none;
  }
  &:active {
    transition: all 0.4s ease-in;
    background: ${p => p.theme.palette.primaryButtonBackgroungGradiendPressed};
    border: none;
  }
`;

const IBButton: FC<IBButtonProps> = props => {
  const {
    loading = false,
    variant = 'default',
    text,
    fluid = false,
    ...rest
  } = props;

  const ButtonType = useMemo(() => {
    return variant === 'default' ? DefaultButton : (StyledPrimaryButton as any);
  }, [variant]);

  const buttonInner = useMemo(() => {
    return <ButtonInner text={text} loading={loading} />;
  }, [text, loading]);

  return (
    <ButtonType {...rest} style={{ width: fluid ? '100%' : 'unset' }}>
      {buttonInner}
    </ButtonType>
  );
};

export { IBButton };
