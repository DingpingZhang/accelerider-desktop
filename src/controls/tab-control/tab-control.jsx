import React, { useState } from 'react';
import { TabControlWrapper, TabPanel, TabContent } from './styles';

export function TabControl(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { children, tabPanelBackground, renderHeaderItem } = props;
  const headerItemRenderer = renderHeaderItem || (data => data);
  const selectedItem = children[selectedIndex];

  return (
    <TabControlWrapper>
      <TabPanel background={tabPanelBackground}>
        {children.map((item, index) => {
          return (
            <div key={index} onClick={() => setSelectedIndex(index)}>
              {headerItemRenderer(item.props.header, selectedIndex === index)}
            </div>
          );
        })}
      </TabPanel>
      <TabContent>{selectedItem.props.children}</TabContent>
    </TabControlWrapper>
  );
}
