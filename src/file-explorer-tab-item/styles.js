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
  display: flex;
  flex-direction: column;
  margin: 48px 72px 0px 72px;
  box-sizing: border-box;
  height: calc(100% - 48px);
  background: white;
`;

export const FileListBoxItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  width: 100%;
  height: 52px;
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
