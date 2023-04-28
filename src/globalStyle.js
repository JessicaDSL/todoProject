import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #ec337a;
    --second-color: #F7FFF7;
    --terciary-color: #9395D3;
    --color-text: #540D6E;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }
`;