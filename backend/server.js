const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const googleAuthRoutes = require('./routes/googleAuthRoutes');

// Setting up environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1212;

// Connect to database
connectDB();

// Passport configuration
require('./config/passport');

// Middleware setup
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
// Routes
app.use('/api/auth/google', googleAuthRoutes);
app.use('/api/auth', userRoutes);

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});