import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { validate } from "class-validator";

import { User } from "@/models/entities/User";
import config from "../config";
import { userRepository } from "../models/repositories/user.repository";
import { BadRequestError, NotAuthorizedError, NotFoundError, SuccessResponse } from "../helpers/utils";

class AuthController {

  static login = async (req: Request, res: Response) => {
    //Check if email and password are set
    let { email, password } = req.body;
    if (!(email && password)) throw new BadRequestError("AuthLogin: email or password not found")

    const user = await userRepository.findOne({ where: { email } })
    if (!user) throw new NotFoundError("AuthLogin: User not found")

    //Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password))
      throw new NotAuthorizedError("AuthLogin: email or password incorrect")

    //Sing JWT, valid for 1 hour
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      config.AUTH.jwtSecret,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    return new SuccessResponse({
      data: token,
      message: "User login successfully",
    }).send(res)
  };

  static changePassword = async (req: Request, res: Response) => {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;

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
