import styled from 'styled-components';

export const ItemDecorativeLine = styled.div`
  width: 4px;
  height: 100%;
  background: transparent;
  &.selected {
    background: ${props => props.fill || 'red'};
  }
`;

export const Icon = styled.span.attrs(props => ({
  className: `iconfont icon-${props.type}`,
  style: {
    fontSize: props.size || '16px',
    margin: props.margin || 0
  }
}))``;
