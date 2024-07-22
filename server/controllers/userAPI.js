import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';
import { errorHandler } from '../controllers/helpers/errorHandler';

export default class UserController {
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
            const { userId, email } = req.user;

            // Find or create the user in your database
            let user = await User.findOne({ userId });
            if (!user) {
                user = new User({ userId, email });
                await user.save();
            }

            // Send the user information back to the client
            res.json(user);
        } catch (err) {
            res.status(401).send('Invalid token');
        }
    }
}