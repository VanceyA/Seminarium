const { errorHandler } = require('./helpers/errorHandler');
const Seminar = require('../models/seminarModel');

class SeminarController {
    static async getAllSeminars(req, res) {
        try {
            const seminars = await req.db.Seminar.find();
            return res.status(200).send(seminars);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }

    static async getSeminarById(req, res) {
        try {
            const seminar = await Seminar.findById(req.params.id);
            return res.status(200).send(seminar);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }
};

module.exports = SeminarController;