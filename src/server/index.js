import express from 'express'

import loggerMiddleware from './middlewares/logger'
import staticMiddleware from './middlewares/static'
import apiController from './controllers/api'
import appController from './controllers/app'
import errorController from './controllers/error'

const server = express()

/* Middlewares */
if (process.env.NODE_ENV === 'development') {
  server.use(...require('./middlewares/webpack').default)
}

server.use('/assets/', staticMiddleware)
server.use(loggerMiddleware)

/* Controllers */
server.use('/api', apiController)
server.use('/', appController)
server.use(errorController)

export default server
