const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const googleAuthRoutes = require('./routes/googleAuthRoutes');
const travelRoutes = require('./routes/travelRoutes');

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
app.use('/api/travels', travelRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('/{*splat}', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  })
}

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});