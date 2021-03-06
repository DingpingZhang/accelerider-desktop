import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FileBreadcrumbWrapper, BreadcrumbThumb } from './styles';
import { Icon } from '../../controls';
import '../../fonts/iconfont.css';

export function FileBreadcrumb({ itemsSource, children }) {
  const items = itemsSource || children;
  return (
    <FileBreadcrumbWrapper>
      {items.map((item, index) => (
        <Fragment key={index}>
          <BreadcrumbThumb>{item}</BreadcrumbThumb>
          <Icon type="right-arrow" />
        </Fragment>
      ))}
    </FileBreadcrumbWrapper>
  );
}

FileBreadcrumb.propTypes = {
  itemsSource: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.arrayOf(PropTypes.string)
};
