import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 body {
   background-color: #F5F7F9;
 }

  @font-face {
    font-family: Bello;
    src: url("fonts/bello-script.ttf");
  }

  @font-face {
    font-family: Proxima Nova;
    src: url("fonts/proxima-nova-regular.ttf");
  }
`;

export default GlobalStyle;
