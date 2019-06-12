import React, { useState } from 'react';
import { FileExplorerTabContentWrapper, HorizontalDecorativeLine } from './styles';
import { ListBox } from '../controls/list-box';
import { FileListBoxItem } from './file-list-box-item';
import { FileToolbar } from './file-toolbar';
import { FilesSource } from './mock-data';
import { FileBreadcrumbs } from './file-breadcrumbs';

export function FileExplorerTabContent() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <FileExplorerTabContentWrapper>
      <FileBreadcrumbs>Home > Users > zdp > source > flutter > dev</FileBreadcrumbs>
      <FileToolbar />
      <HorizontalDecorativeLine />
      <ListBox
        itemsSource={FilesSource}
        dataTemplate={(data, isSelected) => (
          <div onDoubleClick={() => setSelectedItem(data.fileName)}>
            <FileListBoxItem isSelected={isSelected}>{data}</FileListBoxItem>
          </div>
        )}
      />
    </FileExplorerTabContentWrapper>
  );
}
