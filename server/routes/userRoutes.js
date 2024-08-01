const express = require('express');
const router = express.Router();
const { getUserById, findOrCreateUser } = require('../controllers/userController');
const { verifyToken } = require('./middleware/verifyToken');

router.get('/:id', verifyToken, getUserById);
router.post('/', verifyToken, findOrCreateUser);


module.exports = router