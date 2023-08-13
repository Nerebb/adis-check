import { catchError } from '../middleware/validate';
import AuthController from '../controllers/AuthController';
import express from 'express';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.post('/login', catchError(AuthController.login));

router.post(
  '/checkPassword',
  isAuthenticated,
  catchError(AuthController.checkPassword)
);

router.get('/verifyEmail', catchError(AuthController.verifyEmail));

// router.post("/delete", catchError(AuthController.softDelete));
export default router;
