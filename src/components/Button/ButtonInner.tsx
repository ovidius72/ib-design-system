import {
  IStackTokens,
  Spinner,
  SpinnerSize,
  Stack,
  useTheme,
} from '@fluentui/react';
import React, { FC } from 'react';

export type ButtonInnerProps = {
  loading?: boolean;
  text?: string;
  variant?: string;
};

const buttonStackTokens: IStackTokens = { childrenGap: 5 };

const ButtonInner: FC<ButtonInnerProps> = ({
  text,
  loading,
  variant = 'secondary',
}) => {
  const { palette } = useTheme();
  return (
    <Stack
      verticalAlign="center"
      horizontalAlign="center"
      tokens={buttonStackTokens}
      horizontal
    >
      {loading && (
        <Stack.Item align="center">
          <Spinner
            styles={{
              circle: {
                border:
                  '1.5px solid ' +
                  (variant === 'secondary'
                    ? palette.themeLighter
                    : palette.white),
                borderTopColor:
                  variant === 'secondary'
                    ? palette.white
                    : palette.themeLighter,
              },
            }}
            size={SpinnerSize.small}
          />
        </Stack.Item>
      )}
      <Stack.Item>
        <div>{text}</div>
      </Stack.Item>
    </Stack>
  );
};

export { ButtonInner };
