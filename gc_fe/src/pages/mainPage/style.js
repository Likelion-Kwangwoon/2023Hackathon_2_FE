import styled from 'styled-components';

export const MainLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SearchWrap = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 2px solid ${(props) => props.theme.action.black};
  border-radius: 25rem;
`
export const SearchBar = styled.input`
  flex: 1;
  border: none;
  border-radius: 25rem;
  outline: none;
  height: 90%;
  font-size: 30px;
  padding-right: 10px;
  & ::placeholder {
    font-size: 30px;
    font-style: ${(props) => props.theme.action.black};
  }
`
export const SearchButton = styled.button`
  border: none;
  width: 15%;
  padding: 8px 12px;
  border-radius: 25rem;
  color: #fff;
  
  img {
    width: 100%;
    height: auto;
    color: #fff;
  }
`
export const CategoryWrap = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(7, 2fr);
  gap: 10px; /* 여백 추가 */
`

export const CategoryButton = styled.button`
  height: 60px;
  width: 120px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.action.black};
  border-radius: 25rem;
  font-size: 20px;
  font-weight: bold;
  background-color: #E6E6E6;
`
export const BankingBtn = styled(CategoryButton)`
  color: ${(props) => props.theme.action.green};
`

export const KioskBtn = styled(CategoryButton)`
  color: ${(props) => props.theme.action.blue};
`

export const ShoppingBtn = styled(CategoryButton)`
  color: ${(props) => props.theme.action.red};
`

export const SmartPhoneBtn = styled(CategoryButton)`
  color: ${(props) => props.theme.action.yellow};
`

export const SubwayBtn = styled(CategoryButton)`
  color: ${(props) => props.theme.action.violet};
`

export const EcommerceBtn = styled(CategoryButton)`
  color: ${(props) => props.theme.action.pink};
`

export const BoardBtn = styled(CategoryButton)`
  font-style: ${(props) => props.theme.action.black};
`