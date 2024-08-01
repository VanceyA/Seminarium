const express = require('express');
const router = express.Router();
const { getSchedule, addSeminarToSchedule, removeSeminarFromSchedule } = require('../controllers/scheduleController');
const { verifyToken } = require('./middleware/verifyToken');

router.get('/', verifyToken, getSchedule);
router.post('/:seminarId', verifyToken, addSeminarToSchedule);
router.delete('/:seminarId', verifyToken, removeSeminarFromSchedule);

module.exports = router;