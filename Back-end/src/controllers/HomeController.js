const express = require('express');
const router = express.Router();

// Auth 
router.get('', (req, res) => {
  res.json({"Home": "ok"});
});


module.exports = router;
