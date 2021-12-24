import { DefaultButton, IButtonProps, PrimaryButton } from '@fluentui/react';
import React, { FC, useMemo } from 'react';
import { ButtonInner } from './ButtonInner';

export type IBButtonProps = {
  /** Show the loading spinner. */
  loading?: boolean;
  /** The text. */
  text: string;
  /** Variant type. */
  variant?: 'primary' | 'default';
} & IButtonProps;

const IBButton: FC<IBButtonProps> = props => {
  const { loading = false, variant = 'default', text, ...rest } = props;

  const ButtonType = useMemo(() => {
    return variant === 'default' ? DefaultButton : PrimaryButton;
  }, [variant]);

  const buttonInner = useMemo(() => {
    return <ButtonInner text={text} loading={loading} />;
  }, [text, loading]);

  return <ButtonType {...rest}>{buttonInner}</ButtonType>;
};

export { IBButton };
