const express = require('express');

const router = express.Router();

// Auth 
router.get('', (req, res) => {
  res.json({"message": "Hello World! You have access to this API. But not for all applications"});
});


module.exports = router;
