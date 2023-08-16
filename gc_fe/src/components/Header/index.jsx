import React from 'react';
import * as S from './style';

export default function Header() {
  return(
    <S.Wrapper>
      <S.NavWrap>
        <S.NavUl> 
          <S.NavLogo><a href="/">손주</a></S.NavLogo>
          <S.Navli></S.Navli>
          <S.Navli><a href="/register">회원가입</a></S.Navli>
          <S.Navli><a href="/login">로그인</a></S.Navli>
        </S.NavUl>
      </S.NavWrap>
    </S.Wrapper>
  );
}

