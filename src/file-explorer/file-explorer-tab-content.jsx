import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FileExplorerTabContentWrapper, HorizontalDecorativeLine } from './styles';
import { ListBox } from '../controls';
import { FileListBoxItem, FileToolbar, FileBreadcrumb } from './widgets';
import { setSelectedFileIndexAction, setFileListScrollTopAction, fetchFileListAction } from './store/actionCreators';

// TODO: Replace mock data
const breadcrumbs = ['Home', 'Users', 'Source', 'flutter'];

const LIST_BOX_ITEM_HEIGHT_PX = 50;

function FileExplorerTabContent({
  selectedFileIndex,
  setSelectedFileIndex,
  fileListScrollTop,
  setFileListScrollTop,
  fileList,
  fetchFileList
}) {
  useEffect(() => fetchFileList('/'), [fetchFileList]);

  return (
    <FileExplorerTabContentWrapper>
      <FileBreadcrumb itemsSource={breadcrumbs} />
      <FileToolbar />
      <HorizontalDecorativeLine />
      <ListBox
        itemHeight={LIST_BOX_ITEM_HEIGHT_PX}
        selectedIndex={selectedFileIndex}
        setSelectedIndex={setSelectedFileIndex}
        scrollTop={fileListScrollTop}
        setScrollTop={setFileListScrollTop}
        itemsSource={fileList}
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
  selectedFileIndex: state.fileExplorer.get('selectedFileIndex'),
  fileListScrollTop: state.fileExplorer.get('fileListScrollTop'),
  fileList: state.fileExplorer.get('fileList')
});

const mapDispatchToProps = dispatch => ({
  setSelectedFileIndex: index => dispatch(setSelectedFileIndexAction(index)),
  setFileListScrollTop: value => dispatch(setFileListScrollTopAction(value)),
  fetchFileList: path => dispatch(fetchFileListAction(path))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileExplorerTabContent);
