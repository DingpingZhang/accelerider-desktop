import React from 'react';
import { FileExplorerTabItemWrapper } from './styles';
import { TabControl, TabItem } from '../controls/tab-control';
import { FileExplorerTabHeaderItem } from './file-explorer-tab-header-item';

export function FileExplorerTabItem(props) {
  return (
    <FileExplorerTabItemWrapper>
      <TabControl
        tabPanelBackground="white"
        dataTemplate={(data, isSelected) => (
          <FileExplorerTabHeaderItem isSelected={isSelected}>
            {data}
          </FileExplorerTabHeaderItem>
        )}
      >
        <TabItem header="All Files">All Files View Demo</TabItem>
        <TabItem header="Music">Music View Demo</TabItem>
        <TabItem header="Videos">Videos View Demo</TabItem>
        <TabItem header="Pictures">Pictures View Demo</TabItem>
        <TabItem header="Documents">Documents View Demo</TabItem>
      </TabControl>
    </FileExplorerTabItemWrapper>
  );
}
