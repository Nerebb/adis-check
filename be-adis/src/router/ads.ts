import { isAuthenticated } from '../middleware/isAuthenticated';
import AdsController from '../controllers/AdsController';
import { catchError, validateRequest } from '../middleware/validate';
import express from 'express';
import { isAdvertiser } from '../middleware/isAuthorized';
import {
  createAdsSchema,
  getAdsByCategorySchema,
  getAdsBySearchSchema,
  updateAdsSchema,
} from '../validations/ads.validation';

const router = express.Router();

router.post(
  '/',
  isAuthenticated,
  isAdvertiser,
  validateRequest(createAdsSchema),
  catchError(AdsController.createAds)
);

router.put(
  '/:id',
  isAuthenticated,
  isAdvertiser,
  validateRequest(updateAdsSchema),
  catchError(AdsController.updateAds)
);

router.patch(
  '/status/:id',
  isAuthenticated,
  isAdvertiser,
  catchError(AdsController.updateStatus)
);

router.get('/status/:id', catchError(AdsController.updateStatusByAdmin));

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

router.get('/detail/:id', catchError(AdsController.detail));

router.get(
  '/advertiser/',
  isAuthenticated,
  isAdvertiser,
  catchError(AdsController.getByAdvertiser)
);

export default router;
