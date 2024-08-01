const express = require('express');
const router = express.Router();
const { getSchedule, addSeminarToSchedule, removeSeminarFromSchedule } = require('../controllers/scheduleController');
const { verifyToken } = require('./middleware/verifyToken');

router.get('/', verifyToken, getSchedule);
router.post('/:id', verifyToken, addSeminarToSchedule);
router.delete('/:id', verifyToken, removeSeminarFromSchedule);

module.exports = router;