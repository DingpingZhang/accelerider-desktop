import styled from 'styled-components';

export const GroupTabHeaderItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 20px auto 12px 1fr 8px auto 14px;
  grid-template-rows: 1fr auto 8px auto 1fr;
  align-items: center;
  width: 270px;
  height: 60px;
  box-sizing: border-box;
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

export const GroupTabPanelWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 270px;
  height: 100%;
`;

export const GroupTabContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr auto;
  margin: 0 28px;
  box-sizing: border-box;
  height: 100%;
`;

export const HorizontalDecorativeLine = styled.div`
  width: 100%;
  height: 2px;
  background: #f1f2f4;
`;
