const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI);

const port = process.env.PORT || 8080;

// Routes
app.use('/api/seminars', require('./routes/seminarRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/schedule', require('./routes/scheduleRoutes'));

// For static files, use index.html (ran into issues with refreshing pages without this)
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});