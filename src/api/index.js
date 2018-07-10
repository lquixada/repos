import express from 'express'
import cors from 'cors'

import loggerMiddleware from './middlewares/logger'
import apiController from './controllers/api'

const server = express()

server.use(cors())
server.use(loggerMiddleware)

/* Controllers */
server.use('/api', apiController)

export default server
