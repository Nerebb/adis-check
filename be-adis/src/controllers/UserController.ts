import { Request, Response } from "express";

import { userRepository } from "../models/repositories/user.repository";
import { BadRequestError, CreatedResponse } from "../helpers/utils";
import { HttpCode } from "../utils/httpCode";
import { authentication, random } from "../utils/hash";

class UserController {
  static register = async (req: Request, res: Response) => {
    console.log("registering");
    let { email, username, password, phone } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send({
        error: "Bad Request!",
      });
    }

    let user = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(400).send({
        error: "Username or email was registered!",
      });
    }

    const salt = random();

    try {
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
        data: user,
        message: "Registered successfully!",
      }).send(res);
    } catch (e) {
      return new BadRequestError(
        "An error occured during register! Please contact admin for help!"
      );
    }
  };
}
export default UserController;
