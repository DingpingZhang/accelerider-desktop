import React from 'react';
import { GroupTabHeaderItemWrapper } from './styles';
import { GridItem } from '../controls';
import { Avatar } from './widgets';
import styled from 'styled-components';

const SingleLineText = styled.div.attrs(props => ({
  style: {
    width: props.width,
    color: props.color || '#888',
    fontSize: props.fontSize || '12px'
  }
}))`
  display: inline-block;
  font-weight: normal;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export function GroupTabHeaderItem({ name, latestMessage, avatar, isSelected }) {
  return (
    <GroupTabHeaderItemWrapper className={isSelected ? 'selected' : ''}>
      <GridItem col={1} row={2}>
        <Avatar src={avatar} />
      </GridItem>
      <GridItem col={3} row={1}>
        <SingleLineText color="#333" fontSize="14px">{name}</SingleLineText>
      </GridItem>
      <GridItem col={5} row={1}>
        <SingleLineText width={'auto'}>
          {latestMessage.createdTime.toLocaleTimeString([], { hour12: false })}
        </SingleLineText>
      </GridItem>
      <GridItem col={3} row={3} colSpan={3}>
        <SingleLineText width={'180px'} fontSize="10px">{latestMessage.content}</SingleLineText>
      </GridItem>
    </GroupTabHeaderItemWrapper>
  );
}
