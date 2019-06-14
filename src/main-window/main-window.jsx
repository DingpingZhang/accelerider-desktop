import React from 'react';
import logo from '../images/logo.svg';
import { Window } from '../controls/window';
import { TabControl, TabItem } from '../controls/tab-control';
import { FileExplorerTabItem } from '../file-explorer';
import { MainTabHeaderItem } from './main-tab-header-item';

export function MainWindow() {
  return (
    <Window icon={logo} title="App Demo">
      <TabControl
        tabPanelBackground="#2b3852"
        renderHeaderItem={(data, isSelected) => (
          <MainTabHeaderItem isSelected={isSelected}>{data}</MainTabHeaderItem>
        )}
      >
        <TabItem header="Disk">
          <FileExplorerTabItem />
        </TabItem>
        <TabItem header="Tasks">Content - B</TabItem>
        <TabItem header="Group">Content - C</TabItem>
      </TabControl>
    </Window>
  );
}
