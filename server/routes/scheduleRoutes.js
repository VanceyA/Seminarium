const express = require('express');
const router = express.Router();
const { getSchedule, addSeminarToSchedule, removeSeminarFromSchedule } = require('../controllers/scheduleController');

router.get('/', getSchedule);
router.post('/:id', addSeminarToSchedule);
router.delete('/:id', removeSeminarFromSchedule);

module.exports = router;