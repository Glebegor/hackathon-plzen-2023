const express = require('express');
const router = express.Router();
const pool = require('../repositories/postgres');



// Auth 
router.get('/login', (req, res) => {
  res.json({ "Login": "ok"  });
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
    console.log(req.body);
    const {name, surname, password_hash, birth_certificate_number} = req.body;
    const result = await pool.query(
      'INSERT INTO users (name, surname, password_hash, birth_certificate_number, isDoctor) VALUES ($1, $2, $3, $4, false) RETURNING *',
      [userData.name,
       userData.surname,
       userData.birth_certificate_number,
       userData.date,
       userData.email,
       userData.telephone,
       userData.insurance_number,
       userData.problems,
       userData.reason_id,
       userData.place,
       userData.isDoctor,
       userData.emoji_id]
    );
    console.log(userData)
    res.json({})
  } catch (error) {
    console.log(error.message)
    res.json({ "message": error.message });
  }
});
router.get('/verify', (req, res) => {
  res.json({ "Verify": "ok" });
});

module.exports = router;
