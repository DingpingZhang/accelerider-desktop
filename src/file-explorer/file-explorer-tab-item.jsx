import React from 'react';
import { connect } from 'react-redux';
import { TabControl, TabItem, SearchBox, ListBox } from '../controls';
import { FileExplorerTabHeaderItem } from './file-explorer-tab-header-item';
import FileExplorerTabContent from './file-explorer-tab-content';
import { NetDiskSwitcher } from './widgets/net-disk-switcher';
import {
  setSelectedFileTypeIndexAction,
  setSelectedNetDiskIndexAction,
  setIsSwitcherExpandedAction
} from './store/actionCreators';

function FileExplorerTabItem({
  selectedFileTypeIndex,
  setSelectedFileTypeIndex,
  selectedNetDiskIndex,
  setSelectedNetDiskIndex,
  isSwitcherExpanded,
  setIsSwitcherExpanded
}) {
  return (
    <TabControl
      selectedIndex={selectedFileTypeIndex}
      setSelectedIndex={setSelectedFileTypeIndex}
      tabPanelBackground="white"
      renderHeaderItem={(data, isSelected) => (
        <FileExplorerTabHeaderItem isSelected={isSelected}>{data}</FileExplorerTabHeaderItem>
      )}
      renderTabPanel={headers => (
        <NetDiskSwitcher
          isExpanded={isSwitcherExpanded}
          setIsExpanded={setIsSwitcherExpanded}
          content={
            <ListBox
              selectedIndex={selectedNetDiskIndex}
              setSelectedIndex={setSelectedNetDiskIndex}
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

const mapStateToProps = state => ({
  selectedFileTypeIndex: state.fileExplorer.get('selectedFileTypeIndex'),
  selectedNetDiskIndex: state.fileExplorer.get('selectedNetDiskIndex'),
  isSwitcherExpanded: state.fileExplorer.get('isSwitcherExpanded')
});

const mapDispatchToProps = dispatch => ({
  setSelectedFileTypeIndex: index => dispatch(setSelectedFileTypeIndexAction(index)),
  setSelectedNetDiskIndex: index => dispatch(setSelectedNetDiskIndexAction(index)),
  setIsSwitcherExpanded: value => dispatch(setIsSwitcherExpandedAction(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileExplorerTabItem);
