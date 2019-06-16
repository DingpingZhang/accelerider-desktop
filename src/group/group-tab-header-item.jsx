import React from 'react';
import { GroupTabHeaderItemWrapper } from './styles';

export function GroupTabHeaderItem({ children, isSelected }) {
  return <GroupTabHeaderItemWrapper className={isSelected ? 'selected' : ''}>{children}</GroupTabHeaderItemWrapper>;
}
