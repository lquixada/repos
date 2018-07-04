import assets from '../../public/assets.json'
import config from '../../shared/config'

export default ({helmet, styles, html, state}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
      ${styles}
    </head>

    <body>
      <div id="app">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${state};
      </script>
      <script src="${config.staticUrl}/${assets.vendor.js}"></script>
      <script src="${config.staticUrl}/${assets.app.js}"></script>
    </body>
  </html>
`)
