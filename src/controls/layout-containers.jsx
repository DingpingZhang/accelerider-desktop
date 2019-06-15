import React from 'react';
import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridItem = styled.div.attrs(({ row = 0, col = 0, rowSpan = 0, colSpan = 0 }) => ({
  style: {
    gridRowStart: row + 1,
    gridRowEnd: row + 1 + rowSpan,
    gridColumnStart: col + 1,
    gridColumnEnd: col + 1 + colSpan
  }
}))``;
