const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');

router.get('/notes', (req, res) => {
  const model = new UserModel();
  const data = model.getAllData();
  res.json({ "Notes": "ok"  });
});

module.exports = router;
