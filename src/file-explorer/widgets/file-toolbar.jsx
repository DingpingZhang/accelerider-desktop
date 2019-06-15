import React from 'react';
import { FileToolbarWrapper, FileToolbarButton } from './styles';
import { Icon } from '../../controls';
import '../../fonts/iconfont.css';
import { IconButton, GridItem } from '../../controls';

const butttonIconStyle = {
  margin: '0 8px 0 0'
};

export function FileToolbar() {
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
        <IconButton type="refresh" />
      </GridItem>
    </FileToolbarWrapper>
  );
}
