import styled from 'styled-components';

export const RegisterWrapper = styled.section`
  margin: 200px auto 0;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    transition: transform 0.3s ease;
    font-weight: 850;
    font-size:98px;
    
    a {
      color: ${(props) => props.theme.action.green} !important;
    }
  }

  h2 {
    font-size: 50px;
    font-weight: 600;
    line-height: normal;
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

export const FormArea = styled.div`
  height: 100px;
  border: 1px solid #000;
`

export const HeadArea = styled(FormArea)`
`

export const BodyArea = styled(FormArea)`
`

export const TailArea = styled(FormArea)`
`