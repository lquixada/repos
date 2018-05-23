import pkg from '../../../package.json';

export default ({styles, html}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="version" content="${pkg.version}">
      <title>Facebook Repos</title>
      ${styles}
    </head>

    <body>
      <div id="app">${html}</div>
    </body>
  </html>
`);
