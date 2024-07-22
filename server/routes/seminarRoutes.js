import express from 'express';
import router from express.Router();
import jwt from 'jsonwebtoken';

import { getAllSeminars } from '../controllers/seminarAPI';

function verifyToken(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }

    try {
        const decoded = jwt.verify(token, 'secret-key');
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    next();
}

// router.get('/seminars', verifyToken, getAllSeminars);
router.get('/seminars', getAllSeminars);

module.exports = router;