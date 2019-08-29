import { createGlobalStyle, keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  [data-page],
  [data-component] {
    animation: ${show} 1.2s;
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
