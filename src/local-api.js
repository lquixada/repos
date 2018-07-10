import fs from 'fs'
import path from 'path'
import http from 'http'
import https from 'https'

import server from './api'

const {SECURE, API_PORT} = process.env

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
    .listen(API_PORT, function () {
      console.info(`\n🔒 Secure server running on: https://localhost:${this.address().port}/`)
    })
} else {
  http
    .createServer(server)
    .listen(API_PORT, function () {
      console.info(`\n🔓 Insecure server running on: http://localhost:${this.address().port}/`)
    })
}
