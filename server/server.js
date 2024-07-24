const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI);

const port = process.env.PORT || 8080;


// Routes
app.use('/api/seminars', require('./routes/seminarRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/schedule', require('./routes/scheduleRoutes'));


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});