const { User } = require('../models/userModel');
const { Schedule } = require('../models/scheduleModel');
const { errorHandler } = require('./helpers/errorHandler');

class UserController {
    static async getUserById(req, res) {
        try {
            const { studentID, name } = req.user;
            const userId = studentID;

            let user = await User.findOne({ userId: userId });
            return res.status(200).json(user);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }

    static async findOrCreateUser(req, res) {
        try {
            const { studentID, name } = req.user;
            const userId = studentID;

            let user = await User.findOne({ userId: userId }).populate('schedule');

            if (!user) {
                user = await User.create({ userId: userId, name: name, email: `d${userId}@utahtech.edu` });
                let schedule = await Schedule.create({ user: user._id, userId: user.userId, username: user.name , userEmail: user.email });
                user.schedule = schedule._id;
                await user.save();
            }

            return res.status(201).json(user);
        } catch (err) {
            console.log(err);
            return res.status(401).send('Invalid token');
        }
    }
}

module.exports = UserController;