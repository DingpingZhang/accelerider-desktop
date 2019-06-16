import styled from 'styled-components';

export const GroupTabHeaderItemWrapper = styled.div`
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

export const GroupTabContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto calc(100vh - 186px);
  margin: 48px 28px 0px 28px;
  box-sizing: border-box;
  height: calc(100% - 48px);
  background: white;
`;

export const HorizontalDecorativeLine = styled.div`
  width: 100%;
  height: 2px;
  background: #f1f2f4;
`;
