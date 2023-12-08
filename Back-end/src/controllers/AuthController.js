const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');

router.get('/login', (req, res) => {
  const model = new UserModel();
  const data = model.getAllData();
  res.json({ "Login": "ok"  });
});
router.get('/register', (req, res) => {
  const model = new UserModel();
  const data = model.getAllData();
  res.json({ "Register": "ok"  });
});
router.get('/verify', (req, res) => {
  const model = new UserModel();
  const data = model.getAllData();
  res.json({ "Verify": "ok" });
});
module.exports = router;
