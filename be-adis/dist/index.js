"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./router/index"));
const utils_1 = require("./helpers/utils");
const httpCode_1 = require("./utils/httpCode");
const Database_1 = require("./db/Database");
const config_1 = __importDefault(require("./config"));
// establish database connection
Database_1.Database.getInstance().initialize();
const apiRoot = '/api';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
}));
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json());
app.use(apiRoot, index_1.default);
app.use((err, _req, res, _next) => {
    console.log("ERROR", err);
    new utils_1.SuccessResponse({
        success: false,
        statusCode: err.httpCode ? err.httpCode : httpCode_1.HttpCode.INTERNAL_SERVER_ERROR,
        errors: { message: err.message },
        message: err.isOperational ? err.errorType : "Internal Server Error",
    }).send(res);
});
const server = http_1.default.createServer(app);
server.listen(config_1.default.PORT, () => {
    console.log(`Server running on http://localhost:${config_1.default.PORT}/`);
});
