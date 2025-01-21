const jwt = require("jsonwebtoken");
require("dotenv");

exports.getToken = async (email, user) => {
    const token = jwt.sign({ identifier: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

module.exports = exports;
