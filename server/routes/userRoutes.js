import express from 'express';
import router from express.Router();
import { getUserById, findOrCreateUser } from '../controllers/userAPI';

router.get('/:id', getUserById);
router.post('/', findOrCreateUser);


module.exports = router