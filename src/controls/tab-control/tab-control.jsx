import React, { useState } from 'react';
import { TabControlWrapper, TabPanel, TabContent } from './styles';

const viewCache = {
  tabContents: []
};

export function TabControl(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const { children, tabPanelBackground, dataTemplate } = props;
  const dateTemplateProvider = dataTemplate || (data => data);

  if (!viewCache.tabContents[selectedIndex]) {
    viewCache.tabContents[selectedIndex] =
      children[selectedIndex].props.children;
  }

  const tabContent = viewCache.tabContents[selectedIndex];
  console.log(tabContent);
  console.log(`selectedIndex = ${selectedIndex}`);

  return (
    <TabControlWrapper>
      <TabPanel background={tabPanelBackground}>
        {children.map((item, index) => (
          <div key={index} onClick={() => setSelectedIndex(index)}>
            {dateTemplateProvider(item.props.header, selectedIndex === index)}
          </div>
        ))}
      </TabPanel>
      <TabContent>{tabContent}</TabContent>
    </TabControlWrapper>
  );
}
