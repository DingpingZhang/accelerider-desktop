import React from 'react';
import logo from '../images/logo.svg';
import { Window } from '../controls/window';
import { TabControl, TabItem } from '../controls/tab-control';
import { FileExplorerTabItem } from '../file-explorer';
import { MainTabHeaderItem } from './main-tab-header-item';

export function MainWindow() {
  return (
    <Window icon={logo} title="Accelerider for Desktop">
      <TabControl
        tabPanelBackground="#2b3852"
        renderHeaderItem={(data, isSelected) => (
          <MainTabHeaderItem icon={data.icon} isSelected={isSelected}>
            {data.text}
          </MainTabHeaderItem>
        )}
      >
        <TabItem header={{ icon: 'folders', text: 'Net-Disk' }}>
          <FileExplorerTabItem />
        </TabItem>
        <TabItem header={{ icon: 'tasks', text: 'Tasks' }}>Content - B</TabItem>
        <TabItem header={{ icon: 'people', text: 'Groups' }}>Content - C</TabItem>
      </TabControl>
    </Window>
  );
}
