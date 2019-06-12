import React from 'react';
import logo from '../images/logo.svg';
import { Window } from '../controls/window';
import { TabControl, TabItem } from '../controls/tab-control';
import { FileExplorerTabItem } from '../file-explorer-tab-item';
import { MainTabHeaderItem } from './main-tab-header-item';

export function MainWindow(props) {
  return (
    <Window icon={logo} title="App Demo">
      <TabControl
        tabPanelBackground="#2b3852"
        dataTemplate={(data, isSelected) => (
          <MainTabHeaderItem isSelected={isSelected}>{data}</MainTabHeaderItem>
        )}
      >
        <TabItem header="Tab-A">
          <FileExplorerTabItem />
        </TabItem>
        <TabItem header="Tab-B">Content - B</TabItem>
        <TabItem header="Tab-C">Content - C</TabItem>
      </TabControl>
    </Window>
  );
}
