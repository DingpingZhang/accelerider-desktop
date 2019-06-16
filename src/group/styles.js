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
