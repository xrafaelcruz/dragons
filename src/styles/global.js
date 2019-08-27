import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: #f5f5f5;
  }

  body,
  input,
  button {
    font-family: Arial, Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
