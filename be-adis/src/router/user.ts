import { catchError, validateRequest } from '../middleware/validate';
import UserController from '../controllers/UserController';
import express from 'express';
import { isAuthenticated } from '../middleware/isAuthenticated';
import { checkEmail, signUpSchema } from '../validations/auth.validation';
import { updateProfileSchema } from '../validations/user.validation';

const router = express.Router();

router.post('/register', validateRequest(signUpSchema), catchError(UserController.register));

router.put('/update', isAuthenticated, validateRequest(updateProfileSchema), catchError(UserController.updateProfile));

router.get('/me', isAuthenticated, catchError(UserController.getProfile));

router.post('/recover', validateRequest(checkEmail), catchError(UserController.passwordRecovery));

export default router;
