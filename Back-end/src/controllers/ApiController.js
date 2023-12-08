const express = require('express');
const router = express.Router();
const PacientModel = require('../models/PacientModel');

// Notes CRUD
router.get('/notes', (req, res) => {
  res.json({ "Notes": "ok"  });
});

// Pacient CRUD
router.get('/pacient', (req, res) => {
    res.json({ "Pacient": "ok"  });
});

module.exports = router;
