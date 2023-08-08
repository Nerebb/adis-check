import { Repository } from "typeorm";
import { User } from "../models/entities/User";
import { userRepository } from "../models/repositories/user.repository";
import { BaseService } from "./base.service";

class UserService extends BaseService<User, Repository<User>> {
  constructor() {
    super(userRepository);
  }
}

const userService = new UserService();
export default userService;
