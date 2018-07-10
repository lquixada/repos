import express from 'express'

import loggerMiddleware from './middlewares/logger'
import apiController from './controllers/api'

const server = express()

server.use(loggerMiddleware)

/* Controllers */
server.use('/api', apiController)

export default server
