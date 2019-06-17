import styled from 'styled-components';

export const MessageSenderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: stretch;
  margin: 20px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 4px;
  background: white;
`;

export const MessageItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 16px 1fr;
  width: 100%;
`;

export const Avatar = styled.img.attrs(props => ({
  draggable: false
}))`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const MessageItemContent = styled.div`
  display: grid;
  grid-template-rows: auto 8px 1fr;
  grid-template-columns: auto 16px 1fr;
  margin: 0 10px 0 0;
  background: white;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px 10px 14px 10px;
`;
