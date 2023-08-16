import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    text-align: center;
    max-width: 1920px;
    font-family: "Pretendard Variable";
    margin: 0 auto;
    -ms-overflow-style: none; 
    scrollbar-width: none;
    background-color: ${(props) => props.theme.beige};
  }

  button {
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  input, textarea {
    outline: none;
  }
`;