import { mergeStyles, useTheme } from '@fluentui/react';
import { Icon } from '@fluentui/react/lib/Icon';
import React, { FC, ReactNode } from 'react';
import { IBStatusType } from 'src/theme/type';
import { IBBox } from '../Box/Box';
import { IBSpace } from '../Space/Space';

export type IBResultProps = {
  status?: IBStatusType;
  icon?: ReactNode | undefined;
  header?: ReactNode;
  subHeader?: ReactNode;
  extra?: ReactNode;
  children?: ReactNode;
};

const iconClass = mergeStyles({
  fontSize: 80,
  minWidth: 80,
  margin: 'auto',
});

const IBResult: FC<IBResultProps> = ({
  status,
  header,
  icon: CustomIcon,
  subHeader,
  extra,
  children,
}) => {
  const theme = useTheme();
  const IconStatusMap = {
    success: {
      icon: 'SkypeCircleCheck',
      bg: theme.semanticColors.successBackground,
      color: theme.semanticColors.successIcon,
    },
    error: {
      icon: 'StatusErrorFull',
      bg: theme.semanticColors.errorBackground,
      color: theme.semanticColors.errorIcon,
    },
    info: {
      icon: 'InfoSolid',
      bg: theme.semanticColors.infoBackground,
      color: theme.semanticColors.infoIcon,
    },
    warning: {
      icon: 'WarningSolid',
      bg: theme.semanticColors.warningBackground,
      color: theme.semanticColors.warningIcon,
    },
  };
  const icon = status ? IconStatusMap[status] : undefined;
  return (
    <IBBox py={48} px={32} className="ib-result">
      <IBBox width="100%">
        <IBSpace vertical size="small" hAlign="center" fluid vAlign="center">
          {CustomIcon && CustomIcon}
          {!CustomIcon && status && icon && (
            <IBBox width={80} height={80}>
              <Icon
                className={iconClass}
                style={{ color: icon.color, marginBottom: 24 }}
                iconName={icon.icon}
              />
            </IBBox>
          )}
          {header && (
            <IBBox>
              <p style={{ margin: '0 0 2px', fontSize: 24, lineHeight: '1.8' }}>
                {header}
              </p>
            </IBBox>
          )}
          {subHeader && (
            <IBBox>
              <div
                style={{
                  color: theme.palette.neutralTertiary,
                  fontSize: 14,
                  lineHeight: '1.6',
                }}
              >
                {subHeader}
              </div>
            </IBBox>
          )}
          {extra && <IBBox mt={24}>{extra}</IBBox>}
          {children && (
            <IBBox
              mt={24}
              py={24}
              px={40}
              bg={theme.palette.neutralLighterAlt}
              width="100%"
            >
              {children}
            </IBBox>
          )}
        </IBSpace>
      </IBBox>
    </IBBox>
  );
};

export { IBResult };
