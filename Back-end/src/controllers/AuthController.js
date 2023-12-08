const express = require('express');
const router = express.Router();
const pool = require('../repositories/postgres');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const Secret_key = process.env.SECRET_KEY
function generateAccessToken(username) {
    return jwt.sign(username, Secret_key, { expiresIn: '1800s' });
}

// Auth 
router.post('/login', (req, res) => {
  try {
    const {name, password_hash} = req.body;
    const result = pool.query(
      'SELECT * FROM users WHERE name=$1 AND password_hash=$2 RETURNING *',
      [name, password_hash]
    );
    console.log(result)
    res.json({ "Login": "ok"  });  
  } catch (error) {
    console.log(error.message)
    res.json({ "message": error.message });
  }
});
router.post('/register', async (req, res) => {
  const userData = {
    name: '',
    surname: '',
    birth_certificate_number: '',
    date: '',
    email: '',
    telephone: '',
    insurance_number: '',
    problems: '',
    reason_id: '',
    place: '',
    isDoctor: '',
    emoji_id: ''
  };
  try {
    const {name, surname, password_hash, birth_certificate_number} = req.body;
    const result = await pool.query(
      'INSERT INTO users (name, surname, password_hash, birth_certificate_number, isDoctor, date, email, telephone, insurance_number, problems, reason_id, place, emoji_id) VALUES ($1, $2, $3, $4, false, null, null, null, null, null, null, null, null) RETURNING *',
      [name, surname, password_hash, birth_certificate_number]
    );
    res.json({"Status": "ok"})
  } catch (error) {
    console.log(error.message)
    res.json({ "message": error.message });
  }
});
router.get('/verify', (req, res) => {
  try {

  } catch (error) {
    console.log(error.message)
    res.json({ "message": error.message });
  }
});

module.exports = router;
