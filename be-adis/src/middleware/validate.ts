import { Response, NextFunction, Request } from 'express';
// import { ObjectSchema } from "yup";
// import { HttpCode } from "../utils/httpCode";
// import { ReasonPhrases } from "../utils/reasonPhrases";
// import {
//   BadRequestError,
//   ForbiddenError,
//   NotAuthorizedError,
//   NotFoundError,
// } from "../helpers/utils";

// // import tokenUtil, { DataAfterEncode } from "@/utils/tokenUtil";
// import { ERole } from "../models/User";

// declare module "express-serve-static-core" {
//   interface Request {
//     user: DataAfterEncode;
//     userId: number;
//   }
// }

export enum EKeyHeader {
  REFRESH_TOKEN = 'x-rtoken-id',
  ACCESS_TOKEN = 'x-atoken-id',
}

export const catchError =
  (fun) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fun(req, res, next)).catch(next);

// check data in request
// export const validateRequest =
//   (schema: ObjectSchema<any>) =>
//   async (req: Request, _res: Response, next: NextFunction) => {
//     try {
//       const result = await schema.validate(
//         {
//           body: req.body,
//           params: req.params,
//           query: req.query,
//         },
//         { stripUnknown: true }
//       );

//       if (result.query && Object.keys(result.query).length) {
//         req.query = result.query;
//       }

//       if (result.body && Object.keys(result.body).length) {
//         req.body = result.body;
//       }
//       if (result.params && Object.keys(result.params).length) {
//         req.params = result.params;
//       }

//       next();
//     } catch (error: any) {
//       error.httpCode = HttpCode.BAD_REQUEST;
//       error.errorType = ReasonPhrases.BAD_REQUEST;
//       next(error);
//     }
//   };

// // check header have info need to use some router
// export const checkUser = async (
//   req: Request,
//   _res: Response,
//   next: NextFunction
// ) => {
//   // const userId = req.headers[EKeyHeader.USER_ID] as string;
//   const accessToken = req.headers[EKeyHeader.ACCESS_TOKEN] as string;
//   try {
//     if (!userId) throw new BadRequestError("Header must have userId");

//     if (!accessToken)
//       throw new BadRequestError("Header must have access token");

//     const userDb = await UserService.findById(userId);

//     if (!userDb || !userDb.isActive) throw new NotFoundError("User not exit");

//     const data = tokenUtil.verifyToken(accessToken, tokenStore.secretKey);

//     if (!data) {
//       throw new ForbiddenError("Wrong access token");
//     }

//     req.user = data;
//     req.user.name = userDb.name;

//     next();
//   } catch (error) {
//     next(error);
//   }
// };

// export const checkRole =
//   (role: ERole) => (req: Request, _res: Response, next: NextFunction) => {
//     if (req.user.role !== role)
//       throw new NotAuthorizedError(
//         `You are not ${role}, create hotel to use this feature`
//       );

//     if (req.user.role !== role)
//       throw new NotAuthorizedError("You are not authorized");
//     next();
//   };
