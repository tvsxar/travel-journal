const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

// Setting up environment variables
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.SERVER_URL}/api/auth/google/callback`
},
async (accessToken, refreshToken, profile, done) => {
    const { id, emails, displayName } = profile;
    const email = emails[0].value;

    try {
        const user = await User.findOne({ $or: [{ googleId: id }, { email }] });

        if (user) return done(null, user);

        const newUser = new User({
            username: displayName,
            email,
            googleId: id
        })
        await newUser.save();
        done(null, newUser);
    } catch (error) {
        console.error("Error in Google Strategy:", error.message);
        done(error, null);
    }
}))