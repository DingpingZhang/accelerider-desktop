import React from 'react';
import { TabControl, TabItem, SearchBox, ListBox } from '../controls';
import { FileExplorerTabHeaderItem } from './file-explorer-tab-header-item';
import { FileExplorerTabContent } from './file-explorer-tab-content';
import { NetDiskSwitcher } from './widgets/net-disk-switcher';

export function FileExplorerTabItem() {
  return (
    <TabControl
      tabPanelBackground="white"
      renderHeaderItem={(data, isSelected) => (
        <FileExplorerTabHeaderItem isSelected={isSelected}>{data}</FileExplorerTabHeaderItem>
      )}
      renderTabPanel={headers => (
        <NetDiskSwitcher
          content={
            <ListBox
              itemsSource={['Baidu Cloud', 'Six Cloud', 'OneDrive', '115 Net Disk']}
              itemHeight={48}
              renderItem={(data, isSelected) => (
                <FileExplorerTabHeaderItem isSelected={isSelected}>{data}</FileExplorerTabHeaderItem>
              )}
            />
          }
        >
          <SearchBox placeholder="Search" />
          {headers}
        </NetDiskSwitcher>
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
