import fs from 'fs'
import path from 'path'
import http from 'http'
import https from 'https'

import server from './server'

const PORT = 3000

if (process.env.SECURE) {
  const sslPath = path.join(__dirname, '..', 'web', 'ssl')
  const credentials = {
    key: fs.readFileSync(path.join(sslPath, 'localhost.key')),
    cert: fs.readFileSync(path.join(sslPath, 'localhost.cert')),
    requestCert: false,
    rejectUnauthorized: false
  }

  https
    .createServer(credentials, server)
    .listen(PORT, () => {
      console.info(`\n🔒 Secure server running on: https://localhost:${PORT}/`)
    })
} else {
  http
    .createServer(server)
    .listen(PORT, () => {
      console.info(`\n🔓 Insecure Server running on: http://localhost:${PORT}/`)
    })
}
