"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const User_1 = require("../models/entities/User");
const config_1 = __importDefault(require("../config"));
const typeorm_1 = require("typeorm");
class Database {
    constructor() { }
    static getInstance() {
        if (!Database.instance) {
            const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = config_1.default;
            Database.instance = new typeorm_1.DataSource({
                type: "mysql",
                host: DB_HOST,
                port: DB_PORT,
                username: DB_USER,
                password: DB_PASSWORD,
                database: DB_NAME,
                synchronize: true,
                logging: true,
                migrations: [],
                entities: [
                    // "../models/entities/**/*.ts"
                    User_1.User
                ],
            });
        }
        return Database.instance;
    }
    static setInstance(dataSource) {
        Database.instance = dataSource;
    }
}
exports.Database = Database;
