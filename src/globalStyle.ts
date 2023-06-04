import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sigmar&display=swap');
  :root {
    --background-color: rgb(20, 22, 40); // purple
    --white-color: rgb(255, 255, 255); //white
    --contrast-color: #D8489F; //pink
    --transparent-color-background: #4C243B //transparent purple
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ul li{
    list-style: none;
  }

  body {
    background-color: var(--background-color);
    color: var(--color-text);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Sigmar', cursive;
  }

  h1 {
    font-family: 'Sigmar', cursive;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
