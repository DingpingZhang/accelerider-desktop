import React from 'react';
import {
  FileListBoxItemWrapper,
  FileListBoxItemContent,
  ListItemHorizontalDecorativeLine,
  FileIcon,
  FileListBoxItemText
} from './styles';
import { ItemDecorativeLine } from '../../controls/decorative-line';
import { GetFileIcon } from '../../images/file-types';

export function FileListBoxItem(props) {
  const { children, isSelected } = props;
  return (
    <FileListBoxItemWrapper className={isSelected ? 'selected' : ''}>
      <ItemDecorativeLine fill="#3f487f" className={isSelected ? 'selected' : ''} />
      <FileListBoxItemContent>
        <FileIcon src={GetFileIcon(children.fileName)} />
        <FileListBoxItemText>{children.fileName}</FileListBoxItemText>
        <FileListBoxItemText width="200px">{children.size}</FileListBoxItemText>
        <FileListBoxItemText width="250px">{children.modifiedTime}</FileListBoxItemText>
      </FileListBoxItemContent>
      <ListItemHorizontalDecorativeLine />
    </FileListBoxItemWrapper>
  );
}
