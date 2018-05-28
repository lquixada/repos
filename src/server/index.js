import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import loggerMiddleware from './middlewares/logger';
import staticMiddleware from './middlewares/static';
import appController from './controllers/app';
import errorController from './controllers/error';

const {NODE_ENV} = process.env;

// For semantic purposes, app is equivalent to server.
const server = express();

/* Middlewares */
if (NODE_ENV === 'development') {
  server.use(...require('./middlewares/webpack').default);
}

server.use(compression(NODE_ENV === 'production'? -1: 0));
server.use('/assets/', staticMiddleware);
server.use(helmet());
server.use(loggerMiddleware);
server.use(bodyParser.urlencoded({extended: true}));

/* Controllers */
server.use('/', appController);
server.use(errorController);

export default server;
