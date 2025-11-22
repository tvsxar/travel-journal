const mongoose = require('mongoose');

// Setting up environment variables
require('dotenv').config();

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, 
        required: function() {
            return !this.googleId;
        } },
    googleId: { type: String, default: null }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;