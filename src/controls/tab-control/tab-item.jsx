import React from 'react';
import PropTypes from 'prop-types';

export function TabItem(props) {
  return <div>{props.children}</div>;
}

TabItem.propTypes = {
  isSelected: PropTypes.bool.isRequired
};

TabItem.defaultProps = {
  isSelected: false
};
