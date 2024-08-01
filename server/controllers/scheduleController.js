const { User } = require('../models/userModel');
const { Seminar } = require('../models/seminarModel');
const { errorHandler } = require('./helpers/errorHandler');

class ScheduleController {
    static async getSchedule(req, res) {
        try {
            const { studentID, name } = req.user;
            const userId = studentID;

            let user = await User.findOne({ userId: userId });
            return res.status(200).json(user.schedule);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }

    static async addSeminarToSchedule(req, res) {
        try {
            const { studentID, name } = req.user;
            const userId = studentID;

            let user = await User.findOne({ userId: userId });
            const seminar = await Seminar.findById(req.params.seminarId);
            user.schedule.push(seminar);
            await user.save();
            req.user = user;
            return res.status(201).send(user);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }

    static async removeSeminarFromSchedule(req, res) {
        try {
            const { studentID, name } = req.user;
            const userId = studentID;

            let user = await User.findOne({ userId: userId });
            const seminar = await Seminar.findById(req.params.seminarId);
            const index = user.schedule.indexOf(seminar);
            user.schedule.splice(index, 1);
            await user.save();
            req.user = user;
            return res.status(200).send(user);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }
}

module.exports = ScheduleController;