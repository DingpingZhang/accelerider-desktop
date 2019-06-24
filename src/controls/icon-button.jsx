import React from 'react';
import styled from 'styled-components';
import { Icon } from './styles';

const Wrapper = styled.button`
  background: transparent;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  color: #333;
  &:hover {
    color: #414881;
  }
  &:active {
    color: #a1a5ff;
  }
`;

export function IconButton({ type, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Icon type={type} />
    </Wrapper>
  );
}
