import styled from 'styled-components';

export const NetDiskSwitcherWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
  &.expanded {
    grid-template-rows: 1fr auto auto;
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
  background: #ffffff80;
  z-index: 0;
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
  /* Sets the z-index prop so that It is able to be placed on top of the blur element. */
  z-index: 0;
  border-top: 1px solid #ccc;
  cursor: pointer;
  &.expanded {
    box-shadow: 0 -2px 10px #33333333;
  }
`;

export const ContentPresenter = styled.div`
  display: none;
  grid-row-start: 3;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 2;
  width: 100%;
  height: 350px;
  background: white;
  /* Sets the z-index prop so that It is able to be placed on top of the blur element. */
  z-index: 0;
  &.expanded {
    display: grid;
    grid-template-rows: 1fr;
  }
`;

export const BackgroundContentPresenter = styled.div`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
  &.expanded {
    filter: blur(2px);
    grid-row-end: 4;
  }
`;
