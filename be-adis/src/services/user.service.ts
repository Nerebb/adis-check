import { Repository } from "typeorm";
import { User } from "../models/entities/User";
import { userRepository } from "../models/repositories/user.repository";
import { BaseService } from "./base.service";

type TRegisterUser = Pick<User, 'email' | "username" | "password" | "phone">
// type TUpdateUser = Pick<User,"id" | "avatar" | "">
class UserService extends BaseService<User, Repository<User>> {
  constructor() {
    super(userRepository);
  }

  async findById(id: number): Promise<User> {
    const user = await this.repository.findOne({ where: { id } })
    return user
  }

  async createUser(newUser: TRegisterUser): Promise<User> {
    const registeredUser = await this.repository.create({ ...newUser })
    registeredUser.hashPassword()
    registeredUser.save()

    return registeredUser
  }
}

const userService = new UserService();
export default userService;
