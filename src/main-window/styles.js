import styled from 'styled-components';

export const MainTabHeaderItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 4px 1fr;
  width: 64px;
  height: 52px;
  color: white;
  background: transparent;
  cursor: pointer;
  &.selected {
    background: #3a4576;
  }
  &.selected&:hover {
    background: #3a4576;
  }
  &:hover {
    background: #3a457688;
  }
`;

export const MainTabHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  user-select: none;
`;
