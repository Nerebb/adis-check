import { isAuthenticated } from '../middleware/isAuthenticated';
import AdsController from '../controllers/AdsController';
import { catchError, validateRequest } from '../middleware/validate';
import express from 'express';
import { isAdvertiser } from '../middleware/isAuthorized';
import {
  createCategorySchema,
  updateCategorySchema,
} from '../validations/category.validation';
import {
  getAdsByCategorySchema,
  getAdsBySearchSchema,
} from '../validations/ads.validation';

const router = express.Router();

router.post(
  '/',
  isAuthenticated,
  isAdvertiser,
  validateRequest(createCategorySchema),
  catchError(AdsController.createAds)
);

router.put(
  '/:id',
  isAuthenticated,
  isAdvertiser,
  validateRequest(updateCategorySchema),
  catchError(AdsController.updateAds)
);

router.get(
  '/category/:id',
  validateRequest(getAdsByCategorySchema),
  catchError(AdsController.findByCategory)
);

router.get(
  '/',
  validateRequest(getAdsBySearchSchema),
  catchError(AdsController.findByKeyword)
);

export default router;
