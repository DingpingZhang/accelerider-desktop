import React from 'react';
import { FileExplorerTabContentWrapper } from './styles';
import { ListBox } from '../controls/list-box';
import { FileListBoxItem } from './file-list-box-item';

const dataSource = [
  'file Name - 1.demo',
  'file Name - 1.demo',
  'file Name - 1.demo',
  'file Name - 1.demo',
  'file Name - 1.demo',
  'file Name - 1.demo',
  'file Name - 1.demo'
];

export function FileExplorerTabContent() {
  return (
    <FileExplorerTabContentWrapper>
      <ListBox
        itemsSource={dataSource}
        dataTemplate={(data, isSelected) => (
          <FileListBoxItem isSelected={isSelected}>{data}</FileListBoxItem>
        )}
      />
    </FileExplorerTabContentWrapper>
  );
}
