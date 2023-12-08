const express = require('express');
const router = express.Router();
const pool = require('../db');

// Auth 
router.get('/login', (req, res) => {
  res.json({ "Login": "ok"  });
});
router.post('/register', async (req, res) => {
  try {
    const {name, surname, password_hash, birth_certificate_number} = req.body;
    const result = await pool.query(
      'INSERT INTO users (name, surname, password_hash, birth_certificate_number) VALUES ($1, $2, $3, $4) RETURNING *',
      [data]
    );
    console.log(data)
    res.json({})
  } catch (error) {
    res.json({ "Register": "ok"  });
  }
});
router.get('/verify', (req, res) => {
  res.json({ "Verify": "ok" });
});

module.exports = router;
