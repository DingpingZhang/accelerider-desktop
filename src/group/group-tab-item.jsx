import React from 'react';
import { TabControl, TabItem, SearchBox, ListBox } from '../controls';
import { GroupTabHeaderItem } from './group-tab-header-item';
import { GroupTabContent } from './group-tab-content';

import { GroupsSource } from '../mock-data/messages-source';
import { GroupTabPanelWrapper } from './styles';

export function GroupTabItem() {
  return (
    <TabControl
      tabPanelBackground="white"
      itemsSource={GroupsSource}
      renderItem={data => (
        <TabItem header={data}>
          <GroupTabContent />
        </TabItem>
      )}
      renderTabPanel={headers => (
        <GroupTabPanelWrapper>
          <SearchBox placeholder="Search" />
          <ListBox
            itemHeight={48}
            itemsSource={headers}
            renderItem={(data, isSelected) => (
              <GroupTabHeaderItem avatar={data.avatar} isSelected={isSelected}>
                {data.name}
              </GroupTabHeaderItem>
            )}
          />
        </GroupTabPanelWrapper>
      )}
    />
  );
}
