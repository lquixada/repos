import fs from 'fs'
import path from 'path'
import http from 'http'
import https from 'https'
import Loadable from 'react-loadable'

import config from './config'
import server from './index'
import assets from './middlewares/assets'
import webpack from './middlewares/webpack'

// Install development middlewares
server.use(...webpack)
server.use('/assets/', assets)

if (config.secure) {
  const sslPath = path.join(__dirname, '..', 'dist', 'ssl')
  const credentials = {
    key: fs.readFileSync(path.join(sslPath, 'localhost.key')),
    cert: fs.readFileSync(path.join(sslPath, 'localhost.cert')),
    requestCert: false,
    rejectUnauthorized: false
  }

  https
    .createServer(credentials, server)
    .listen(config.port, function () {
      console.info(`\n🔒 Secure server running on: https://localhost:${this.address().port}/`)
      console.info('Compiling assets in memory...')
    })
} else {
  Loadable.preloadAll().then(() => {
    http
      .createServer(server)
      .listen(config.port, function () {
        console.info(`\n🔓 Insecure server running on: http://localhost:${this.address().port}/`)
        console.info('Compiling assets in memory...')
      })
  })
}
