import { IStackTokens, Spinner, SpinnerSize, Stack } from '@fluentui/react';
import React, { FC } from 'react';

export type ButtonInnerProps = {
  loading?: boolean;
  text?: string;
};

const buttonStackTokens: IStackTokens = { childrenGap: 5 };

const ButtonInner: FC<ButtonInnerProps> = ({ text, loading }) => {
  return (
    <Stack
      verticalAlign="center"
      horizontalAlign="center"
      tokens={buttonStackTokens}
      horizontal
    >
      {loading && (
        <Stack.Item align="center">
          <Spinner size={SpinnerSize.small} />
        </Stack.Item>
      )}
      <Stack.Item>
        <div>{text}</div>
      </Stack.Item>
    </Stack>
  );
};

export { ButtonInner };
