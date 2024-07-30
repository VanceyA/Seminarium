const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken');

const { getAllSeminars, getSeminarById } = require('../controllers/seminarController');

// function verifyToken(req, res, next) {
//     const token = req.body.token || req.query.token || req.headers['x-access-token'];
    
//     if (!token) {
//         return res.status(403).send('A token is required for authentication');
//     }

//     try {
//         const decoded = jwt.verify(token, 'secret-key');
//         req.user = decoded;
//     } catch (err) {
//         return res.status(401).send('Invalid Token');
//     }
//     next();
// }

// router.get('/', verifyToken, getAllSeminars);

router.get('/', getAllSeminars);
router.get('/:id',getSeminarById);

module.exports = router;