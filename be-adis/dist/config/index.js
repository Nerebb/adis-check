"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    PORT: process.env.PORT ?? "3000",
    DB_HOST: process.env.MYSQL_HOST ?? "localhost",
    DB_USER: process.env.MYSQL_USER ?? "root",
    DB_PASSWORD: process.env.MYSQL_PASSWORD ?? "",
    DB_NAME: process.env.MYSQL_DATABASE ?? "",
    DB_PORT: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
    AUTH: {
        jwtSecret: process.env.JWT_SECRET ?? 'secret'
    }
};
