import LocationController from '../controllers/LocationController';
import { catchError } from '../middleware/validate';
import express from 'express';

const router = express.Router();

router.get('/countries', catchError(LocationController.findCountries));

router.get('/cites', catchError(LocationController.findCities));

router.get('/states', catchError(LocationController.findStates));

export default router;
