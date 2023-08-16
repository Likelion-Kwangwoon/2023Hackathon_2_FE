import React from 'react';
import * as S from './style';
import SearchedList from '../../components/searchedList';
import iconSearch from '../../assets/icon-search.png'
export default function MainPage() {
  return(
    <S.MainLayout>
    <S.SearchWrap>
      <S.SearchButton>
        <img
          src={iconSearch} 
          alt='검색 버튼'
          
        />
      </S.SearchButton>
      <S.SearchBar 
        placeholder='궁금한 내용을 검색해 주세요!'
      />
    </S.SearchWrap>
    <S.CategoryWrap>
      <S.BankingBtn>금융거래</S.BankingBtn>
      <S.KioskBtn>키오스크</S.KioskBtn>
      <S.ShoppingBtn>홈쇼핑</S.ShoppingBtn>
      <S.SmartPhoneBtn>스마트폰</S.SmartPhoneBtn>
      <S.SubwayBtn>지하철</S.SubwayBtn>
      <S.EcommerceBtn>쇼핑몰</S.EcommerceBtn>
      <S.BoardBtn>자유게시판</S.BoardBtn>
    </S.CategoryWrap>
    <SearchedList />
    </S.MainLayout>
  );
}