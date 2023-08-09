import AdsController from '../controllers/AdsController';
import { catchError } from '../middleware/validate';
import express from 'express';

const router = express.Router();

router.post('/', catchError(AdsController.createAds));

router.put('/:id', catchError(AdsController.updateAds));

router.get('/category/:id', catchError(AdsController.findByCategory));

router.get('/', catchError(AdsController.findByKeyword));

export default router;
