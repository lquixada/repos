import express from 'express'
import cors from 'cors'
import apollo from './apollo'

import loggerMiddleware from './logger'
import apiRouter from './router'

const app = express()

app.use(cors())
app.use(loggerMiddleware)
app.use('/api', apiRouter)

apollo.applyMiddleware({ app })

export default app
