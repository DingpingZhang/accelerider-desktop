import React from 'react';
import { GroupTabHeaderItemWrapper } from './styles';
import { GridItem } from '../controls';
import { Avatar } from './widgets';

export function GroupTabHeaderItem({ children, avatar, isSelected }) {
  return (
    <GroupTabHeaderItemWrapper className={isSelected ? 'selected' : ''}>
      <GridItem col={1}>
        <Avatar src={avatar} />
      </GridItem>
      <GridItem col={3}>{children}</GridItem>
    </GroupTabHeaderItemWrapper>
  );
}
