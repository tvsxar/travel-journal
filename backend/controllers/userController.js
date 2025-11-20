const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// Cookie options
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict',
    maxAge: 30 * 24 * 60 * 60 * 1000
}

// Register User
async function registerUser(req, res) {
    try {
        let { username, email, password } = req.body;

        // Trim and normalize inputs
        email = email.trim().toLowerCase();
        username = username.trim();  

        // Basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });

        // If user exists, return error
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email or username already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();

        // Generate token
        const token = generateToken(newUser._id);

        // Set cookie
        res.cookie('token', token, cookieOptions);

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error('Registration error:', error.message);
        res.status(500).json({message: 'Server error while registering user'});
    }
}

// Login User
async function loginUser(req, res) {
    try {
        let { email, password } = req.body;

        // Trim and normalize email
        email = email.trim().toLowerCase();

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // Find user by email
        const user = await User.findOne({ email });

        // If user not found
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate token
        const token = generateToken(user._id);

        // Set cookie
        res.cookie('token', token, cookieOptions);

        res.status(200).json({
            message: 'User logged in successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })
    } catch (error) {
        console.error('Login error:', error.message);
        res.status(500).json({message: 'Server error while logging in user'});
    }
}

// Logout User
async function logoutUser(req, res) {
    res.cookie('token', '', {...cookieOptions, maxAge: 1 });
    res.status(200).json({ message: 'User logged out successfully' });
}

// Get Me (current user)
async function getMe(req, res) {
    // req.user is set in the protect middleware
    res.json(req.user);
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getMe
}