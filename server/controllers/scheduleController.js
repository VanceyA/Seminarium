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

            let user = await User.findOne({ userId: userId }).populate('schedule');
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const seminar = await Seminar.findById(req.params.seminarId);
            if (!seminar) {
                return res.status(404).json({ message: "Seminar not found" });
            }

            if (!user.schedule) {
                return res.status(404).json({ message: "Schedule not found" });
            }

            if (user.schedule.seminars.includes(seminar._id)) {
                return res.status(400).send({ message: "Seminar already in schedule" });
            }

            user.schedule.seminars.push(seminar._id);
            await user.schedule.save();
            return res.status(201).json(user);
        } catch (err) {
            console.log(err);
        }
    }

    static async removeSeminarFromSchedule(req, res) {
        try {
            const { studentID, name } = req.user;
            const userId = studentID;

            let user = await User.findOne({ userId: userId }).populate('schedule');
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            const seminar = await Seminar.findById(req.params.seminarId);
            if (!seminar) {
                return res.status(404).json({ message: "Seminar not found" });
            }

            if (!user.schedule) {
                return res.status(404).json({ message: "Schedule not found" });
            }

            if (!user.schedule.seminars.includes(seminar._id)) {
                return res.status(400).send({ message: "Seminar not in schedule" });
            }

            const index = user.schedule.seminars.indexOf(seminar._id);
            if (index === -1) {
                return res.status(400).send({ message: "Seminar not found in schedule" });
            }

            user.schedule.seminars.splice(index, 1);
            await user.schedule.save();
            return res.status(200).json(user);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }
}

module.exports = ScheduleController;