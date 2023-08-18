import React from 'react';
import { Fragment } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/store';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token.token);

  const gotoMain = () => {
    navigate("/");
  }
  const gotoLogin = () => {
    navigate("/login");
  }
  const gotoInput = () => {
    navigate("/posting");
  }
  const gotoRegister = () => {
    navigate("/register");
  }
  const gotoLogOut = () => {
    dispatch(logOut([]))
    navigate("/")
  }
  const guestMenu = 
  <Fragment>
    <S.NavUl> 
      <S.NavLogo><span onClick={gotoMain}>손주</span></S.NavLogo>
      <S.Navli></S.Navli>
      <S.Navli><span onClick={gotoRegister}>회원가입</span></S.Navli>
      <S.Navli><span onClick={gotoLogin}>로그인</span></S.Navli>
    </S.NavUl>
  </Fragment>
  

  const memberMenu = 
  <Fragment>
    <S.NavUl> 
      <S.NavLogo><span onClick={gotoMain}>손주</span></S.NavLogo>
      <S.Navli></S.Navli>
      <S.Navli><span onClick={gotoInput}>강의 등록</span></S.Navli>
      <S.Navli><span  onClick={gotoLogOut}>로그아웃</span></S.Navli>
    </S.NavUl>
  </Fragment>
  
  return(
    <S.Wrapper>
      <S.NavWrap>
        {
          token ?
          memberMenu
          :
          guestMenu
        }
      </S.NavWrap>
    </S.Wrapper>
  );
}

