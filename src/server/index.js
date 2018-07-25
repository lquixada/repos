import 'cross-fetch/polyfill'
import express from 'express'

import logger from './middlewares/logger'
import app from './controllers/app'
import error from './controllers/error'

const server = express()

// Delay the installation of main middlewares to enable prepending secondary
// middlewares. (i know, i know...)
process.nextTick(() => {
  server.use(logger)
  server.use(app)
  server.use(error)
})

export default server
