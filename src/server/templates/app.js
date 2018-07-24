import assets from '../../public/assets.json'
import config from '../config'

export default ({helmet, styles, html, state}) => (`
  <!DOCTYPE html>

  <html>
    <head>
      ${helmet.meta.toString()}
      ${helmet.title.toString()}
      ${helmet.link.toString()}
      <script defer src="${config.staticUrl}/${assets.vendor.js}"></script>
      <script defer src="${config.staticUrl}/${assets.app.js}"></script>
      <script>window.__INITIAL_STATE__ = ${state};</script>
      ${styles}
    </head>

    <body>
      <div id="app">${html}</div>
    </body>
  </html>
`)
