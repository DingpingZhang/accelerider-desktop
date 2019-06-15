import React, { Fragment } from 'react';
import { TabControl, TabItem, SearchBox } from '../controls';
import { FileExplorerTabHeaderItem } from './file-explorer-tab-header-item';
import { FileExplorerTabContent } from './file-explorer-tab-content';

export function FileExplorerTabItem() {
  return (
    <TabControl
      tabPanelBackground="white"
      renderHeaderItem={(data, isSelected) => (
        <FileExplorerTabHeaderItem isSelected={isSelected}>{data}</FileExplorerTabHeaderItem>
      )}
      renderTabPanel={headers => (
        <Fragment>
          <SearchBox placeholder="Search" />
          {headers}
        </Fragment>
      )}
    >
      <TabItem header="All Files">
        <FileExplorerTabContent />
      </TabItem>
      <TabItem header="Music">Music View Demo</TabItem>
      <TabItem header="Videos">Videos View Demo</TabItem>
      <TabItem header="Pictures">Pictures View Demo</TabItem>
      <TabItem header="Documents">Documents View Demo</TabItem>
    </TabControl>
  );
}
