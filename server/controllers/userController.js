const User = require('../models/userModel');
const Schedule = require('../models/scheduleModel');
const errorHandler = require('./helpers/errorHandler');

class UserController {
    static async getUserById(req, res) {
        try {
            const user = await User.findById(req.params.id);
            return res.status(200).send(user);
        } catch (err) {
            return errorHandler(err, req, res);
        }
    }

    static async findOrCreateUser(req, res) {
        try {
            const { studentID, name } = req.user;
            const userId = studentID;

            // Find or create the user in your database
            let user = await User.findOne({ userId });
            if (!user) {
                user = User.create({ userId: userId, name: name, email: `d${userId}@utahtech.edu` });
                let schedule = new Schedule({ user: user._id, userId: user.userId, username: user.name ,userEmail: user.email });
                await schedule.save();
                user.schedule = schedule._id;
                await user.save();
            }
            // Send the user information back to the client
            res.json(user);
        } catch (err) {
            res.status(401).send('Invalid token');
        }
    }
}

module.exports = UserController;