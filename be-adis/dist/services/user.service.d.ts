import { Repository } from "typeorm";
import { User } from "../models/entities/User";
import { BaseService } from "./base.service";
declare class UserService extends BaseService<User, Repository<User>> {
    constructor();
}
declare const userService: UserService;
export default userService;
