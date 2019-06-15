import React, { useState } from 'react';
import { TabControlWrapper, TabPanel, TabContent } from './styles';
import PropTypes from 'prop-types';

export function TabControl({ children, tabPanelBackground, renderTabPanel, renderHeaderItem }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedItem = children[selectedIndex];

  const headers = children.map((item, index) => {
    return (
      <div key={index} onClick={() => setSelectedIndex(index)}>
        {renderHeaderItem(item.props.header, selectedIndex === index)}
      </div>
    );
  });

  return (
    <TabControlWrapper>
      <TabPanel background={tabPanelBackground}>{renderTabPanel(headers)}</TabPanel>
      <TabContent>{selectedItem.props.children}</TabContent>
    </TabControlWrapper>
  );
}

TabControl.propTypes = {
  tabPanelBackground: PropTypes.string,
  renderTabPanel: PropTypes.func,
  renderHeaderItem: PropTypes.func
};

TabControl.defaultProps = {
  renderTabPanel: headers => headers,
  renderHeaderItem: data => data
};
