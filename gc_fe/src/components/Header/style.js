import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  max-width: 1920px;
  height: 100px;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: #ffffff;
  font-size: 48px;

  &.on {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px -10px;
  }
`;

export const NavUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`