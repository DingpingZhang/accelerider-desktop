import styled from "styled-components";

export const TabControl = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const TabHeaderPanel = styled.div`
  width: ${props.headerWidth};
  height: 100%;
  background: ${props.headerBackground};
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const TabHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 4px 1fr;
  width: ${props.headerWidth};
  height: ${props.headerItemHeight};
  color: white;
  background: transparent;
  cursor: pointer;
  &.selected {
    background: #3a4576;
  }
`;

export const TabHeaderDecorativeLine = styled.div`
  width: 4px;
  height: ${props.headerItemHeight};
  background: transparent;
  &.selected {
    background: #9fa4fe;
  }
`;

export const TabHeaderContent = styled.div`
  padding: 4px;
  text-align: center;
  align-content: center;
  user-select: none;
`;
