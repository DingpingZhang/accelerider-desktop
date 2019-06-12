import React from 'react';
import { MainTabHeaderItemWrapper, MainTabHeaderContent } from './styles';
import { ItemDecorativeLine } from '../controls/item-decorative-line';

export function MainTabHeaderItem(props) {
  const { children, isSelected } = props;

  return (
    <MainTabHeaderItemWrapper className={isSelected ? 'selected' : ''}>
      <ItemDecorativeLine
        fill="#9fa4fe"
        className={isSelected ? 'selected' : ''}
      />
      <MainTabHeaderContent>{children}</MainTabHeaderContent>
    </MainTabHeaderItemWrapper>
  );
}
