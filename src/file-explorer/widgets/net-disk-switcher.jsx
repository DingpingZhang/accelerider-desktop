import React, { useState } from 'react';
import {
  NetDiskSwitcherWrapper,
  MaskBoard,
  CurrentItemThumb,
  ContentPresenter,
  BackgroundContentPresenter
} from './net-disk-switcher.style';

export function NetDiskSwitcher({ children, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const status = isExpanded ? 'expanded' : '';
  return (
    <NetDiskSwitcherWrapper className={status}>
      <BackgroundContentPresenter className={status}>{children}</BackgroundContentPresenter>
      <MaskBoard className={status} onClick={() => setIsExpanded(false)} />
      <ContentPresenter className={status}>{content}</ContentPresenter>
      <CurrentItemThumb className={status} onClick={() => setIsExpanded(!isExpanded)} />
    </NetDiskSwitcherWrapper>
  );
}
