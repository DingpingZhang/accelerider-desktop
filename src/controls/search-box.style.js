import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: stretch;
  height: 30px;
  margin: 20px;
  box-sizing: border-box;
  border-radius: 4px;
  background: #f1f2f4;
`;

export const TextBox = styled.input`
  background: transparent;
  outline: none;
  border-width: 0;
  margin: 0 8px;
  padding: 0;
`;
