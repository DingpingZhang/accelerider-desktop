import React, { useState } from 'react';
import { NetDiskSwitcherWrapper, MaskBoard, CurrentItemThumb, ContentPresenter } from './net-disk-switcher.style';

export function NetDiskSwitcher({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const status = isExpanded ? 'expanded' : '';
  return (
    <NetDiskSwitcherWrapper className={status}>
      <ContentPresenter>{children}</ContentPresenter>
      <MaskBoard className={status} onClick={() => setIsExpanded(false)} />
      <CurrentItemThumb className={status} onClick={() => setIsExpanded(!isExpanded)} />
    </NetDiskSwitcherWrapper>
  );
}
