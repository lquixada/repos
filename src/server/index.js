import 'cross-fetch/polyfill'
import express from 'express'

import config from './config'
import assets from './middlewares/assets'
import logger from './middlewares/logger'
import app from './controllers/app'
import error from './controllers/error'

const server = express()

/* Middlewares */
if (config.env === 'development') {
  server.use(...require('./middlewares/webpack').default)
  server.use('/assets/', assets)
}

server.use(logger)

/* Controllers */
server.use('/', app)
server.use(error)

export default server
