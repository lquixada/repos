import assets from '../../public/assets.json';
import pkg from '../../../package.json';

export default ({state, styles, html}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="version" content="${pkg.version}">
      <title>Facebook Repos</title>

      <link href="${assets.app.css}" rel="stylesheet" />
      ${styles}
    </head>

    <body>
      <div id="app">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${state};
      </script>
      <script src="${assets.vendor.js}"></script>
      <script src="${assets.app.js}"></script>
    </body>
  </html>
`);
