import React, { useState } from 'react';
import { FileExplorerTabContentWrapper, HorizontalDecorativeLine } from './styles';
import { ListBox } from '../controls/list-box';
import { FileListBoxItem, FileToolbar, FileBreadcrumb } from './widgets';

// TODO: Replace mock data
import { FileListSource } from '../mock-data/files-source';
const breadcrumbs = ['Home', 'Users', 'Source', 'flutter'];

const LIST_BOX_ITEM_HEIGHT_PX = 50;

export function FileExplorerTabContent() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <FileExplorerTabContentWrapper>
      <FileBreadcrumb itemsSource={breadcrumbs} />
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
