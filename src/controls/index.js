import styled from 'styled-components';

export const Icon = styled.span.attrs(props => ({
  className: `iconfont icon-${props.type}`,
  style: {
    fontSize: props.size || '16px',
    margin: props.margin || 0
  }
}))``;
