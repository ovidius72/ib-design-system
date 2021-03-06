/* eslint-disable */
import { IPanelProps } from '@fluentui/react';
import React, { ReactNode } from 'react';

export type IBDoublePanelProps = {
  mainChildren: JSX.Element;
  subChildren?: JSX.Element;
  mainPanelOpen: boolean;
  subPanelOpen: boolean;
  mainPanelWidthNumber?: number;
  subPanelWidthNumber?: number;
  subHeaderText?: string;
  mainHeaderText?: string;
  handleDismissMainPanel?: () => void
  mainPanelHeader?: any;
  subPanelHeader?: any;
  mainPanelNavigation?: any;
  subPanelNavigation?: any;
} & IPanelProps;
