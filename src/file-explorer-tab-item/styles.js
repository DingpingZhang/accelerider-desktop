import styled from 'styled-components';

export const FileExplorerTabHeaderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  width: 250px;
  height: 48px;
  cursor: pointer;
  user-select: none;
  &.selected {
    background: #f1f2f4;
  }
  &.selected&:hover {
    background: #f1f2f4;
  }
  &:hover {
    background: #f1f2f488;
  }
`;

export const FileExplorerTabContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto calc(100vh - 186px);
  margin: 48px 28px 0px 28px;
  box-sizing: border-box;
  height: calc(100% - 48px);
  background: white;
`;

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
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
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
  width: ${props => props.width || '100%'};
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

export const HorizontalDecorativeLine = styled.div`
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
  width: 120px;
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

export const FileBreadcrumbsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 24px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  color: #333;
  font-size: 14px;
`;
