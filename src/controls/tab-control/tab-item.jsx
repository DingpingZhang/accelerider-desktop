import React from 'react';
import PropTypes from 'prop-types';

export function TabItem() {
  return <div>{this.props.children}</div>;
}

TabItem.propTypes = {
  isSelected: PropTypes.bool.isRequired
};

TabItem.defaultProps = {
  isSelected: false
};
