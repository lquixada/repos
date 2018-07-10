import 'babel-polyfill'
import awsServerlessExpress from 'aws-serverless-express'
import app from './server'

const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)
