import { createGlobalStyle } from 'styled-components';
import wallpaperDark from 'assets/images/wallpaper_dark.jpg';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-image: url(${wallpaperDark});
    background-size: cover;
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    letter-spacing: 0.05em;

    * {
      margin: 0;
      padding: 0;
      font-family: 'Nunito', sans-serif;
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
