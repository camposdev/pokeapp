import { createGlobalStyle } from 'styled-components';
import { palette } from 'styled-tools';

export default createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    margin: 0;
    min-height: 100vh;
    background-image: radial-gradient(${palette('primaryHighlight')}, ${palette(
  'primary'
)});
  }

  input,
  button {
    font-family: 'Montserrat', sans-serif;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
