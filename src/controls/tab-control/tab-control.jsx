import React from 'react';
import { TabControlWrapper, TabPanel, TabContent } from './styles';
import PropTypes from 'prop-types';

export function TabControl({
  selectedIndex,
  setSelectedIndex,
  itemsSource,
  children,
  tabPanelBackground,
  renderItem,
  renderHeaderItem,
  renderTabPanel
}) {
  const items = itemsSource || children;
  const renderedItems = renderItem ? items.map(renderItem) : items;
  const selectedItem = renderedItems[selectedIndex];

  const headers = renderedItems.map((item, index) => {
    return renderHeaderItem ? (
      <div key={index} onClick={() => setSelectedIndex(index)}>
        {renderHeaderItem(item.props.header, selectedIndex === index)}
      </div>
    ) : (
      item.props.header
    );
  });

  return (
    <TabControlWrapper>
      <TabPanel background={tabPanelBackground}>{renderTabPanel(headers, selectedIndex, setSelectedIndex)}</TabPanel>
      <TabContent>{selectedItem.props.children}</TabContent>
    </TabControlWrapper>
  );
}

TabControl.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  itemsSource: PropTypes.array,
  tabPanelBackground: PropTypes.string,
  renderItem: PropTypes.func,
  renderTabPanel: PropTypes.func,
  renderHeaderItem: PropTypes.func
};

TabControl.defaultProps = {
  renderTabPanel: headers => headers
};
