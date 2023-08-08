import UserController from "../controllers/UserController";
import express from "express";

const router = express.Router();

router.post("/register", UserController.register);

export default router;