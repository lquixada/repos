import pkg from '../../package.json';

export default ({
  state, styleTags, content, assets, bundle
}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="version" content="${pkg.version}">
      <title>Facebook Repos</title>

      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link href="${assets.app.css}" rel="stylesheet" />
      ${styleTags}
      <script>
        window.__INITIAL_STATE__ = ${state};
      </script>
    </head>

    <body>
      <div id="app">${content}</div>
      <script src="${assets.vendor.js}"></script>
      <script src="${assets.app.js}"></script>
    </body>
  </html>
`);
