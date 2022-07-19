import { css } from '@emotion/react';

export const globalStyles = css`

  @font-face {
    font-family: "Thunderstorm";
    src: url("https://dqeczc7c9n9n1.cloudfront.net/fonts/thunderstorm.eot?") format("embedded-opentype"),
    url("https://dqeczc7c9n9n1.cloudfront.net/fonts/thunderstorm.woff") format("woff"),
    url("https://dqeczc7c9n9n1.cloudfront.net/fonts/thunderstorm.ttf") format("truetype");
  }
  @font-face {
    font-family: "Bitmap";
    src: url("https://dqeczc7c9n9n1.cloudfront.net/fonts/bitmap1.eot?") format("embedded-opentype"),
    url("https://dqeczc7c9n9n1.cloudfront.net/fonts/bitmap1.woff") format("woff"),
    url("https://dqeczc7c9n9n1.cloudfront.net/fonts/bitmap1.ttf") format("truetype");
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

  body {
    line-height: 1;
    vertical-align: baseline;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  canvas {
    z-index: -1;
  }
`;
