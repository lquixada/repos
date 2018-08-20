import fs from 'fs'
import http from 'http'
import https from 'https'
import path from 'path'

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
    cert: fs.readFileSync(path.join(sslPath, 'localhost.cert')),
    key: fs.readFileSync(path.join(sslPath, 'localhost.key')),
    rejectUnauthorized: false,
    requestCert: false,
  }

  https
    .createServer(credentials, server)
    .listen(config.port, function(this: any) {
      const {port} = this.address()
      console.info(`\n🔒 Secure server running on: https://localhost:${port}/`)
      console.info('Compiling assets in memory...')
    })
} else {
  http
    .createServer(server)
    .listen(config.port, function(this: any) {
      const {port} = this.address()
      console.info(`\n🔓 Insecure server running on: http://localhost:${port}/`)
      console.info('Compiling assets in memory...')
    })
}
