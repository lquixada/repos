import 'cross-fetch/polyfill'
import express from 'express'

import app from './controllers/app'
import error from './controllers/error'
import logger from './middlewares/logger'

const server = express()

// Delay the installation of main middlewares to enable prepending secondary
// middlewares. (i know, i know...)
process.nextTick(() => {
  server.use(logger)
  server.use(app)
  server.use(error)
})

export default server
