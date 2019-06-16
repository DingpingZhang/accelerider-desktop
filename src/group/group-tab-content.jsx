import React, { useState } from 'react';
import { GroupTabContentWrapper } from './styles';
import { MessageSender } from './widgets/message-sender';
import { ListBox, GridItem } from '../controls';
import { MessageItem } from './widgets/message-item';

import { MessagesSource } from '../mock-data/messages-source';

export function GroupTabContent() {
  return (
    <GroupTabContentWrapper>
      <div />
      <ListBox
        itemsSource={MessagesSource}
        itemHeight={100}
        renderItem={(data, isSelected) => <MessageItem message={data} isSelected={isSelected} />}
      />
      <MessageSender />
    </GroupTabContentWrapper>
  );
}
