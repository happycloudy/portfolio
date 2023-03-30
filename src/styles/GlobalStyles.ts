import {createGlobalStyle} from "styled-components";
import {fonts} from "./constants/fonts";

export const GlobalStyles = createGlobalStyle`
  ${fonts}

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    font-family: 'Monserrat';
    color: ${({theme}) => theme.colors.black};
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  
  body {
    overflow: hidden;
  }
  
  ul, ol {
    list-style: none;
  }
`