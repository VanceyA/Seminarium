import express from 'express';
import router from express.Router();
import {
    getSchedule,
    addSeminarToSchedule,
    removeSeminarFromSchedule
} from '../controllers/userAPI';

router.get('/', getSchedule);
router.post('/:id', addSeminarToSchedule);
router.delete('/:id', removeSeminarFromSchedule);

module.exports = router;