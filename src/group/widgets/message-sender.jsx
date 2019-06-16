import React from 'react';
import { MessageSenderWrapper } from './styles';
import { TextBox, IconButton } from '../../controls';

export function MessageSender({ placeholder }) {
  return (
    <MessageSenderWrapper>
      <TextBox type="text" placeholder={placeholder} />
      <IconButton type="send" />
    </MessageSenderWrapper>
  );
}
