import { Request, Response } from 'express';

import { userRepository } from '../models/repositories/user.repository';
import {
  BadRequestError,
  CreatedResponse,
  DuplicateError,
  NotFoundError,
  SuccessResponse,
} from '../helpers/utils';
import { HttpCode } from '../utils/httpCode';
import { User } from '../models/entities/User';
// import sendMail from '../utils/sendMail';
import sendMail from '../utils/mailgun';
import config from '../config';

type TUpdateUser = Partial<
  Pick<
    User,
    | 'firstName'
    | 'lastName'
    | 'username'
    | 'password'
    | 'phone'
    | 'country'
    | 'gender'
    | 'avatar'
    | 'bio'
  >
>;

class UserController {
  static register = async (req: Request, res: Response) => {
    console.log('registering');
    const { email, username, password, phone } = req.body;

    if (!username || !email || !password) {
      throw new BadRequestError('User Registered: Bad Request!');
    }

    let user = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (user) {
      throw new DuplicateError('Username or email was registered!', 400);
    }

    const r = await sendMail({
      to: email,
      from: `ADIS Support <${config.SG_SENDER}>`,
      subject: 'Test email',
      html: 'Test content',
    });

    console.log('r1', r);

    user = await userRepository.create({
      username,
      password,
      email,
      phone,
    });
    user.hashPassword();
    user.save();

    // confirmation email

    return new CreatedResponse({
      statusCode: HttpCode.CREATED,
      // data: user,
      message: 'Registered successfully!',
    }).send(res);
  };

  static updateProfile = async (req: Request, res: Response) => {
    //Get userId from JWT
    const { userId: id, email } = res.locals.user;

    //Check if valid
    const curUser = await userRepository.findOne({ where: { id, email } });
    if (!curUser) throw new NotFoundError('UpdateUser: User not found');

    //Update user
    const { ...allowedField } = req.body as TUpdateUser;

    const updatedUser = userRepository.create({ ...curUser, ...allowedField });
    updatedUser.save();

    return new SuccessResponse({
      message: 'Update user profile successfully',
    }).send(res);
  };

  static getProfile = async (req: Request, res: Response) => {
    //Get userId from JWT
    const { userId: id, email } = res.locals.user;

    const userProfile = await userRepository.findOne({
      where: { id, email },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...responseData } = userProfile;

    return new SuccessResponse({
      data: responseData,
      message: 'Get user profile successfully',
    }).send(res);
  };

  static passwordRecovery = async (req: Request, res: Response) => {
    //CheckValidField
    const { email } = req.body;
    if (!email) throw new BadRequestError('Invalid email');

    //Find user by email
    const user = await userRepository.findOne({ where: { email } });
    if (!user) throw new NotFoundError('Email not found');

    //Sent to email

    //Response
    return new SuccessResponse({
      message: 'Password has been sent to your registered email',
    }).send(res);
  };
}
export default UserController;
