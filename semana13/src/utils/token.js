const jwt = require("jsonwebtoken");
require("dotenv").config();

function signAccessToken(payload){
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET || "15m",
    });
}

function verifyToken(token){
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {signAccessToken, verifyToken};