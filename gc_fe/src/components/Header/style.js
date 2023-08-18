import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  max-width: 1920px;
  height: 100px;
  position: fixed;
  z-index: 10;
  top: 0;
  font-size: 40px;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid ${(props) => props.theme.action.black}; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
export const NavWrap = styled.nav`
  position: fixed;
  width: 100%;
  background-color: ${(props) => props.theme.action.white};
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const NavUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr 1fr;
  width: 100%;
  height: 100%;
`
export const NavLogo = styled.li`
  width: 100%;
  transition: transform 0.3s ease;
  font-size:60px;
  &:hover {
    transform: scale(1.1); /* 확대 비율 설정 */
  }
  span {
    color: ${(props) => props.theme.action.green} !important;
  }
`

export const Navli = styled.li`
  width: 100%;
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.05); /* 확대 비율 설정 */
  }
`