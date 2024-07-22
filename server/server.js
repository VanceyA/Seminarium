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
app.use('/api', require('./routes/seminarRoutes'));


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});