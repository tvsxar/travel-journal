const express = require('express');
const router = express.Router();
const passport = require('passport');
const googleCallback = require('../controllers/googleAuthController');

// Google Auth Route
router.get('/', 
    passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google Auth Callback
router.get('/callback', 
    passport.authenticate('google', { failureRedirect: `${process.env.CLIENT_URL}/login`, session: false }),
    googleCallback);

module.exports = router;