import React, { useState } from 'react';
import { FileExplorerTabContentWrapper, HorizontalDecorativeLine } from './styles';
import { ListBox } from '../../controls/list-box';
import { FileListBoxItem } from './file-list-box-item';
import { FileToolbar } from './file-toolbar';
import { FileBreadcrumbs } from './file-breadcrumbs';
import { FileListSource } from '../../mock-data/files-source';

const LIST_BOX_ITEM_HEIGHT_PX = 50;

export function FileExplorerTabContent() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <FileExplorerTabContentWrapper>
      <FileBreadcrumbs>Home > Users > zdp > source > flutter > dev</FileBreadcrumbs>
      <FileToolbar />
      <HorizontalDecorativeLine />
      <ListBox
        itemHeight={LIST_BOX_ITEM_HEIGHT_PX}
        itemsSource={FileListSource}
        selectedItem={selectedItem}
        renderItem={(data, isSelected) => (
          <FileListBoxItem isSelected={isSelected} onDoubleClick={() => setSelectedItem(data.fileName)}>
            {data}
          </FileListBoxItem>
        )}
      />
    </FileExplorerTabContentWrapper>
  );
}
