import styled from 'styled-components';

export const TabControlWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const TabPanel = styled.div`
  height: 100%;
  background: ${props => props.background || 'transparent'};
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
`;
