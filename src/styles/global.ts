import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #312E38 url(${githubBackground}) no-repeat 70% top;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  #root {
    max-width: 780px;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;
