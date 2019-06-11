import styled from 'styled-components';

export const Window = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const WindowTitleBar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 36px;
  color: white;
  background: #3f487f;
  user-select: none;
`;

export const WindowTitleBarIcon = styled.img`
  height: 36px;
  width: 36px;
`;

export const WindowTitleBarTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WindowCommandButton = styled.button`
  width: 48px;
  height: 36px;
  margin: 0 2px;
  border-width: 0;
  color: white;
  background: transparent;
  cursor: pointer;
  outline: none;
  &.close&:hover {
    background: red;
  }
  &.close&:active {
    background: #ff000088;
  }
  &:hover {
    background: #2b385288;
  }
  &:active {
    background: #2b3852;
  }
`;

export const WindowContent = styled.div`
  height: 100%;
  background: #f1f2f4;
`;
