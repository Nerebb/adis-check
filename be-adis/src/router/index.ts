import express from 'express';
import auth from './auth';
import category from './category';
import user from './user';
import ads from './ads';
import location from './location';

const router = express.Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/ads', ads);
router.use('/category', category);
router.use('/location', location);

export default router;
