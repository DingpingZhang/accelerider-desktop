import React from 'react';
import { GroupTabContentWrapper } from './styles';
import { MessageSender } from './widgets/message-sender';
import { ListBox } from '../controls';
import { MessageItem } from './widgets/message-item';

import { MessagesSource } from '../mock-data/messages-source';

export function GroupTabContent() {
  return (
    <GroupTabContentWrapper>
      <div />
      <ListBox
        direction="column-reverse"
        itemsSource={MessagesSource}
        itemHeight={100}
        renderItem={(data, isSelected) => <MessageItem message={data} isSelected={isSelected} />}
      />
      <MessageSender />
    </GroupTabContentWrapper>
  );
}
