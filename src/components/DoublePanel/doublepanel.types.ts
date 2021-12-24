/* eslint-disable */
import { IPanelProps } from '@fluentui/react';
import React from 'react';

export type IBDoublePanelProps = {
  mainChildren: JSX.Element;
  subChildren?: JSX.Element;
  isMainPanelOpen: boolean;
  isSubPanelOpen: boolean;
  toggleMainPanel: (value?: boolean) => void;
  toggleSubPanel: (value?: boolean) => void;
  mainPanelWidthNumber?: number;
  subPanelWidthNumber?: number;
  subHeaderText?: string;
} & IPanelProps;
