const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Setting up environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1212;

// Middleware setup
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});