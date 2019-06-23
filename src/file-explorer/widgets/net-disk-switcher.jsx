import React from 'react';
import PropTypes from 'prop-types';
import {
  NetDiskSwitcherWrapper,
  MaskBoard,
  CurrentItemThumb,
  ContentPresenter,
  BackgroundContentPresenter
} from './net-disk-switcher.style';

export function NetDiskSwitcher({ children, content, isExpanded, setIsExpanded }) {
  const status = isExpanded ? 'expanded' : '';
  return (
    <NetDiskSwitcherWrapper className={status}>
      <BackgroundContentPresenter className={status}>{children}</BackgroundContentPresenter>
      <MaskBoard className={status} onClick={() => setIsExpanded(false)} />
      <CurrentItemThumb className={status} onClick={() => setIsExpanded(!isExpanded)} />
      <ContentPresenter className={status}>{content}</ContentPresenter>
    </NetDiskSwitcherWrapper>
  );
}

NetDiskSwitcher.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  setIsExpanded: PropTypes.func.isRequired
};
