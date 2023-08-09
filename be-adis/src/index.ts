import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from './router/index';
import { AppError, NotFoundError, SuccessResponse } from './helpers/utils';
import { HttpCode } from './utils/httpCode';
import { Database } from './db/Database';
import config from './config';

// establish database connection
Database.getInstance().initialize();

const apiRoot = '/api';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(apiRoot, router);

app.use((_res, _req, next) => {
  const err = new NotFoundError('Not Found Url');
  next(err);
});

app.use(
  /* eslint-disable @typescript-eslint/no-unused-vars */
  (err: AppError, _req: Request, res: Response, _next: NextFunction): void => {
    console.log('ERROR', err);
    new SuccessResponse({
      success: false,
      statusCode: err.httpCode ? err.httpCode : HttpCode.INTERNAL_SERVER_ERROR,
      errors: { message: err.message },
      message: err.isOperational ? err.errorType : 'Internal Server Error',
    }).send(res);
  }
);

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${config.PORT}/`);
});
