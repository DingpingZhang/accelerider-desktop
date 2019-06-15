import React from 'react';
import { MainTabHeaderItemWrapper, MainTabHeaderContent } from './styles';
import { ItemDecorativeLine } from '../controls/decorative-line';
import { Icon } from '../controls';
import '../fonts/iconfont.css';

export function MainTabHeaderItem({ children, isSelected, icon }) {
  return (
    <MainTabHeaderItemWrapper className={isSelected ? 'selected' : ''}>
      <ItemDecorativeLine fill="#9fa4fe" className={isSelected ? 'selected' : ''} />
      <MainTabHeaderContent>
        <Icon type={icon} margin="0 0 6px 0" />
        {children}
      </MainTabHeaderContent>
    </MainTabHeaderItemWrapper>
  );
}
