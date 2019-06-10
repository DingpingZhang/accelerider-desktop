import styled from "styled-components";

export const TabControl = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const TabHeaderPanel = styled.div`
  width: 64px;
  height: 100%;
  background: #293851;
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainTabHeaderWrapper = styled.div`
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
`;

export const MainTabHeaderDecorativeLine = styled.div`
  width: 4px;
  height: 52px;
  background: transparent;
  &.selected {
    background: #9fa4fe;
  }
`;

export const MainTabHeaderContent = styled.div`
  padding: 4px;
  text-align: center;
  align-content: center;
  user-select: none;
`;
