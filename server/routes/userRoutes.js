import express from 'express';
import router from express.Router();
import { getUserById } from '../controllers/userAPI';
import { errorHandler } from '../controllers/helpers/errorHandler';

router.get('/user/:id', getUserById);

module.exports = router