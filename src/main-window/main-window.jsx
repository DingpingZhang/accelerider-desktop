import React from 'react';
import { connect } from 'react-redux';
import logo from '../images/logo.svg';
import { TabControl, TabItem, Window } from '../controls';
import { FileExplorerTabItem } from '../file-explorer';
import { MainTabHeaderItem } from './main-tab-header-item';
import { GroupTabItem } from '../group/group-tab-item';
import { setSelectedFeatureIndexAction } from './store/actionCreators';

function MainWindow({ selectedFeatureIndex, setSelectedFeatureIndex }) {
  return (
    <Window icon={logo} title="Accelerider for Desktop">
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
        <TabItem header={{ icon: 'folders', text: 'Net-Disk' }}>
          <FileExplorerTabItem />
        </TabItem>
        <TabItem header={{ icon: 'tasks', text: 'Tasks' }}>TODO</TabItem>
        <TabItem header={{ icon: 'people', text: 'Groups' }}>
          <GroupTabItem />
        </TabItem>
      </TabControl>
    </Window>
  );
}

const mapStateToProps = state => ({
  selectedFeatureIndex: state.mainWindow.get('selectedFeatureIndex')
});

const mapDispatchToProps = dispatch => ({
  setSelectedFeatureIndex: index => dispatch(setSelectedFeatureIndexAction(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainWindow);
