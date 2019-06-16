import React, { Fragment } from 'react';
import { TabControl, TabItem, SearchBox } from '../controls';
import { GroupTabHeaderItem } from './group-tab-header-item';
import { GroupTabContent } from './group-tab-content';

export function GroupTabItem() {
  return (
    <TabControl
      tabPanelBackground="white"
      renderHeaderItem={(data, isSelected) => (
        <GroupTabHeaderItem isSelected={isSelected}>{data}</GroupTabHeaderItem>
      )}
      renderTabPanel={headers => (
        <Fragment>
          <SearchBox placeholder="Search" />
          {headers}
        </Fragment>
      )}
    >
      <TabItem header="All Files">
        <GroupTabContent />
      </TabItem>
      <TabItem header="All Files">
        <GroupTabContent />
      </TabItem>
    </TabControl>
  );
}
