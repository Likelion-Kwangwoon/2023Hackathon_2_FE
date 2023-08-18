import styled from 'styled-components';

export const RegisterWrapper = styled.section`
  margin: 60px auto 0;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h1 {
    transition: transform 0.3s ease;
    font-size:98px;
    
    a {
      color: ${(props) => props.theme.action.green} !important;
    }
  }

  h2 {
    font-size: 50px;
    line-height: normal;
  }
  li {
    font-size: 50px;
    margin: 10px 0;
  }
`

export const RegisterForm = styled.form`
  width: 979px;
  height: 440px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid #000;
  background-color: ${(props) => props.theme.action.gray};
  grid-template-rows: repeat(4, 1fr);
`

export const InputWrapper = styled.div`
  display: flex;
  label {
    font-size: 50px;
    line-height: normal;
    min-width: 300px;
    margin-right: 20px;
  }
  input {
    flex: 1;
    border: none;
    outline: none;
    height: 95%;
    font-size: 50px;
    padding-right: 10px;
    background-color: transparent;
    & ::placeholder {
      font-size: 30px;
      font-style: ${(props) => props.theme.action.black};
    }
  }
`

export const FormArea = styled.div`
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 수평 왼쪽 정렬 */
  justify-content: center; 
`

export const HeadArea = styled(FormArea)`
  border-radius: 30px 30px 0 0;
  border-bottom: 1px solid #000;
`

export const BodyArea = styled(FormArea)`
  border-bottom: 1px solid #000;
`

export const TailArea = styled(FormArea)`
  border-radius: 0 0 30px 30px;
`

export const RegisterBtn = styled.button`
  border-radius: 30px;
  width: 257px;
  height: 79px;
  flex-shrink: 0;
  color: ${(props) => props.theme.action.white};
  background-color: ${(props) => props.theme.action.green};
  font-size: 50px;
  line-height: normal;
`