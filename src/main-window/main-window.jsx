import React from 'react';
import { connect } from 'react-redux';
import logo from '../images/logo.svg';
import { TabControl, TabItem, Window } from '../controls';
import { FileExplorerTabItem } from '../file-explorer';
import { GroupTabItem } from '../group';
import { MainTabHeaderItem } from './main-tab-header-item';
import { setSelectedFeatureIndexAction, setWindowStateAction } from './store/actionCreators';

function MainWindow({ windowState, setWindowState, selectedFeatureIndex, setSelectedFeatureIndex }) {
  return (
    <Window icon={logo} title="Accelerider for Desktop" windowState={windowState} setWindowState={setWindowState}>
      <TabControl
        selectedIndex={selectedFeatureIndex}
        setSelectedIndex={setSelectedFeatureIndex}
        tabPanelBackground="#2b3852"
        renderHeaderItem={(data, isSelected) => (
          <MainTabHeaderItem icon={data.icon} isSelected={isSelected}>
            {data.text}
          </MainTabHeaderItem>
        )}
      >
        <TabItem header={{ icon: 'people', text: 'Groups' }}>
          <GroupTabItem />
        </TabItem>
        <TabItem header={{ icon: 'folders', text: 'Net-Disk' }}>
          <FileExplorerTabItem />
        </TabItem>
        {/* <TabItem header={{ icon: 'tasks', text: 'Tasks' }}>TODO</TabItem> */}
      </TabControl>
    </Window>
  );
}

const mapStateToProps = state => ({
  selectedFeatureIndex: state.mainWindow.get('selectedFeatureIndex'),
  windowState: state.mainWindow.get('windowState')
});

const mapDispatchToProps = dispatch => ({
  setSelectedFeatureIndex: index => dispatch(setSelectedFeatureIndexAction(index)),
  setWindowState: state => dispatch(setWindowStateAction(state))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWindow);
