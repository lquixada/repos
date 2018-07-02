import assets from '../../public/assets.json'
import {cloudfront} from '../../shared/config'

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
      <script src="${cloudfront}/${assets.vendor.js}"></script>
      <script src="${cloudfront}/${assets.app.js}"></script>
    </body>
  </html>
`)
