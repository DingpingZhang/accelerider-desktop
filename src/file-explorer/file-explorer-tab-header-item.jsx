import React from 'react';
import { FileExplorerTabHeaderItemWrapper } from './styles';

export function FileExplorerTabHeaderItem(props) {
  const { children, isSelected } = props;

  return (
    <FileExplorerTabHeaderItemWrapper className={isSelected ? 'selected' : ''}>
      {children}
    </FileExplorerTabHeaderItemWrapper>
  );
}
