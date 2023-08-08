"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../models/repositories/user.repository");
const utils_1 = require("../helpers/utils");
const httpCode_1 = require("../utils/httpCode");
class UserController {
}
_a = UserController;
UserController.register = async (req, res) => {
    console.log("registering");
    let { email, username, password, phone } = req.body;
    if (!username || !email || !password) {
        return res.status(400).send({
            error: 'Bad Request!'
        });
    }
    let user = await user_repository_1.userRepository.findOne({
        where: {
            email
        }
    });
    if (user) {
        return res.status(400).send({
            error: 'Username or email was registered!'
        });
    }
    try {
        user = await user_repository_1.userRepository.create({
            username,
            password,
            email,
            phone
        });
        user.save();
        return new utils_1.CreatedResponse({
            statusCode: httpCode_1.HttpCode.CREATED,
            data: user,
            message: 'Registered successfully!'
        });
    }
    catch (e) {
        return new utils_1.BadRequestError('An error occured during register! Please contact admin for help!');
    }
};
exports.default = UserController;
