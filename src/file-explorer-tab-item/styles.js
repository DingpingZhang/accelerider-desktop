import styled from 'styled-components';

export const FileExplorerTabItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
`;

export const FileExplorerTabHeaderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  width: 250px;
  height: 48px;
  cursor: pointer;
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
