"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../controllers/UserController"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/register", UserController_1.default.register);
exports.default = router;
