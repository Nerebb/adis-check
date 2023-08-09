import CategoryController from '../controllers/CategoryController';
import { catchError } from '../middleware/validate';
import express from 'express';

const router = express.Router();

router.post('/', catchError(CategoryController.createCategory));

router.put('/:id', catchError(CategoryController.updateCategory));

router.get('/', catchError(CategoryController.findAdd));

export default router;
