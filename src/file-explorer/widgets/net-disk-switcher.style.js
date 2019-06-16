import styled from 'styled-components';

export const NetDiskSwitcherWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
  &.expanded {
    grid-template-rows: 1fr 300px;
  }
`;

export const MaskBoard = styled.div`
  display: none;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;

  width: 100%;
  height: 100%;
  background: #ffffffcc;
  opacity: 0.9;
  &.expanded {
    display: block;
  }
`;

export const CurrentItemThumb = styled.div`
  display: grid;
  grid-template-columns: 20px auto 20px 1fr;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;

  width: 100%;
  height: 54px;
  background: white;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &.expanded {
    box-shadow: 0 2px 5px #33333333;
  }
`;

export const ContentPresenter = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
`;
