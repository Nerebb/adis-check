import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { validate } from 'class-validator';

import { User } from '../models/entities/User';
import config from '../config';
import { userRepository } from '../models/repositories/user.repository';
import {
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
  SuccessResponse,
} from '../helpers/utils';
import { DecodedUser } from '../middleware/isAuthorized';

class AuthController {
  static login = async (req: Request, res: Response) => {
    //Check if email and password are set
    const { email, password } = req.body;
    if (!(email && password))
      throw new BadRequestError('Email or password not found');

    const user = await userRepository.findOne({ where: { email } });
    if (!user) throw new NotFoundError('User not found');

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password))
      throw new NotAuthorizedError('Email or password incorrect');

    if (config.isVerify && !user.isVerify) {
      throw new NotAuthorizedError('Email not Verify');
    }

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, email: user.email, role: user.role },
      config.AUTH.jwtSecret,
      { expiresIn: '7d' }
    );

    res.cookie('ADIS-AUTH', token, { domain: 'localhost', path: '/' });

    //Santinize Response
    const responseData = {
      token,
      user: {
        userId: user.id,
        username: user.username,
        email: user.email,
      },
    };

    //Send the jwt in the response
    return new SuccessResponse({
      data: responseData,
      message: 'User login successfully',
    }).send(res);
  };

  static checkPassword = async (req: Request, res: Response) => {
    const { userId: id, email } = res.locals.user;
    const { password } = req.body;
    console.log(
      '🚀 ~ file: AuthController.ts:58 ~ AuthController ~ checkPassword= ~ password:',
      password
    );
    //Get user
    const user = await userRepository.findOne({ where: { id, email } });
    if (!user) throw new NotFoundError('User not found');

    //ComparePassword
    if (!user.checkIfUnencryptedPasswordIsValid(password))
      throw new NotAuthorizedError('Password incorrect');

    return new SuccessResponse({ message: 'authorized' }).send(res);
  };

  static changePassword = async (req: Request, res: Response) => {
    //Get ID from JWT
    const { userId: id } = res.locals.user;

    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      res.status(400).send();
    }

    //Get user from the database
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      res.status(401).send();
      return;
    }

    //Validate de model (password lenght)
    user.password = newPassword;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }
    //Hash the new password and save
    user.hashPassword();
    userRepository.save(user);

    res.status(204).send();
  };

  static verifyEmail = async (req: Request, res: Response) => {
    const token = req.query.token as string;

    const userDecoded = jwt.verify(
      token,
      config.AUTH.TOKEN_CALL_BACK
    ) as DecodedUser;

    if (!userDecoded) throw new NotAuthorizedError('UnAuthenticated');

    await userRepository.update(
      { email: userDecoded.email },
      { isVerify: true }
    );

    res.redirect(`${config.baseurl_client}/loginRegister`);
  };

  // static softDelete = async (req: Request, res: Response) => {
  //   if (!JWT_TOKEN) return new Error(("Cannot delete user that not authorized"))
  //   try {
  //     const softDelete = await userRepository.createQueryBuilder('')
  //       .softDelete()
  //       .where("id = :id", { id: 1 })
  //       .execute();

  //     // const deleteUser
  //     return new CreatedResponse({
  //       statusCode: HttpCode.CREATED,
  //       data: softDelete,
  //       message: 'User login successfully',
  //     }).send(res)

  //   } catch (error) {
  //     return new BadRequestError('An error occured during login! Please contact admin for help!')
  //   }
  // }
}
export default AuthController;
