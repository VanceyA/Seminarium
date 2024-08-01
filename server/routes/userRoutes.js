const express = require('express');
const router = express.Router();
const { getUserById, findOrCreateUser } = require('../controllers/userController');
const { verifyToken } = require('./middleware/verifyToken');

router.get('/:id', getUserById);
router.post('/', findOrCreateUser);


module.exports = router