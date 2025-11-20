const jwt = require('jsonwebtoken');

// Function to generate JWT token
function generateToken(userId) {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

module.exports = generateToken;