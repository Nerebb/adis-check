"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../models/repositories/user.repository");
const base_service_1 = require("./base.service");
class UserService extends base_service_1.BaseService {
    constructor() {
        super(user_repository_1.userRepository);
    }
}
const userService = new UserService();
exports.default = userService;
