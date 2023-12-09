const jwt = require("jsonwebtoken");
require('dotenv').config();
const pool = require('../repositories/postgres');
const Secret_key = process.env.SECRET_KEY

function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader!== 'undefined') {
    const bearer = bearerHeader.split(' ');
    req.token = bearer[1];
    next() 
  } else {
    res.status(403);
    res.json({ "message": "No token provided" });
  }
}

module.exports = verifyToken;