import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  :root {
    text-align: center;
    max-width: 1920px;
    margin: 0 auto;
    font-family: 'BMDOHYEON';
    -ms-overflow-style: none; 
    scrollbar-width: none;
    background-color: ${(props) => props.theme.beige};
  }

  button {
    font-family: 'BMDOHYEON';
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
  }

  a {
    font-family: 'BMDOHYEON';
    text-decoration: none;
    color: #000;
  }

  input, textarea {
    outline: none;
  }
`;