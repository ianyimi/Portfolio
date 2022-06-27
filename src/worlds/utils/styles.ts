import { css } from '@emotion/react';

const FONT = "https://dqeczc7c9n9n1.cloudfront.net/fonts/Thunderstorm.otf";

export const globalStyles = css`
  @font-face {
    font-family: "Thunderstorm";
    src: url("https://dqeczc7c9n9n1.cloudfront.net/fonts/Thunderstorm.otf") format("opentype");
  }
  @font-face {
    font-family: "Bitmap";
    src: url("https://dqeczc7c9n9n1.cloudfront.net/fonts/bitmap.otf") format("opentype");
  }

  html,
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  canvas,
  html,
  body {
    widht: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  canvas {
    z-index: -1;
  }

  //*:focus {
  //  outline-style: solid;
  //  outline-offset: -1px;
  //}
`;
