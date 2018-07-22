import fs from 'fs'
import path from 'path'
import http from 'http'
import https from 'https'

import config from './config'
import server from './index'

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
  http
    .createServer(server)
    .listen(config.port, function () {
      console.info(`\n🔓 Insecure server running on: http://localhost:${this.address().port}/`)
      console.info('Compiling assets in memory...')
    })
}
