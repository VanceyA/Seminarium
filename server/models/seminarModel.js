const mongoose = require('mongoose');
const { Schema } = mongoose;

const seminarSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Lecture', 'Panel', 'Workshop']
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    fields: [{
        type: String,
        required: true,
        enum: ['Computing', 'Artificial Intelligence', 'Cyber Security']
    }],
    presenter: {
        type: String,
        required: true
    },
    room: {
        type: String,
        required: true
    }
});

const Seminar = mongoose.model('Seminar', seminarSchema);

module.exports = {
    Seminar: Seminar,
};