import React from 'react';
import { connect } from 'react-redux';
import { fetchFileListAction } from '../store/actionCreators';
import { FileToolbarWrapper, FileToolbarButton } from './styles';
import { Icon } from '../../controls';
import { IconButton, GridItem } from '../../controls';
import '../../fonts/iconfont.css';

const butttonIconStyle = {
  margin: '0 8px 0 0'
};

function FileToolbar({ fetchFileList }) {
  return (
    <FileToolbarWrapper>
      <FileToolbarButton>
        <Icon type="download" style={butttonIconStyle} />
        Download
      </FileToolbarButton>
      <FileToolbarButton>
        <Icon type="upload" style={butttonIconStyle} />
        Upload
      </FileToolbarButton>
      <FileToolbarButton>
        <Icon type="share" style={butttonIconStyle} />
        Share
      </FileToolbarButton>
      <FileToolbarButton>
        <Icon type="delete" style={butttonIconStyle} />
        Delete
      </FileToolbarButton>
      <GridItem col={5}>
        <IconButton type="refresh" onClick={() => fetchFileList('./')} />
      </GridItem>
    </FileToolbarWrapper>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  fetchFileList: path => dispatch(fetchFileListAction(path))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileToolbar);
