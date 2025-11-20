const express = require('express');
const router = express.Router();
// Here will be a middleware to protect routes
const { 
    registerUser ,
    loginUser,
    logoutUser,
    getMe
} = require('../controllers/userController');

// Register
router.post('/register', registerUser);

// Login
router.post('/login', loginUser);

// Logout
router.post('/logout', logoutUser);

// Me (check token for authorized routes)
router.get('/me', protect, getMe);

module.exports = router;