import config from '../config';
import { NotAuthorizedError } from '../helpers/utils';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const isAuthenticated = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const sessionToken = req.cookies['ADIS-AUTH'] || req.headers.accessToken;
  console.log("🚀 ~ file: isAuthenticated.ts:12 ~ sessionToken:", sessionToken)

  try {
    const userDecoded = jwt.verify(sessionToken, config.AUTH.jwtSecret);

    console.log('Decoded User', userDecoded);
    res.locals.user = userDecoded;

    _next();
  } catch (err) {
    throw new NotAuthorizedError('UnAuthenticated!');
  }
};
