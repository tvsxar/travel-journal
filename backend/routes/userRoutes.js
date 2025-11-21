const express = require('express');
const router = express.Router();
const protect = require('../middlewares/protectMiddleware');
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