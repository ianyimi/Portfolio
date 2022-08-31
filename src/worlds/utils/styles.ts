import { css } from '@emotion/react';

export const globalStyles = css`

  @font-face {
    font-family: "Bosch";
    src: url("https://dqeczc7c9n9n1.cloudfront.net/fonts/Bosch.eot?") format("embedded-opentype"),
    url("https://dqeczc7c9n9n1.cloudfront.net/fonts/Bosch.woff") format("woff"),
    url("https://dqeczc7c9n9n1.cloudfront.net/fonts/Bosch.ttf") format("truetype");
  }
  @font-face {
    font-family: "Nafta";
    src: url("https://dqeczc7c9n9n1.cloudfront.net/fonts/nafta.eot?") format("embedded-opentype"),
    url("https://dqeczc7c9n9n1.cloudfront.net/fonts/nafta.woff") format("woff"),
    url("https://dqeczc7c9n9n1.cloudfront.net/fonts/nafta.ttf") format("truetype");
  }
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
    overflow: hidden;
  }

  canvas,
  html,
  body {
    widht: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
	  font-display: optional;
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

  /* ===== Scrollbar CSS ===== */
  /* Firefox */

  * {
    scrollbar-width: auto;
    scrollbar-color: #ffffff #000000;
  }

  /* Chrome, Edge, and Safari */

  *::-webkit-scrollbar {
    width: 18px;
  }

  *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    margin: 0 5px 0;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    border: none;
  }
`;
