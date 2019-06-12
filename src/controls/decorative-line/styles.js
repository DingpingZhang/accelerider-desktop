import styled from 'styled-components';

export const ItemDecorativeLine = styled.div`
  width: 4px;
  height: 100%;
  background: transparent;
  &.selected {
    background: ${props => props.fill || 'red'};
  }
`;