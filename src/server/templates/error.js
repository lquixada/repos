export default ({helmet, styles, html}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
      ${styles}
    </head>

    <body>
      <div id="app">${html}</div>
    </body>
  </html>
`);
