import { User } from '../models/userModel';
import { Seminar } from '../models/seminarModel';
import { errorHandler } from '../controllers/helpers/errorHandler';

class ScheduleController {
    static async getSchedule(req, res) {
        try {
            const user = await User.findById(req.params.id);
            return res.status(200).json(user.schedule);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }

    static async addSeminarToSchedule(req, res) {
        try {
            const user = await User.findById(req.user.userId);
            const seminar = await Seminar.findById(req.params.id);
            user.schedule.push(seminar);
            await user.save();
            return res.status(200).send(user);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }

    static async removeSeminarFromSchedule(req, res) {
        try {
            const user = await User.findById(req.user.userId);
            const seminar = await Seminar.findById(req.params.id);
            user.schedule.pull(seminar);
            await user.save();
            return res.status(200).send(user);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }
}

export default ScheduleController;