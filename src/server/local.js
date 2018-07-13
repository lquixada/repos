import fs from 'fs'
import path from 'path'
import http from 'http'
import https from 'https'

import server from './index'

const {SECURE, WEB_PORT = 3000} = process.env

if (SECURE) {
  const sslPath = path.join(__dirname, '..', 'web', 'ssl')
  const credentials = {
    key: fs.readFileSync(path.join(sslPath, 'localhost.key')),
    cert: fs.readFileSync(path.join(sslPath, 'localhost.cert')),
    requestCert: false,
    rejectUnauthorized: false
  }

  https
    .createServer(credentials, server)
    .listen(WEB_PORT, () => {
      console.info(`\n🔒 Secure server running on: https://localhost:${WEB_PORT}/`)
      console.info('Compiling assets in memory...')
    })
} else {
  http
    .createServer(server)
    .listen(WEB_PORT, () => {
      console.info(`\n🔓 Insecure server running on: http://localhost:${WEB_PORT}/`)
      console.info('Compiling assets in memory...')
    })
}