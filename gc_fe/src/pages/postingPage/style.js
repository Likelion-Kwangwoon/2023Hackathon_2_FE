import styled from 'styled-components';

export const PostWrapper = styled.section`
  min-width: 1920px;
  min-height: 900px;
`

export const UploadForm = styled.form`
  grid-template-rows: 1fr 2fr 1fr;
  display: flex;
  font-size: 25px;
  min-height: 900px;
`

export const FormWrapper = styled.div`
  position: static;
  margin: 0px;
  padding: 10px;
  font-size: 35px;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  div {
    padding: 10px;
    width: 90%;
    margin: 5px 0;
    
    img{
      width: 95%;
      max-width: 95%;
    }
    video {
      width: 95%;
      max-width: 95%;
    }
  }
  label {
    color: ${(props) => props.theme.action.blue};
    display: flex;
    text-align: left;
  }
  input {
    border-radius: 10px;
    border: 1px solid #000;
    background: #D9D9D9;
    width: 100%;
    height: 35px;
    margin: 5px 0;
  }
  select {
    border-radius: 10px;
    border: 1px solid #000;
    background: #D9D9D9;
    width: 101.5%;
    height: 39px;
    margin: 5px 0;
  }
  textarea {
    flex-grow: 1;
    border-radius: 10px;
    border: 1px solid #000;
    margin: 5px 0;
    background: #D9D9D9;
    width: 100%;
    height: 35px;
  }
`
export const FileInputContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const HiddenInput = styled.input.attrs({
  type: 'file',
})`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const CustomButton = styled.button`
  background-color: ${(props) => props.theme.action.blue};
  color: #fff;
  border: none;
  padding: 10px;
  width: 120px;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
`;
export const FirstWrapper = styled(FormWrapper)`
  width: 25%;
  h2 {
    font-size: 45px;
  }
  textarea {
    height: 99px;
  }
`


export const SecondWrapper = styled(FormWrapper)`
  width: 50%;
`

export const LastWrapper = styled(FormWrapper)`
  width: 25%;
  textarea {
    height: 760px;
  }
  
`

export const UploadBtn = styled.button`
  background-color: ${(props) => props.theme.action.blue};
  color: #fff;
  border: none;
  padding: 10px;
  width: 80px;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end;
`