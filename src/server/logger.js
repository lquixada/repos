import winston from 'winston'

const {combine, colorize, simple} = winston.format
const isProd = process.env.NODE_ENV === 'production'
const format = isProd ? simple() : combine(colorize(), simple())

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
