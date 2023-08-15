import React from 'react';
import * as S from './style';

export default function Header() {
  return(
    <S.Wrapper>
      <nav>
        <S.NavUl>
          <li><a href="/">손주</a></li>
          <li><a href="/register">회원가입</a></li>
          <li><a href="/login">로그인</a></li>
        </S.NavUl>
      </nav>
    </S.Wrapper>
  );
}