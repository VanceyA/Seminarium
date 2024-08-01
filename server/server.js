const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI);

const port = process.env.PORT || 8080;

function verifyToken(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1];
    
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    next();
}

// Routes
app.use('/api/seminars', require('./routes/seminarRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/schedule', require('./routes/scheduleRoutes'));

app.post('/api/get-jwt', (req, res) => {
    const secret_key = process.env.SECRET_KEY;
    const payload = {
        studentID: "00111111",
        name: "John Smith"
    };
    const options = {
        expiresIn: '1h'
    };

    const token = jwt.sign(payload, secret_key, options);
    res.json({ token });
});


app.get('/api/login', verifyToken, (req, res) => {
    res.json(req.user);
});

// For static files, use index.html (ran into issues with refreshing pages without this) (vue-router compatability)
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});