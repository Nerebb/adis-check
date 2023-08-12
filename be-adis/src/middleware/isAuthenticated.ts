import config from '../config';
import { NotAuthorizedError } from '../helpers/utils';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const isAuthenticated = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let sessionToken =
    req.cookies['ADIS-AUTH'] ||
    req.headers.accessToken ||
    req.headers.authorization;

  if (req.headers.authorization) {
    sessionToken = req.headers.authorization.split(' ')[1];
  }
  try {
    console.log('run');
    const userDecoded = jwt.verify(sessionToken, config.AUTH.jwtSecret);

    console.log('Decoded User', userDecoded);
    res.locals.user = userDecoded;

    _next();
  } catch (err) {
    _next(new NotAuthorizedError('UnAuthenticated!'));
  }
};
