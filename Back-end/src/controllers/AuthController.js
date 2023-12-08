const express = require('express');
const router = express.Router();
const pool = require('../repositories/postgres');
const bcrypt = require('bcrypt');

require('dotenv').config();

const Secret_key = process.env.SECRET_KEY

// Auth 
router.post('/login', (req, res) => {
  try {
    const {username, password_hash} = req.body;
    const result = pool.query(
      'SELECT * FROM users WHERE username=$1 AND password_hash=$2',
      [username, password_hash]
    );
    result
    .then(result => {
      if (result.rows.length > 0) {
        res.status(200);
        res.json({ "Status": "ok" });  
      } else {
        res.status(404);
        res.json({ "message": "Wrong username or password" });  
      }
    })
    .catch(error => {
      console.error(error);
      res.status(404);
      res.json({ "message": error.message })
    });

  } catch (error) {
    console.log(error.message)
    res.status(505);
    res.json({ "message": error.message });
  }
});
router.post('/register', async (req, res) => {
  const userData = {
    name: '',
    username: '',
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
    const {name, username, surname, password_hash, birth_certificate_number} = req.body;
    const result = await pool.query(
      'INSERT INTO users (name, username, surname, password_hash, birth_certificate_number, isDoctor, date, email, telephone, insurance_number, problems, reason_id, place, emoji_id) VALUES ($1, $2, $3, $4, $5,false, null, null, null, null, null, null, null, null) RETURNING *',
      [name, username, surname, password_hash, birth_certificate_number]
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
