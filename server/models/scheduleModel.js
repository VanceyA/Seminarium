const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    userId: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    seminars: [{
        type: Schema.Types.ObjectId,
        ref: 'Seminar',
        default: []
    }],
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = {
    Schedule: Schedule
}