const mongoose = require('mongoose');
const { Schema } = mongoose;

const seminarSchema = Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Lecture', 'Panel']
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
        enum: ['All Majors', 'Applied & Computational Mathematics', 'Biology', 'Bioinformatics', 'Biotechnology', 'Chem/Biochem', 'Computer Science', 'Cybersecurity', 'Design', 'Earth & Environmental Science', 'Engineering', 'Geoscience', 'Information Technology', 'Mathematics', 'STEM Education', 'Software Engineering']
    }],
    presenters: {
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