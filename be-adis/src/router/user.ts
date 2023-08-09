import { catchError } from '../middleware/validate';
import UserController from '../controllers/UserController';
import express from 'express';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.post('/register', catchError(UserController.register));

router.put('/update', isAuthenticated, catchError(UserController.update));

router.get('/me', isAuthenticated, catchError(UserController.getProfile));

export default router;
