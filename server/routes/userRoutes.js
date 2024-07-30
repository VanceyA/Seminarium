const express = require('express');
const router = express.Router();
const { getUserById, findOrCreateUser } = require('../controllers/userController');

router.get('/:id', getUserById);
router.post('/', findOrCreateUser);


module.exports = router