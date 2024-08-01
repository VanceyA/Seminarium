const express = require('express');
const router = express.Router();
const { getAllSeminars, getSeminarById } = require('../controllers/seminarController');
const { verifyToken } = require('./middleware/verifyToken');

// router.get('/', verifyToken, getAllSeminars);

router.get('/', getAllSeminars);
router.get('/:id',getSeminarById);

module.exports = router;