import { isAdvertiser } from '../middleware/isAuthorized';
import CategoryController from '../controllers/CategoryController';
import { catchError } from '../middleware/validate';
import express from 'express';
import { isAuthenticated } from '../middleware/isAuthenticated';

const router = express.Router();

router.post(
  '/',
  isAdvertiser,
  isAuthenticated,
  catchError(CategoryController.createCategory)
);

router.put(
  '/:id',
  isAuthenticated,
  isAdvertiser,
  catchError(CategoryController.updateCategory)
);

router.get('/', catchError(CategoryController.findAdd));

export default router;
