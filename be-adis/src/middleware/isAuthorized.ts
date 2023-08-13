import config from '../config';
import { NotAuthorizedError } from '../helpers/utils';
import { ERole } from '../models/entities/User';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

interface DecodedUser {
  userId: string;
  email: string;
  role: ERole;
}

export const isAdvertiser = async (
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
    const userDecoded = jwt.verify(
      sessionToken,
      config.AUTH.jwtSecret
    ) as DecodedUser;

    console.log('maybne');
    if (userDecoded.role !== ERole.Advertiser)
      throw new NotAuthorizedError(
        `Role ${ERole.Advertiser} is required for this action!`
      );

    _next();
  } catch (err) {
    _next(new NotAuthorizedError(err.message));
  }
};

export const isAffiliateUser = async (
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
    const userDecoded = jwt.verify(
      sessionToken,
      config.AUTH.jwtSecret
    ) as DecodedUser;

    if (userDecoded.role !== ERole.Affiliate)
      throw new NotAuthorizedError(
        `Role ${ERole.Affiliate} is required for this action!`
      );

    _next();
  } catch (err) {
    _next(new NotAuthorizedError(err.message));
  }
};
