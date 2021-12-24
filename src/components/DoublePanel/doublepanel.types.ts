/* eslint-disable */
import { IPanelProps } from '@fluentui/react';
import React from 'react';

export type IBDoublePanelProps = {
  mainChildren: JSX.Element;
  subChildren?: JSX.Element;
  mainPanelOpen: boolean;
  subPanelOpen: boolean;
  mainPanelWidthNumber?: number;
  subPanelWidthNumber?: number;
  subHeaderText?: string;
  handleDismissMainPanel?: () => void
} & IPanelProps;
