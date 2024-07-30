const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    schedule: {
        type: Schema.Types.ObjectId,
        ref: 'Schedule'
    },
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User: User
};