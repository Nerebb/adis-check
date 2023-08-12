import LocationController from '../controllers/LocationController';
import { catchError } from '../middleware/validate';
import express from 'express';

const router = express.Router();

router.get('/countries', catchError(LocationController.findCountries));

router.get('/cites/:id', catchError(LocationController.findCities));

router.get('/states/id  ', catchError(LocationController.findStates));

export default router;
