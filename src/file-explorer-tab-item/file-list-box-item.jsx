import React from 'react';
import { FileListBoxItemWrapper, FileListBoxItemContent } from './styles';
import { ItemDecorativeLine } from '../controls/item-decorative-line';

export function FileListBoxItem(props) {
  const { children, isSelected } = props;
  return (
    <FileListBoxItemWrapper className={isSelected ? 'selected' : ''}>
      <ItemDecorativeLine
        fill="#3f487f"
        className={isSelected ? 'selected' : ''}
      />
      <FileListBoxItemContent> {children}</FileListBoxItemContent>
    </FileListBoxItemWrapper>
  );
}
