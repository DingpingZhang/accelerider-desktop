import styled from 'styled-components';

export const FileListBoxItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  align-items: center;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  &.selected {
    background: #b1b5fe;
  }
  &.selected&:hover {
    background: #b1b5fe;
  }
  &:hover {
    background: #b1b5fe88;
  }
`;

export const FileListBoxItemContent = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr 100px 200px;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const FileListBoxItemText = styled.div`
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 12px;
  color: #333;
  height: 100%;
  margin: 0 20px;
`;

export const FileIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const ListItemHorizontalDecorativeLine = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  height: 2px;
  background: #f1f2f4;
`;

export const FileToolbarWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const FileToolbarButton = styled.button`
  width: 130px;
  height: 100%;
  margin: 0 4px 0 0;
  border-width: 0;
  color: #606060;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  &:hover {
    background: #b1b5fe88;
  }
  &:active {
    color: white;
    background: #b1b5fe;
  }
`;

export const FileBreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 24px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  color: #333;
  font-size: 14px;
  user-select: none;
`;

export const BreadcrumbThumb = styled.button`
  width: auto;
  height: auto;
  cursor: pointer;
  border-width: 0;
  background: transparent;
  outline: none;
  font-weight: bold;
  color: #414881;
  &:hover {
    color: #414881c0;
  }
  &:active {
    color: #a1a5ff;
  }
`;
