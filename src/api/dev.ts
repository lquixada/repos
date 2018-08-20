import 'cross-fetch/polyfill'
import fs from 'fs'
import path from 'path'

import server from './index'

const options = {
  endpoint: '/graphql',
  playground: '/graphql',
  port: process.env.API_PORT || 3001,
}

if (process.env.SECURE) {
  const sslPath = path.join(__dirname, '..', 'dist', 'ssl')
  const https = {
    cert: fs.readFileSync(path.join(sslPath, 'localhost.cert')),
    key: fs.readFileSync(path.join(sslPath, 'localhost.key')),
  }

  server.start({https, ...options}, () =>
    console.info(`\n🔒 Secure server running on: https://localhost:${options.port}}/`),
  )
} else {
  server.start({...options}, () =>
    console.info(`\n🔓 Insecure server running on: http://localhost:${options.port}/`),
  )
}
