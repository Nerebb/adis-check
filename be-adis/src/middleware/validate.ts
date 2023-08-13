/* eslint-disable @typescript-eslint/no-explicit-any */
import { ObjectSchema } from 'yup';
import { HttpCode } from '../utils/httpCode';
import { ReasonPhrases } from '../utils/reasonPhrases';
import { Response, NextFunction, Request } from 'express';

export const catchError =
  (fun) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fun(req, res, next)).catch(next);

// check data in request
export const validateRequest =
  (schema: ObjectSchema<any>) =>
    async (req: Request, _res: Response, next: NextFunction) => {
      try {
        const result = await schema.validate(
          {
            body: req.body,
            params: req.params,
            query: req.query,
          },
          { stripUnknown: true }
        );

        if (result.query && Object.keys(result.query).length) {
          req.query = result.query;
        }
        if (result.body && Object.keys(result.body).length) {
          req.body = result.body;
        }
        if (result.params && Object.keys(result.params).length) {
          req.params = result.params;
        }

        next();
      } catch (error) {
        error.httpCode = HttpCode.BAD_REQUEST;
        error.errorType = ReasonPhrases.BAD_REQUEST;
        next(error);
      }
    };
