import { catchError } from "../middleware/validate";
import UserController from "../controllers/UserController";
import express from "express";

const router = express.Router();

router.post("/register", catchError(UserController.register));

router.put('/update', catchError(UserController.update))

export default router;