import express from 'express'
import cors from 'cors'

import loggerMiddleware from './logger'
import apiRouter from './router'

const server = express()

server.use(cors())
server.use(loggerMiddleware)
server.use('/api', apiRouter)

export default server
