const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./config");

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    console.log(token); 
}