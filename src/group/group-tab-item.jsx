import React from 'react';
import { connect } from 'react-redux';
import { TabControl, TabItem, SearchBox, ListBox } from '../controls';
import { GroupTabHeaderItem } from './group-tab-header-item';
import GroupTabContent from './group-tab-content';
import { GroupTabPanelWrapper } from './styles';
import { setContactListScrollTopAction, setSelectedContactIndexAction } from './store/actionCreators';

// TODO: Mock data
import { GroupsSource } from '../mocks/messages-source';

function GroupTabItem({
  contactListScrollTop,
  setContactListScrollTop,
  selectedContactIndex,
  setSelectedContactIndex
}) {
  return (
    <TabControl
      selectedIndex={selectedContactIndex}
      setSelectedIndex={setSelectedContactIndex}
      tabPanelBackground="white"
      itemsSource={GroupsSource}
      renderItem={data => (
        <TabItem header={data}>
          <GroupTabContent messages={data.messages} />
        </TabItem>
      )}
      renderTabPanel={(headers, selectedIndex, setSelectedIndex) => (
        <GroupTabPanelWrapper>
          <SearchBox placeholder="Search" />
          <ListBox
            scrollTop={contactListScrollTop}
            setScrollTop={setContactListScrollTop}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            itemHeight={60}
            itemsSource={headers}
            renderItem={(data, isSelected) => {
              return (
                <GroupTabHeaderItem
                  isSelected={isSelected}
                  avatar={data.avatar}
                  name={data.name}
                  latestMessage={data.messages.slice(-1)[0]}
                />
              );
            }}
          />
        </GroupTabPanelWrapper>
      )}
    />
  );
}

const mapStateToProps = state => ({
  contactListScrollTop: state.group.get('contactListScrollTop'),
  selectedContactIndex: state.group.get('selectedContactIndex')
});

const mapDispatchToProps = dispatch => ({
  setContactListScrollTop: value => dispatch(setContactListScrollTopAction(value)),
  setSelectedContactIndex: index => dispatch(setSelectedContactIndexAction(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupTabItem);
