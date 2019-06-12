import React from 'react';
import { FileToolbarWrapper, FileToolbarButton } from './styles';

export function FileToolbar() {
  return (
    <FileToolbarWrapper>
      <FileToolbarButton>Download</FileToolbarButton>
      <FileToolbarButton>Upload</FileToolbarButton>
      <FileToolbarButton>Share</FileToolbarButton>
      <FileToolbarButton>Delete</FileToolbarButton>
    </FileToolbarWrapper>
  );
}
