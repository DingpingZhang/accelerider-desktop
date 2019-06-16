import React from 'react';
import { MessageItemWrapper, Avatar, MessageItemContent } from './styles';
import { GridItem, Text } from '../../controls';

export function MessageItem({ message, isSelected }) {
  const { avatar, sender, createdTime, content } = message;
  return (
    <MessageItemWrapper className={isSelected ? 'selected' : ''}>
      <Avatar src={avatar} />
      <GridItem col={2}>
        <MessageItemContent>
          <GridItem>
            <Text fontWeight="Bold" foreground="#414881">
              {sender}
            </Text>
          </GridItem>
          <GridItem col={2}>
            <Text foreground="#888">{createdTime}</Text>
          </GridItem>
          <GridItem row={2} col={0} colSpan={3}>
            <Text fontSize="14px" allowSelect>
              {content}
            </Text>
          </GridItem>
        </MessageItemContent>
      </GridItem>
    </MessageItemWrapper>
  );
}
