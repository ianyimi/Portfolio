import { css } from '@emotion/react';

export const globalStyles = css`

  /* http://meyerweb.com/eric/tools/css/reset/ 
	 v2.0 | 20110126
	 License: none (public domain)
*/

  //html, body, div, span, applet, object, iframe,
  //h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  //a, abbr, acronym, address, big, cite, code,
  //del, dfn, em, img, ins, kbd, q, s, samp,
  //small, strike, strong, sub, sup, tt, var,
  //b, u, i, center,
  //dl, dt, dd, ol, ul, li,
  //fieldset, form, label, legend,
  //table, caption, tbody, tfoot, thead, tr, th, td,
  //article, aside, canvas, details, embed,
  //figure, figcaption, footer, header, hgroup,
  //menu, nav, output, ruby, section, summary,
  //time, mark, audio, video {
  //  //margin: 0;
  //  //padding: 0;
  //  //border: 0;
  //  //font-size: 100%;
  //  //font: inherit;
  //  vertical-align: baseline;
  //}

  /* HTML5 display-role reset for older browsers */

  //article, aside, details, figcaption, figure,
  //footer, header, hgroup, menu, nav, section {
  //  display: block;
  //}

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

  body {
    line-height: 1;
    vertical-align: baseline;
  }

  canvas {
    z-index: -1;
  }
`;
