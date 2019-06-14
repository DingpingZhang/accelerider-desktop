import styled from 'styled-components';

export const ListBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: overlay;

  /* ScrollBar for ListBox */
  &::-webkit-scrollbar {
    width: 10px;
    margin: 0 4px;

    &-track {
      background: transparent;
    }

    &-thumb {
      border-radius: 5px;
      background: #33333333;
      border: 3px solid transparent;
      background-clip: padding-box;

      &:hover,
      &:active {
        border-width: 1px;
        background-color: #33333333;
      }
    }
  }
`;
