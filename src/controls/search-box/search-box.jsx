import React from 'react';
import { SearchBoxWrapper, TextBox } from './styels';
import { IconButton } from '../icon-button';
import '../../fonts/iconfont.css';

export function SearchBox({ placeholder }) {
  return (
    <SearchBoxWrapper>
      <TextBox type="text" placeholder={placeholder} />
      <IconButton type="search" />
    </SearchBoxWrapper>
  );
}
