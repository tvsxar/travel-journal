const generateToken = require('../utils/generateToken');

// Cookie options
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Strict',
    maxAge: 30 * 24 * 60 * 60 * 1000
};

// Google Auth Callback
function googleCallback(req, res) {
    const token = generateToken(req.user._id); 
    res.cookie('token', token, cookieOptions);
    res.redirect(`${process.env.CLIENT_URL}`);
}

module.exports = googleCallback;