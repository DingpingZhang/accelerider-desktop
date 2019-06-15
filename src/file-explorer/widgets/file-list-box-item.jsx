import React from 'react';
import {
  FileListBoxItemWrapper,
  FileListBoxItemContent,
  ListItemHorizontalDecorativeLine,
  FileIcon,
  FileListBoxItemText
} from './styles';
import { ItemDecorativeLine } from '../../controls';
import { GetFileIcon } from '../../images/file-types';

export function FileListBoxItem(props) {
  const { children, isSelected } = props;
  return (
    <FileListBoxItemWrapper className={isSelected ? 'selected' : ''}>
      <ItemDecorativeLine fill="#3f487f" className={isSelected ? 'selected' : ''} />
      <FileListBoxItemContent>
        <FileIcon src={GetFileIcon(children.fileName)} />
        <FileListBoxItemText>{children.fileName}</FileListBoxItemText>
        <FileListBoxItemText >{children.size}</FileListBoxItemText>
        <FileListBoxItemText >{children.modifiedTime}</FileListBoxItemText>
      </FileListBoxItemContent>
      <ListItemHorizontalDecorativeLine />
    </FileListBoxItemWrapper>
  );
}
