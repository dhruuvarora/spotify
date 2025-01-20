const jwt = require("jwt");
exports = {}

exports.getToken = async(email,user) =>{
    const token = ExtractJwt.sign({identifier:user._id});
    return token;
}

module.exports = exports;