import React from 'react';
import logo from './images/logo.svg';
import { MainWindow } from './main-window';
import { TabControl, TabItem } from './controls/tab-control';
import { MainTabHeaderItem } from './main-tab-header-item';
import { FileExplorerTabItem } from './file-explorer-tab-item';

function App() {
  return (
    <MainWindow icon={logo} title="App Demo">
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
    </MainWindow>
  );
}

export default App;
