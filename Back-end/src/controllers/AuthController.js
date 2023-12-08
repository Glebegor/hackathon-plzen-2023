const express = require('express');
const router = express.Router();
const pool = require('../db');

// Auth 
router.get('/login', (req, res) => {
  res.json({ "Login": "ok"  });
});
router.get('/register', async (req, res) => {
  try {
    const {name, surname, password_hash, birth_certificate_number} = req.body;
    const result = await pool.query(
      'INSERT INTO users (name, description) VALUES ($1, $2) RETURNING *',
      [name, description]
    );
  } catch (error) {
    res.json({ "Register": "ok"  });
  }
});
router.get('/verify', (req, res) => {
  res.json({ "Verify": "ok" });
});

module.exports = router;
