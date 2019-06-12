import React from 'react';
import {
  MainTabHeaderItemWrapper,
  MainTabHeaderDecorativeLine,
  MainTabHeaderContent
} from './styles';

export function MainTabHeaderItem(props) {
  const { children, isSelected } = props;

  return (
    <MainTabHeaderItemWrapper className={isSelected ? 'selected' : ''}>
      <MainTabHeaderDecorativeLine className={isSelected ? 'selected' : ''} />
      <MainTabHeaderContent>{children}</MainTabHeaderContent>
    </MainTabHeaderItemWrapper>
  );
}
