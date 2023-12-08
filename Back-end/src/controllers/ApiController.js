const express = require('express');
const router = express.Router();

// Notes CRUD
router.get('/notes', (req, res) => {
  res.json({ "Notes": "ok"  });
});

// patient CRUD
router.get('/patient', (req, res) => {
    res.json({ "patient": "ok"  });
});

module.exports = router;
