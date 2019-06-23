import React from 'react';
import { connect } from 'react-redux';
import { FileExplorerTabContentWrapper, HorizontalDecorativeLine } from './styles';
import { ListBox } from '../controls';
import { FileListBoxItem, FileToolbar, FileBreadcrumb } from './widgets';

// TODO: Replace mock data
import { FileListSource } from '../mock-data/files-source';
import { setSelectedFileIndexAction } from './store/actionCreators';
const breadcrumbs = ['Home', 'Users', 'Source', 'flutter'];

const LIST_BOX_ITEM_HEIGHT_PX = 50;

function FileExplorerTabContent({ selectedFileIndex, setSelectedFileIndex }) {
  return (
    <FileExplorerTabContentWrapper>
      <FileBreadcrumb itemsSource={breadcrumbs} />
      <FileToolbar />
      <HorizontalDecorativeLine />
      <ListBox
        itemHeight={LIST_BOX_ITEM_HEIGHT_PX}
        selectedIndex={selectedFileIndex}
        setSelectedIndex={setSelectedFileIndex}
        itemsSource={FileListSource}
        renderItem={(data, isSelected) => (
          <FileListBoxItem
            isSelected={isSelected}
            onDoubleClick={() => {
              /* TODO */
            }}
          >
            {data}
          </FileListBoxItem>
        )}
      />
    </FileExplorerTabContentWrapper>
  );
}

const mapStateToProps = state => ({
  selectedFileIndex: state.fileExplorer.get('selectedFileIndex')
});

const mapDispatchToProps = dispatch => ({
  setSelectedFileIndex: index => dispatch(setSelectedFileIndexAction(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileExplorerTabContent);
