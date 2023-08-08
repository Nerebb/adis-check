"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const Database_1 = require("../../db/Database");
const User_1 = require("../entities/User");
exports.userRepository = Database_1.Database.getInstance().getRepository(User_1.User);
