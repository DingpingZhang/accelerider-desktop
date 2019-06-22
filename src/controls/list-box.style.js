import styled from 'styled-components';

export const ListBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden overlay;

  /* ScrollBar for ListBox */
  &::-webkit-scrollbar {
    width: 10px;

    &-track {
      /* BUG: FUCK! It does NOT work, the background is always white. */
      /* May need to draw one with <div /> */
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

export const Placeholder = styled.div`
  width: 100%;
  /* height: ${props => props.scrollHeight || '100%'}; */
  position: relative;
`;

export const ListBoxItemWrapper = styled.div.attrs(props => ({
  style: {
    top: props.offsetTop || '0px'
  }
}))`
  width: 100%;
  position: absolute;
`;
