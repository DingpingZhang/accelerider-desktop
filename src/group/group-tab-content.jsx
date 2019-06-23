import React from 'react';
import { connect } from 'react-redux';
import { GroupTabContentWrapper } from './styles';
import { MessageSender } from './widgets/message-sender';
import { ListBox } from '../controls';
import { MessageItem } from './widgets/message-item';

import { MessagesSource } from '../mock-data/messages-source';
import { setMessageListScrollTopAction } from './store/actionCreators';

function GroupTabContent({ messageListScrollTop, setMessageListScrollTop }) {
  return (
    <GroupTabContentWrapper>
      <div />
      <ListBox
        scrollTop={messageListScrollTop}
        setScrollTop={setMessageListScrollTop}
        direction="column-reverse"
        itemsSource={MessagesSource}
        itemHeight={100}
        renderItem={(data, isSelected) => <MessageItem message={data} isSelected={isSelected} />}
      />
      <MessageSender />
    </GroupTabContentWrapper>
  );
}

const mapStateToProps = state => ({
  messageListScrollTop: state.group.get('messageListScrollTop')
});

const mapDispatchToProps = dispatch => ({
  setMessageListScrollTop: value => dispatch(setMessageListScrollTopAction(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupTabContent);
