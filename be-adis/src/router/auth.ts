import { catchError } from '../middleware/validate';
import AuthController from '../controllers/AuthController';
import express from 'express';

const router = express.Router();

router.post('/login', catchError(AuthController.login));

// router.post("/delete", catchError(AuthController.softDelete));
export default router;
