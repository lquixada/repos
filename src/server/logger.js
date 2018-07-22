import winston from 'winston'

import config from './config'

const {combine, colorize, simple} = winston.format
const format = config.env === 'production' ? simple() : combine(colorize(), simple())

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      silent: false,
      format
    })
  ],
  exitOnError: false
})

export default logger
