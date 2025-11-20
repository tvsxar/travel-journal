const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Setting up environment variables
require('dotenv').config();

// Middleware to protect routes
async function protect(req, res, next) {
    let token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' })    
    };

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return res.status(401).json({ message: 'Not authorized, user not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).json({message: 'Not authorized'});
    }
}

module.exports = protect;