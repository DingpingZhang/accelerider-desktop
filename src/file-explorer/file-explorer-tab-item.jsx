import React from 'react';
import { TabControl, TabItem } from '../controls/tab-control';
import { FileExplorerTabHeaderItem } from './file-explorer-tab-header-item';
import { FileExplorerTabContent } from './tab-content';

export function FileExplorerTabItem() {
  return (
    <TabControl
      tabPanelBackground="white"
      renderHeaderItem={(data, isSelected) => (
        <FileExplorerTabHeaderItem isSelected={isSelected}>
          {data}
        </FileExplorerTabHeaderItem>
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
