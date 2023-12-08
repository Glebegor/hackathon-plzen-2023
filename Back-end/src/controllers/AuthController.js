const express = require('express');
const router = express.Router();
const PacientModel = require('../models/PacientModel');

// Auth 
router.get('/login', (req, res) => {
  res.json({ "Login": "ok"  });
});
router.get('/register', (req, res) => {
  res.json({ "Register": "ok"  });
});
router.get('/verify', (req, res) => {
  res.json({ "Verify": "ok" });
});

module.exports = router;
