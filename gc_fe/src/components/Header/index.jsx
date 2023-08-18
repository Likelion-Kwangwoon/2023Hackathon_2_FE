import React from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/store';

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.reducer.token);

  const guestMenu = 
  <S.NavUl> 
    <S.NavLogo><a href="/">손주</a></S.NavLogo>
    <S.Navli></S.Navli>
    <S.Navli><a href="/register">회원가입</a></S.Navli>
    <S.Navli><a href="/login">로그인</a></S.Navli>
  </S.NavUl>

  const memberMenu = 
  <S.NavUl> 
    <S.NavLogo><a href="/">손주</a></S.NavLogo>
    <S.Navli></S.Navli>
    <S.Navli><a href="/posting">강의 등록</a></S.Navli>
    <S.Navli><a href="/" onClick={dispatch(logOut([]))}>로그아웃</a></S.Navli>
  </S.NavUl>

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

